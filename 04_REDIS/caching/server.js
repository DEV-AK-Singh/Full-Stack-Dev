const express = require("express");
const Product = require("./models/Product");
const mongoose = require("mongoose");
const Redis = require("ioredis");

const app = express();

app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/caching")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

const redis = new Redis(
  {
    host: "localhost",
    port: 6379,
  },
  {
    lazyConnect: true,
  }
);

const rateLimiter = async (req, res, next) => {
  const ip = req.ip;
  const key = `rate_limit:${ip}`; 
  const limit = 10;
  try {
    const current = await redis.incr(key);
    if (current === 1) {
      await redis.expire(key, 60); // Set expiration only on first hit
    } 
    if (current > limit) {
      // limit requests per minute
      return res.status(429).json({ error: "Too many requests", limit: `${limit} requests per minute`, requests: `${current} requests` });
    } 
    next();
  } catch (err) {
    console.error("Rate limiter error:", err);
    next(); // Fail open
  }
};

app.use(rateLimiter);

const cacheMiddleware = async (req, res, next) => {
  const key = `KEY_${req.originalUrl.replaceAll("/", "-")}`;
  const cachedData = await redis.get(key);
  if (cachedData) {
    return res.json({ status: "success", data: JSON.parse(cachedData) });
  } else {
    req.key = key;
    next();
  }
};

app.get("/products", cacheMiddleware, async (req, res) => {
  try {
    const mongoRes = await Product.find();
    await redis.set(req.key, JSON.stringify(mongoRes));
    res.json({ status: "success", data: mongoRes });
  } catch (error) {
    res.json({ status: "error", data: error });
  }
});

app.post("/products", async (req, res) => {
  const { name, price } = req.body;
  const key = `KEY_${req.originalUrl.replaceAll("/", "-")}`;
  try {
    const mongoRes = await Product.create({ name, price });
    await redis.del(key);
    res.json({ status: "success", data: mongoRes });
  } catch (error) {
    res.json({ status: "error", data: error });
  }
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});

import express from "express";

const app: express.Application = express();

const dummyUrl = "https://jsonplaceholder.typicode.com";

app.get(`/posts`, async (req: express.Request, res: express.Response) => {
    const response = await fetch(`${dummyUrl}/posts`);
    const data = await response.json();
    res.send(data);
});

app.get(`/posts/:id`, async (req: express.Request, res: express.Response) => {
    const response = await fetch(`${dummyUrl}/posts/${req.params.id}`);
    const data = await response.json();
    res.send(data);
}); 

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
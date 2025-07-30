import express from 'express'
import mongoose from 'mongoose';

const username : string = process.env.MONGO_USER || 'root';
const password : string = process.env.MONGO_PASSWORD || 'root';
const portNumber : string = process.env.MONGO_PORT || '27017';
const host : string = process.env.MONGO_HOST || 'localhost';
const mongoDbUri : string = `mongodb://${username}:${password}@${host}:${portNumber}`;  

const UserSchema : mongoose.Schema = new mongoose.Schema({
    name: String,
    email: String 
});

const User = mongoose.model('User', UserSchema);

(async () => {
    try {
        await mongoose.connect(mongoDbUri);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
})();

const app: express.Application = express()
const port: number = 3000
app.use(express.json());

app.get('/users', async (req: express.Request, res: express.Response) : Promise<void> => {
    const users = await User.find();
    res.json(users);
});

app.post('/users', async (req: express.Request, res: express.Response) : Promise<void> => {
    const { name, email } = req.body; 
    const user = new User({ name, email });
    await user.save();
    res.json(user);
});

app.get('/users/:id', async (req: express.Request, res: express.Response) : Promise<void> => {
    const user = await User.findById(req.params.id);
    if (!user) {
        res.status(404).send('User not found');
        return;
    }
    res.json(user);
});

app.put('/users/:id', async (req: express.Request, res: express.Response) : Promise<void> => {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!user) {
        res.status(404).send('User not found');
        return;
    }
    res.json(user);
});

app.delete('/users/:id', async (req: express.Request, res: express.Response) : Promise<void> => {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
        res.status(404).send('User not found');
        return;
    }
    res.json(user);
});

app.get('/health', (req: express.Request, res: express.Response) : void => {
    res.send('Health check')
});

app.listen(port, () : void => {
    console.log(`App listening on port http://localhost:${port}`)
});
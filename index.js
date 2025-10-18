import express from 'express'

import mongoose from 'mongoose'

import 'dotenv/config'

import User from './Data/user.js'

const port = 3000

const connectionString = 'mongodb+srv://clementnswana1994_db_user:Chomba@cluster0.bt4oawr.mongodb.net/food?retryWrites=true&w=majority&appName=Cluster0'
await mongoose.connect(connectionString)

console.log('connect to MongoDB');
const app = express();

// Define a simple route
app.get('/', async (req, res) => {
res.send('Server is running!');
});


// Get all users
app.get('/users', async (req, res) => {
try {
const users = await User.find()
console.log(users)
res.json(users);
} catch (error) {
res.status(500).json({ message: error.message });
}
});

// Create a new user
app.post('/users', async (req, res) => {
try {
const user = new User(req.body);
const result = await userDoc.save();
console.log(result)
res.json(result)
res.status(201).json(user);
} catch (error) {
res.status(400).json({ message: error.message });
}
});

// Update a user by ID
app.put('/users/:id', async (req, res) => {
try {
const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
if (!user) return res.status(404).json({ error: 'User not found' });
res.json(user);
} catch (error) {
res.status(400).json({ message: error.message });
}
});

// Delete a user by ID
app.delete('/users/:id', async (req, res) => {
try {
const user = await User.findByIdAndDelete(req.params.id);
if (!user) return res.status(404).json({ error: 'User not found' });
res.json({ message: 'User deleted successfully' });
} catch (error) {
res.status(500).json({ message: error.message });
}
});

// Start the server
app.listen(3000, async () => {
    console.log('Listening on port: ', port)
})
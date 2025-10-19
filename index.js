import express from 'express'

import mongoose from 'mongoose'

import Product from './Data/product.js'

const port = 3000

const connectionString = 'mongodb+srv://clementnswana1994_db_user:Chomba@cluster0.bt4oawr.mongodb.net/My_Data?retryWrites=true&w=majority&appName=Cluster0'
await mongoose.connect(connectionString)

console.log('connect to MongoDB');
const app = express();

app.use(express.json());

// Define a simple route
app.get('/', async (req, res) => {
res.send('Server is running!');
});


// Create a new user
app.post('/api/products', async (req, res) => {
try {
    const product = await Product.create(req.body);
// const product = await productDoc.save(req.body);
    res.status(201).json(product);
 } catch (error) {
    res.status(400).json({ message: error.message });
 }
});

 // Get all users
 app.get('/api/products', async (req, res) => {
 try {
    const products = await Product.find({})
    res.status(200).json(products);
 } catch (error) {
 res.status(500).json({ message: error.message });
 }
});

// // Update a user by ID
// app.put('/users/:id', async (req, res) => {
// try {
// const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
// if (!user) return res.status(404).json({ error: 'User not found' });
// res.json(user);
// } catch (error) {
// res.status(400).json({ message: error.message });
// }
// });

// // Delete a user by ID
// app.delete('/users/:id', async (req, res) => {
// try {
// const user = await User.findByIdAndDelete(req.params.id);
// if (!user) return res.status(404).json({ error: 'User not found' });
// res.json({ message: 'User deleted successfully' });
// } catch (error) {
// res.status(500).json({ message: error.message });
// }
// });

// Start the server
app.listen(3000, async () => {
    console.log('Listening on port:', port)
})
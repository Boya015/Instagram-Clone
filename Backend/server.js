const express = require('express');
const userRoutes = require('./routes/userRoutes');  // Adjust path as needed
const mongoose = require('mongoose');
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// MongoDB connection
mongoose
  .connect('mongodb+srv://InstagramServer:Wonderman25@swiggycloneapp.aw6ab3t.mongodb.net/?retryWrites=true&w=majority&appName=SwiggyCloneApp', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Use the user routes
app.use('/api', userRoutes);  // Route prefix can vary

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const express = require('express');
const app = express();
const port = 3000; // You can change this to any port you prefer

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to Tuner');
});

// 404 Route
app.use((req, res) => {
  res.status(404).send('404 - Page not found');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

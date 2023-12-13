const express = require('express');
const path = require('path');
const db = require('./config/connection');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
//need? 
// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname, '../client/build')));
// }

// app.use(express.static(path.join(__dirname, "../client/dist")));


// app.get("/*", function (req, res) {
//   res.sendFile(path.join(__dirname, "../client/dist", "index.html"))
// });

// Serve static files from the Vite build directory
app.use(express.static(path.join(__dirname, '../client/dist')));

// Define your API routes here
// Example: app.use('/api', apiRoutes);

// Catch-all route for SPA
app.get('*', (req, res, next) => {
  // Use a regex to exclude API routes or specific paths
  if (/^\/api/.test(req.path)) {
    return next();  // Skip to next middleware (which could be error handling or 404)
  }
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

app.use(routes);
db.once('open', () => {
  app.listen(PORT, () => console.log(` Now listening on http://localhost:${PORT}`));
});
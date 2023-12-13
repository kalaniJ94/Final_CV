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

app.use(express.static(path.join(__dirname, "../client/dist")));


// app.get("/*", function (req, res) {
//   res.sendFile(path.join(__dirname, "../client/dist", "index.html"))
// });

app.use(routes);
//trying to trigger a new push/change 
db.once('open', () => {
  app.listen(PORT, () => console.log(` Now listening on http://localhost:${PORT}`));
});
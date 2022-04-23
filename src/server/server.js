const express = require('express');
const path = require('path');

const React = require('react');
const ReactDOMServer = require('react-dom/server');
const App = require('../components/App');

const PORT = process.env.PORT || 3000;
const app = express();

app.use('/static', express.static(path.join(__dirname, '..', '..', 'dist')));

app.get('/', (req, res) => {
  const root = React.createElement(App);
  const html = ReactDOMServer.renderToString(root);

  res.send(html);
});

app.listen(PORT, () => {
  console.log(path.join(__dirname, '..'));
  console.log(`Server is listening on port ${PORT}`);
});

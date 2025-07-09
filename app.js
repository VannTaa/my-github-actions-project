const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
res.send('Hello, Nika!11');

});

module.exports = app;

if (require.main === module) {
  app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
  });
}

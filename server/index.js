const express = require('express');
const app = express();
app.use(express.static(path.resolve(__dirname, '../client/build')))
const port = 8000; // Choose the desired port number



app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

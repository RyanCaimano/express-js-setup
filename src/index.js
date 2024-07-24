import express from 'express';

const app = express()
const port = 3005

app.get('/', (req, res) => {
  res.send('Express app is running!');
});

app.listen(port, () => {
  console.log(`Express app listening on port ${port}`);
});
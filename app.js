const express = require('express');
const app = express();

function calcFibonacci(n) {
  if (n <= 1) return n;
  return calcFibonacci(n - 1) + calcFibonacci(n - 2);
}

app.get('/fibonacci/:n', (req, res) => {
  const n = parseInt(req.params.n);

  if (isNaN(n) || n < 0) {
    return res.status(400).json({ error: 'The value of n must be a non-negative integer' });
  }

  const result = calcFibonacci(n);

  res.json({ n, result });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

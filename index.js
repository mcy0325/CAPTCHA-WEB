const express = require('express');
const svgCaptcha = require('svg-captcha');
const app = express();

app.use(express.static('public'));
app.use(express.json());

let captchaText = '';

app.get('/captcha', (req, res) => {
  const captcha = svgCaptcha.create();
  captchaText = captcha.text;
  res.type('svg');
  res.status(200).send(captcha.data);
});

app.post('/verify', (req, res) => {
  const { input } = req.body;
  if (input === captchaText) {
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
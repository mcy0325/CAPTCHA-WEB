const fetch = require('node-fetch');
const Tesseract = require('tesseract.js');
const fs = require('fs');

(async () => {
  // 1. 서버에서 CAPTCHA SVG 이미지 가져오기
  const res = await fetch('http://localhost:3000/captcha');
  const svg = await res.text();

  // 2. SVG를 PNG로 변환 (tesseract.js는 SVG를 직접 인식하지 못함)
  // 간단하게는 svg 파일로 저장 후, 온라인 변환기나 sharp 등으로 PNG로 변환 필요
  fs.writeFileSync('captcha.svg', svg);

  // sharp로 변환 (npm install sharp 필요)
  const sharp = require('sharp');
  await sharp('captcha.svg').png().toFile('captcha.png');

  // 3. Tesseract로 PNG 이미지 인식
  const { data: { text } } = await Tesseract.recognize('captcha.png', 'eng');
  console.log('OCR 결과:', text.trim());
})();
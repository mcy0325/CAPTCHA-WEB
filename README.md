# CAPTCHA 웹페이지 예제

간단한 Node.js(Express) 기반의 CAPTCHA 웹페이지와 Playwright를 이용한 테스트 예제입니다.

## 주요 기능
- SVG CAPTCHA 이미지 생성 및 검증
- Playwright로 자동화 테스트

## 설치 방법
```bash
npm install
```

## 실행 방법
```bash
npm run dev
```
- 서버가 실행되면 [http://localhost:3000](http://localhost:3000)에서 확인할 수 있습니다.

## 테스트 방법
```bash
npx playwright test
```
- Playwright가 자동으로 CAPTCHA 페이지를 테스트합니다.

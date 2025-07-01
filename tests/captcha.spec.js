const { test, expect } = require('@playwright/test');

test('CAPTCHA 페이지 로드 및 입력', async ({ page }) => {
  await page.goto('http://localhost:3000');
  // CAPTCHA SVG가 로드되는지 확인
  await expect(page.locator('#captcha svg')).toBeVisible();
  // 임의의 값 입력 후 결과 확인
  await page.fill('#input', 'wrong');
  await page.click('button');
  await expect(page.locator('#result')).toHaveText('Wrong!');
});
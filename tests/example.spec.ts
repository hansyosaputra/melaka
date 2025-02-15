import { test, expect } from '@playwright/test';

/*
TEST CASE
1. Register Succesfully
2. Register Without Name Input
3. Register with Name Input (Less than 5 Characters)
4. Phone Number (Less than 10 numbers)
5. Phone Number (More than 12 numbers)
6. Business Name Input
7. Business Name Input (Special Characters)
8. Without Business Name Input
9. Without Email Input
10. Email Input (Invalid Email Format)
11. Without Password
12. Password (Min. 8 characters, must be combination)
13. Without Confirm Password. 
14. Confirm Password (Does not match the password.)
15. No Input (All fields)
*/

test('Register Successfully', async ({ page }) => {

  await page.goto('https://dashboard.melaka.app/register');

  const nameInput = page.getByTestId('register__text-field__name');
  const phoneInput = page.getByTestId('register__text-field__phone-number');
  const businessNameInput = page.getByTestId('register__text-field__business-name');
  const emailInput = page.getByTestId('register__text-field__email');
  const passwordInput = page.getByTestId('register__text-field__password');
  const confirmPasswordInput = page.getByTestId('register__text-field__confirm-password');
  const termsCheckbox = page.getByTestId('register__checkbox__tnc');
  const registerButton = page.getByTestId('register__button__sign-up');

  // Fill out registration fields
  await nameInput.fill('Hans Yosaputra');
  // Min. 5 characters
  await phoneInput.fill('8123456789');
  // 10-12 Numbers
  await businessNameInput.fill('MELAKA');
  // Required Fields
  await emailInput.fill('hansyosaputra@example.com');
  // Required Fields
  await passwordInput.fill('MELAKA!23');
  // Min. 8 characters, a combination of letters and numbers.
  await confirmPasswordInput.fill('MELAKA!23');
  // Required Fields, Does not match the password.

  await termsCheckbox.check(); 
  // Ensures checkbox is checked

  // Submit registration
  await registerButton.click();

});

test('Register without Name Input', async ({ page }) => {

  await page.goto('https://dashboard.melaka.app/register');

  const nameInput = page.getByTestId('register__text-field__name');
  const phoneInput = page.getByTestId('register__text-field__phone-number');
  const businessNameInput = page.getByTestId('register__text-field__business-name');
  const emailInput = page.getByTestId('register__text-field__email');
  const passwordInput = page.getByTestId('register__text-field__password');
  const confirmPasswordInput = page.getByTestId('register__text-field__confirm-password');
  const termsCheckbox = page.getByTestId('register__checkbox__tnc');
  const signUpButton = page.getByTestId('register__button__sign-up'); 
  const nameError = page.getByTestId('register__text-field__name__error');

  await nameInput.fill(''); // No Input
  await phoneInput.fill('8123456789');
  await businessNameInput.fill('MELAKA');
  await emailInput.fill('hansyosaputra@example.com');
  await passwordInput.fill('MELAKA123');
  await confirmPasswordInput.fill('MELAKA123');
  await termsCheckbox.check();

  await signUpButton.click();

  await expect(nameError).toHaveText('Wajib diisi.');
  await expect(nameError).toBeVisible();

});

test('Register with Name Input (Less than 5 Characters)', async ({ page }) => {

  await page.goto('https://dashboard.melaka.app/register');

  const nameInput = page.getByTestId('register__text-field__name');
  const phoneInput = page.getByTestId('register__text-field__phone-number');
  const businessNameInput = page.getByTestId('register__text-field__business-name');
  const emailInput = page.getByTestId('register__text-field__email');
  const passwordInput = page.getByTestId('register__text-field__password');
  const confirmPasswordInput = page.getByTestId('register__text-field__confirm-password');
  const termsCheckbox = page.getByTestId('register__checkbox__tnc');
  const signUpButton = page.getByTestId('register__button__sign-up'); 
  const nameError = page.getByTestId('register__text-field__name__error');

  await nameInput.fill('Han'); // Less than 5 characters
  await phoneInput.fill('8123456789');
  await businessNameInput.fill('MELAKA');
  await emailInput.fill('hansyosaputra@example.com');
  await passwordInput.fill('MELAKA123');
  await confirmPasswordInput.fill('MELAKA123');
  await termsCheckbox.check();

  await signUpButton.click();

  await expect(nameError).toBeVisible();
  await expect(nameError).toHaveText('Wajib diisi, min. 5 karakter.');

});

test('Phone Number (Less than 10 numbers)', async ({ page }) => {

  await page.goto('https://dashboard.melaka.app/register');

  const nameInput = page.getByTestId('register__text-field__name');
  const phoneInput = page.getByTestId('register__text-field__phone-number');
  const businessNameInput = page.getByTestId('register__text-field__business-name');
  const emailInput = page.getByTestId('register__text-field__email');
  const passwordInput = page.getByTestId('register__text-field__password');
  const confirmPasswordInput = page.getByTestId('register__text-field__confirm-password');
  const termsCheckbox = page.getByTestId('register__checkbox__tnc');
  const signUpButton = page.getByTestId('register__button__sign-up'); 
  const nameError = page.getByTestId('register__text-field__phone-number__error');

  await nameInput.fill('Hans Yosaputra');
  await phoneInput.fill('81234'); // Less than 10 numbers
  await businessNameInput.fill('MELAKA');
  await emailInput.fill('hansyosaputra@example.com');
  await passwordInput.fill('MELAKA123');
  await confirmPasswordInput.fill('MELAKA123');
  await termsCheckbox.check();

  await signUpButton.click();

  await expect(nameError).toBeVisible();
  await expect(nameError).toHaveText('Wajib diisi. Nomor telepon tidak boleh kurang dari 10 atau lebih dari 12 karakter.');

});

test('Phone Number (More than 12 numbers)', async ({ page }) => {

  await page.goto('https://dashboard.melaka.app/register');

  const nameInput = page.getByTestId('register__text-field__name');
  const phoneInput = page.getByTestId('register__text-field__phone-number');
  const businessNameInput = page.getByTestId('register__text-field__business-name');
  const emailInput = page.getByTestId('register__text-field__email');
  const passwordInput = page.getByTestId('register__text-field__password');
  const confirmPasswordInput = page.getByTestId('register__text-field__confirm-password');
  const termsCheckbox = page.getByTestId('register__checkbox__tnc');
  const signUpButton = page.getByTestId('register__button__sign-up'); 
  const nameError = page.getByTestId('register__text-field__phone-number__error');

  await nameInput.fill('Hans Yosaputra');
  await phoneInput.fill('81234123412348'); // More than 12 numbers
  await businessNameInput.fill('MELAKA');
  await emailInput.fill('hansyosaputra@example.com');
  await passwordInput.fill('MELAKA123');
  await confirmPasswordInput.fill('MELAKA123');
  await termsCheckbox.check();

  await signUpButton.click();

  await expect(nameError).toBeVisible();
  await expect(nameError).toHaveText('Wajib diisi. Nomor telepon tidak boleh kurang dari 10 atau lebih dari 12 karakter.');

});

test('Business Name Input', async ({ page }) => {

  await page.goto('https://dashboard.melaka.app/register');

  const nameInput = page.getByTestId('register__text-field__name');
  const phoneInput = page.getByTestId('register__text-field__phone-number');
  const businessNameInput = page.getByTestId('register__text-field__business-name');
  const emailInput = page.getByTestId('register__text-field__email');
  const passwordInput = page.getByTestId('register__text-field__password');
  const confirmPasswordInput = page.getByTestId('register__text-field__confirm-password');
  const termsCheckbox = page.getByTestId('register__checkbox__tnc');
  const signUpButton = page.getByTestId('register__button__sign-up'); 
  const nameError = page.getByTestId('register__text-field__business-name__error');

  await nameInput.fill('Hans Yosaputra');
  await phoneInput.fill('8123456789');
  await businessNameInput.fill(''); // No Input
  await emailInput.fill('hansyosaputra@example.com');
  await passwordInput.fill('MELAKA123');
  await confirmPasswordInput.fill('MELAKA123');
  await termsCheckbox.check();

  await signUpButton.click();

  await expect(nameError).toBeVisible();
  await expect(nameError).toHaveText('Wajib diisi.');

});

test('Business Name Input (Special Characters)', async ({ page }) => {

  await page.goto('https://dashboard.melaka.app/register');

  const nameInput = page.getByTestId('register__text-field__name');
  const phoneInput = page.getByTestId('register__text-field__phone-number');
  const businessNameInput = page.getByTestId('register__text-field__business-name');
  const emailInput = page.getByTestId('register__text-field__email');
  const passwordInput = page.getByTestId('register__text-field__password');
  const confirmPasswordInput = page.getByTestId('register__text-field__confirm-password');
  const termsCheckbox = page.getByTestId('register__checkbox__tnc');
  const signUpButton = page.getByTestId('register__button__sign-up'); 
  const nameError = page.getByTestId('register__text-field__business-name__error');

  await nameInput.fill('Hans Yosaputra');
  await phoneInput.fill('8123456789');
  await businessNameInput.fill('Bus!n3ss'); // Special Characters
  await emailInput.fill('hansyosaputra@example.com');
  await passwordInput.fill('MELAKA123');
  await confirmPasswordInput.fill('MELAKA123');
  await termsCheckbox.check();

  await signUpButton.click();

  await expect(nameError).toBeVisible();
  await expect(nameError).toHaveText('Tidak dapat menggunakan karakter spesial selain titik (.) koma (,) strip (-)');

});

test('Without Business Name Input', async ({ page }) => {

  await page.goto('https://dashboard.melaka.app/register');

  const nameInput = page.getByTestId('register__text-field__name');
  const phoneInput = page.getByTestId('register__text-field__phone-number');
  const businessNameInput = page.getByTestId('register__text-field__business-name');
  const emailInput = page.getByTestId('register__text-field__email');
  const passwordInput = page.getByTestId('register__text-field__password');
  const confirmPasswordInput = page.getByTestId('register__text-field__confirm-password');
  const termsCheckbox = page.getByTestId('register__checkbox__tnc');
  const signUpButton = page.getByTestId('register__button__sign-up'); 
  const nameError = page.getByTestId('register__text-field__business-name__error');

  await nameInput.fill('Hans Yosaputra');
  await phoneInput.fill('8123456789');
  await businessNameInput.fill(''); // No Input
  await emailInput.fill('hansyosaputra@example.com');
  await passwordInput.fill('MELAKA123');
  await confirmPasswordInput.fill('MELAKA123');
  await termsCheckbox.check();

  await signUpButton.click();

  await expect(nameError).toBeVisible();
  await expect(nameError).toHaveText('Wajib diisi.');

});

test('Without Email Input', async ({ page }) => {

  await page.goto('https://dashboard.melaka.app/register');

  const nameInput = page.getByTestId('register__text-field__name');
  const phoneInput = page.getByTestId('register__text-field__phone-number');
  const businessNameInput = page.getByTestId('register__text-field__business-name');
  const emailInput = page.getByTestId('register__text-field__email');
  const passwordInput = page.getByTestId('register__text-field__password');
  const confirmPasswordInput = page.getByTestId('register__text-field__confirm-password');
  const termsCheckbox = page.getByTestId('register__checkbox__tnc');
  const signUpButton = page.getByTestId('register__button__sign-up'); 
  const nameError = page.getByTestId('register__text-field__email__error');

  await nameInput.fill('Hans Yosaputra');
  await phoneInput.fill('8123456789');
  await businessNameInput.fill('MELAKA');
  await emailInput.fill(''); // No Input
  await passwordInput.fill('MELAKA123');
  await confirmPasswordInput.fill('MELAKA123');
  await termsCheckbox.check();

  await signUpButton.click();

  await expect(nameError).toBeVisible();
  await expect(nameError).toHaveText('Wajib diisi.');

});

test('Email Input (Invalid Email Format)', async ({ page }) => {

  await page.goto('https://dashboard.melaka.app/register');

  const nameInput = page.getByTestId('register__text-field__name');
  const phoneInput = page.getByTestId('register__text-field__phone-number');
  const businessNameInput = page.getByTestId('register__text-field__business-name');
  const emailInput = page.getByTestId('register__text-field__email');
  const passwordInput = page.getByTestId('register__text-field__password');
  const confirmPasswordInput = page.getByTestId('register__text-field__confirm-password');
  const termsCheckbox = page.getByTestId('register__checkbox__tnc');
  const signUpButton = page.getByTestId('register__button__sign-up'); 
  const nameError = page.getByTestId('register__text-field__email__error');

  await nameInput.fill('Hans Yosaputra');
  await phoneInput.fill('8123456789');
  await businessNameInput.fill('MELAKA');
  await emailInput.fill('hanshanshans'); // No Input
  await passwordInput.fill('MELAKA123');
  await confirmPasswordInput.fill('MELAKA123');
  await termsCheckbox.check();

  await signUpButton.click();

  await expect(nameError).toBeVisible();
  await expect(nameError).toHaveText('Harap isi dengan format yang benar.');

});

test('Without Password', async ({ page }) => {
  await page.goto('https://dashboard.melaka.app/register');

  const nameInput = page.getByTestId('register__text-field__name');
  const phoneInput = page.getByTestId('register__text-field__phone-number');
  const businessNameInput = page.getByTestId('register__text-field__business-name');
  const emailInput = page.getByTestId('register__text-field__email');
  const passwordInput = page.getByTestId('register__text-field__password');
  const confirmPasswordInput = page.getByTestId('register__text-field__confirm-password');
  const termsCheckbox = page.getByTestId('register__checkbox__tnc');
  const signUpButton = page.getByTestId('register__button__sign-up'); 
  const passwordError = page.locator('[data-testid="register__text-field__password__error"]');
  const confirmPasswordError = page.locator('[data-testid="register__text-field__confirm-password__error"]');

  await nameInput.fill('Hans Yosaputra');
  await phoneInput.fill('8123456789');
  await businessNameInput.fill('MELAKA');
  await emailInput.fill('hansyosaputra@example.com');
  await passwordInput.fill(''); // No Input
  await passwordInput.press('Tab'); 
  await confirmPasswordInput.fill('ABCD1234');
  await confirmPasswordInput.press('Tab');

  await termsCheckbox.check();
  await signUpButton.click();

  await expect(passwordError).toBeVisible();
  await expect(passwordError).toHaveText('Wajib diisi.');
  await expect(confirmPasswordError).toBeVisible();
  await expect(confirmPasswordError).toHaveText('Belum sesuai dengan kata sandi.');

});

test('Password (Min. 8 characters, must be combination)', async ({ page }) => {

  await page.goto('https://dashboard.melaka.app/register');

  const nameInput = page.getByTestId('register__text-field__name');
  const phoneInput = page.getByTestId('register__text-field__phone-number');
  const businessNameInput = page.getByTestId('register__text-field__business-name');
  const emailInput = page.getByTestId('register__text-field__email');
  const passwordInput = page.getByTestId('register__text-field__password');
  const confirmPasswordInput = page.getByTestId('register__text-field__confirm-password');
  const termsCheckbox = page.getByTestId('register__checkbox__tnc');
  const signUpButton = page.getByTestId('register__button__sign-up'); 
  const nameError = page.getByTestId('register__text-field__password__error');

  await nameInput.fill('Hans Yosaputra');
  await phoneInput.fill('8123456789');
  await businessNameInput.fill('MELAKA');
  await emailInput.fill('hansyosaputra@example.com');
  await passwordInput.fill('MELAKAMELAKA');
  await confirmPasswordInput.fill('MELAKAMELAKA');
  await termsCheckbox.check();

  await signUpButton.click();

  await expect(nameError).toBeVisible();
  await expect(nameError).toHaveText('Min. 8 karakter, harus kombinasi dari huruf dan angka.');

});

test('Without Confirm Password', async ({ page }) => {
  await page.goto('https://dashboard.melaka.app/register');

  const nameInput = page.getByTestId('register__text-field__name');
  const phoneInput = page.getByTestId('register__text-field__phone-number');
  const businessNameInput = page.getByTestId('register__text-field__business-name');
  const emailInput = page.getByTestId('register__text-field__email');
  const passwordInput = page.getByTestId('register__text-field__password');
  const confirmPasswordInput = page.getByTestId('register__text-field__confirm-password');
  const termsCheckbox = page.getByTestId('register__checkbox__tnc');
  const signUpButton = page.getByTestId('register__button__sign-up'); 
  const passwordError = page.locator('[data-testid="register__text-field__password__error"]');
  const confirmPasswordError = page.locator('[data-testid="register__text-field__confirm-password__error"]');

  await nameInput.fill('Hans Yosaputra');
  await phoneInput.fill('8123456789');
  await businessNameInput.fill('MELAKA');
  await emailInput.fill('hansyosaputra@example.com');
  await passwordInput.fill('MELAKA123');
  await passwordInput.press('Tab'); 
  await confirmPasswordInput.fill(''); // No Input
  await confirmPasswordInput.press('Tab');

  await termsCheckbox.check();
  await signUpButton.click();

  await expect(confirmPasswordError).toBeVisible();
  await expect(confirmPasswordError).toHaveText('Wajib diisi.');

});

test('Confirm Password (Does not match the password.)', async ({ page }) => {
  await page.goto('https://dashboard.melaka.app/register');

  const nameInput = page.getByTestId('register__text-field__name');
  const phoneInput = page.getByTestId('register__text-field__phone-number');
  const businessNameInput = page.getByTestId('register__text-field__business-name');
  const emailInput = page.getByTestId('register__text-field__email');
  const passwordInput = page.getByTestId('register__text-field__password');
  const confirmPasswordInput = page.getByTestId('register__text-field__confirm-password');
  const termsCheckbox = page.getByTestId('register__checkbox__tnc');
  const signUpButton = page.getByTestId('register__button__sign-up'); 
  const passwordError = page.locator('[data-testid="register__text-field__password__error"]');
  const confirmPasswordError = page.locator('[data-testid="register__text-field__confirm-password__error"]');

  await nameInput.fill('Hans Yosaputra');
  await phoneInput.fill('8123456789');
  await businessNameInput.fill('MELAKA');
  await emailInput.fill('hansyosaputra@example.com');
  await passwordInput.fill('MELAKA123');
  await passwordInput.press('Tab'); 
  await confirmPasswordInput.fill('MELAKA111'); // Does not match the password
  await confirmPasswordInput.press('Tab');

  await termsCheckbox.check();
  await signUpButton.click();

  await expect(passwordError).toBeVisible();
  await expect(confirmPasswordError).toBeVisible();
  await expect(confirmPasswordError).toHaveText('Belum sesuai dengan kata sandi.');

});

test('No Input (All fields)', async ({ page }) => {

  await page.goto('https://dashboard.melaka.app/register');

  const nameError = page.getByTestId('register__text-field__name__error');
  const phoneError = page.getByTestId('register__text-field__phone-number__error');
  const businessNameError = page.getByTestId('register__text-field__business-name__error');
  const emailError = page.getByTestId('register__text-field__email__error');
  const passwordError = page.getByTestId('register__text-field__password__error');
  const confirmPasswordError = page.getByTestId('register__text-field__confirm-password__error');
  const termsCheckbox = page.getByTestId('register__checkbox__tnc');
  const signUpButton = page.getByTestId('register__button__sign-up'); 

  // Check the terms checkbox then sign up
  await termsCheckbox.check();
  await signUpButton.click();

  await expect(nameError).toBeVisible();
  await expect(nameError).toHaveText('Wajib diisi.');
  await expect(phoneError).toBeVisible();
  await expect(phoneError).toHaveText('Wajib diisi. Nomor telepon tidak boleh kurang dari 10 atau lebih dari 12 karakter.');
  await expect(businessNameError).toBeVisible();
  await expect(businessNameError).toHaveText('Wajib diisi.');
  await expect(emailError).toBeVisible();
  await expect(emailError).toHaveText('Wajib diisi.');
  await expect(passwordError).toBeVisible();
  await expect(passwordError).toHaveText('Wajib diisi.');
  await expect(emailError).toHaveText('Wajib diisi.');
  await expect(confirmPasswordError).toBeVisible();
  await expect(confirmPasswordError).toHaveText('Wajib diisi.');
  
});
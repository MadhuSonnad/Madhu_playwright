const {test,expect}=require('@playwright/test') 

test('Assertions validation', async ({page})=>{

await page.goto('https://demo.nopcommerce.com/register')

await expect (page).toHaveURL('https://demo.nopcommerce.com/register')

await expect (page).toHaveTitle('nopCommerce demo store. Register')

const element=page.locator('.header-logo')
await expect(element).toBeVisible()

const searchbox=page.locator('#small-searchterms')
await expect(searchbox).toBeEnabled()

const radiobtn=await page.locator('#gender-male')
await radiobtn.click()
await expect(radiobtn).toBeChecked()

const Checkbox=await page.locator('#Newsletter')
await expect(Checkbox).toBeChecked()

const regButton=await page.locator('#register-button')
await expect(regButton).toHaveAttribute('type','submit')

await expect (page.locator('.page-title h1')).toHaveText('Register')

await expect (page.locator('.page-title h1')).toContainText('Regis')

const email=await page.locator('#Email')
await email.fill('test@demo.com')
await expect (email).toHaveValue('test@demo.com')

const options=await page.locator('select[name="DateOfBirthMonth"]option')
await expect(options).toHaveCount(13)
})
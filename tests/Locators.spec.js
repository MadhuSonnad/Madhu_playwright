const {test, expect}=require ('@playwright/test')

test('Locators', async({page})=>{

await page.goto('https://demoblaze.com/')
await page.click('id=login2')
//Xpath
await page.fill("//input[@id='loginusername']",'pavanol')
//CSS 
await page.fill("input[id='loginpassword']",'test@123')

await page.click("//button[@onclick='logIn()']")
const logout=await page.locator("//a[normalize-space()='Log out']")

await expect(logout).toBeVisible()
})

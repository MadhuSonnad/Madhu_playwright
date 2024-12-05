    const {test, expect}=require ('@playwright/test')

    test('Double click ', async({page})=>{

await page.goto("URL pass")

await page.locator("Username path").fill('Username')

await page.locator("Passwaord path").fill('Password')

await page.locator("Click on Login button").Click()
await page.waitForTimeout(2000);
})
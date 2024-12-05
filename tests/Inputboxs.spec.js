const {test,expect}=require('@playwright/test')

test('Paaaing data in input boxs', async({page})=>{
await page.goto('https://web.admin-serp-qa.361b27e29e1b449facec.centralindia.aksapp.io/login')
await page.locator("//button[@data-testid='access-one-login']").click()
await page.locator("//input[@id='username']").fill('testqaadminuser1.serp@smarterp.com')
await page.locator("//button[@type='submit']").click()
await page.waitForTimeout(3000)
await page.locator("//input[@id='password']").fill('Test@123')
await page.locator("//button[@type='submit']").click()
await page.waitForTimeout(3000)
await page.locator("(//div[@class='MuiListItemText-root css-1tsvksn'])[2]").click()
await expect (await page.locator("//input[@id='requestFormNo']")).toBeVisible()
await expect (await page.locator("//input[@id='requestFormNo']")).toBeEmpty()
await expect (await page.locator("//input[@id='requestFormNo']")).toBeEditable()
await expect (await page.locator("//input[@id='requestFormNo']")).toBeEnabled()

await page.locator("//input[@id='requestFormNo']").fill('R/STR-MNK/24-25/00157')
await page.waitForTimeout(3000)

//checkbox
await page.locator("(//input[@type='checkbox'])[2]").check()
await page.locator("(//input[@type='checkbox'])[2]").uncheck()
//await expect(await page.locator("(//input[@type='checkbox'])[2]")).toBeChecked();
//await expect(await page.locator("(//input[@type='checkbox'])[2]").isChecked()).toBeTruthy()
//await expect(await page.locator("(//input[@type='checkbox'])[2]").isChecked()).toBeFalsy()

await page.waitForTimeout(2000)

const checkboxs=[
                "(//span[@data-testid='check-requestform'])[3]",
                "(//span[@data-testid='check-requestform'])[4]",
                "(//span[@data-testid='check-requestform'])[5]"
               ];

 for(const locator of checkboxs)
 {
    await page.locator(locator).check();
 }

 for(const locator of checkboxs)
 {
    if(await page.locator(locator).isChecked())
    {
        await page.locator(locator).uncheck();
    }
 }
 await page.waitForTimeout(3000)

})
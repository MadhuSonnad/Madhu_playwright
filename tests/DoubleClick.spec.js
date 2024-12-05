const {test, expect}=require ('@playwright/test')

test('Double click ', async({page})=>{

await page.goto('https://testautomationpractice.blogspot.com/')
const btncopy=await page.locator('//button[normalize-space()="Copy Text"]')

await btncopy.dblclick()
const F2=await page.locator('#field2')
await expect(F2).toHaveValue('Hello World!')

await page.waitForTimeout(3000)

})
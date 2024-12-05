const{test,expect}=require('@playwright/test')

test ('date picker',async({page})=>{

await page.goto('https://testautomationpractice.blogspot.com/')
await page.fill('#datepicker','25/10/2024')
await page.waitForTimeout(2000);

})
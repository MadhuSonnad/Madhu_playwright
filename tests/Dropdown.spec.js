const {test,expect}=require('@playwright/test')

test('Dropdown handling',async({page})=>{

await page.goto('https://testautomationpractice.blogspot.com/')
await page.locator('#country').selectOption('India')
//await page.locator('#country').selectOption({index:2})
await page.waitForTimeout(2000)
//Asserations
/*const options=await page.locator('#country option')
await expect(options).toHaveCount(10)  

const option=await page.$$('#country option')
console.log('Number of options',option.length)*/

const options=await page.$$('#country option')
for(const option of options)
{
    console.log(await option.textContent())
}
})
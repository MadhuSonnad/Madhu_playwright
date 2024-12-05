const {test,expect}=require('@playwright/test')

test('Dropdown handling',async({page})=>{

await page.goto('https://testautomationpractice.blogspot.com/')

await page.selectOption('#colors',['Blue','Red','Yellow'])
await page.waitForTimeout(3000)

//const option=await page.$$('#colors option')
//console.log('Number of length',option.length)
//await expect(option.length).toBe(5)
const content =await page.locator('#colors').textContent()
expect(content.includes('Black')).toBeFalsy;

})
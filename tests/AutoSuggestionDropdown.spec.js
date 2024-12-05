const {test,expect}=require('@playwright/test')

test('Auto suggestion Dropdown handling',async({page})=>{

page.goto('https://www.redbus.in/')
await page.locator('#src').fill('Delhi')
await page.waitForSelector("//li[contains(@class,'sc-iwsKbI')]/div/text[1]")

const fromcityOption=await page.$$("//li[contains(@class,'sc-iwsKbI')]/div/text[1]")
for(let option of fromcityOption)
{
    const value=await option.textContent()
    console.log(value)
}
})
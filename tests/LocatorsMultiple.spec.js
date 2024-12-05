const{test, expect}=require('@playwright/test')

test('Locators multiple elements ', async({page})=>{

await page.goto('https://demoblaze.com/index.html')

const allLinks=await page.$$('a')

for( const link of allLinks)
{
       const  links=await link.textContent()
       console.log(links)
    
    }

   const product=await page.$$("//div[@id='tbodyid']//h4//a")

for(const pro of product)
{
    const proName=await pro.textContent()
    console.log(proName)
}

})
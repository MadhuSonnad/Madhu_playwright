const {test,expect}=require('@playwright/test')
const exp = require('constants')

test.skip('To handle Popup',async({page})=>{

await page.goto('https://testautomationpractice.blogspot.com/')
await page.waitForTimeout(3000)
    page.on('dialog', async dialog=>{
    expect(dialog.type()).toContain('alert')
    expect(dialog.message()).toContain('alert box')
    await dialog.accept();

    await page.click("//button[@normalize-space()='Alert']")
    page.waitForTimeout(3000)
})
})


test.skip('Confirmation Dailod-Alert with OK and cancel',async({page})=>{

await page.goto('https://testautomationpractice.blogspot.com/')
await page.waitForTimeout(3000)
    page.on('dialog', async dialog=>{
    expect(dialog.type()).toContain('confirm')
    expect(dialog.message()).toContain('Press a button')
    await dialog.accept();
})
    await page.click("//button[normalize-space()='Confirm Box']")
    await expect(page.locator("//p[@id='demo']")).toHaveText('You pressed OK!')
    await page.waitForTimeout(3000)

})

test('Prompt dialog',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')
    //await page.waitForTimeout(3000)
        page.on('dialog', async dialog=>{
        expect(dialog.type()).toContain('prompt')
        expect(dialog.message()).toContain('Please enter your name')

        await dialog.accept('Madhu');
        await page.waitForTimeout(3000)
    })

    await page.click('//button[normalize-space()="Prompt"]')
    await expect(page.locator('//p[@id="demo"]')).toContainText("Hello Madhu! How are you today?")
    await page.waitForTimeout(3000)
})
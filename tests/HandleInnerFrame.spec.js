const {test,expect}=require('@playwright/test')

test('Dropdown handling',async({page})=>{

await page.goto('https://ui.vision/demo/webtest/frames/')

const frame3=await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'})

const childFrame=await frame3.childFrames()
await childFrame[0].locator("//*[@id='i5']/div[3]/div").check()

await page.waitForTimeout(3000)

})



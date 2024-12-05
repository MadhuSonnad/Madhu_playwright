const{test,expect}=require('@playwright/test')

test('check data',async({page})=>{

    await page.goto('https://ui.vision/demo/webtest/frames/')

    const  frame=await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'})

    const childframes=await frame.childFrames()
    await childframes[0].locator("//*[@id='i5']/div[3]/div").check()

    await page.waitForTimeout(3000);

})
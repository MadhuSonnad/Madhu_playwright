const{test,expect}=require('@playwright/test')

test('Handing frames',async({page})=>{

await page.goto('https://ui.vision/demo/webtest/frames/')

const allframes=page.frames()
console.log("Numbers of frames",allframes.length)

// const frames1=await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'})
// await frames1.fill("[name='mytext1']",'Hello Madhu')
// await page.waitForTimeout(2000)

const input=await page.frameLocator("frame[src='frame_1.html']").locator("[name='mytext1']")
input.fill('HEY HELLO')

await page.waitForTimeout(3000)
})
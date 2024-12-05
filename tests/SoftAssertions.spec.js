const {test,expect}=require('@playwright/test')

test('Soft Assertions',async ({page})=>
    {
    await page.goto('https://demoblaze.com/index.html');
    
    await expect.soft(page).toHaveTitle('STORE12');
    await expect.soft(page).toHaveURL('https://demoblaze.com/index.html');
    await expect.soft(page.locator('.navbar-brand')).toBeVisible();

})
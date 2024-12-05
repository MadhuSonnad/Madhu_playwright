const {test, expect} = require('@playwright/test');

test('Home Page', async({page})=>{

await page.goto('https://demoblaze.com/index.html');
const pageTitle=page.title();
console.log('page title is', pageTitle);

await expect(page).toHaveTitle('STORE');

const PageURL=page.url();
console.log('page URL is ', PageURL);

await expect(page).toHaveURL('https://demoblaze.com/index.html');

})
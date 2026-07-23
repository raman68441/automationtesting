import{expect,test}from'@playwright/test';

test('hyr',async({page})=>{
await page.goto('https://www.hyrtutorials.com/p/window-handles-practice.html');
await page.locator('#name').fill('John Doe');

const [newPage] = await Promise.all([
    page.waitForEvent('popup'),
    page.locator('#newWindowBtn').click()
]);
//dkiekkdiek
await newPage.waitForLoadState();

console.log(await newPage.title());
expect(await newPage.title()).toBe('Basic Controls - H Y R Tutorials');

await page.mouse.wheel(0,300);

//kjhkhigoghyjh
    //lk

});

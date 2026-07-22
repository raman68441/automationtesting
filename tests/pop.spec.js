import{expect,test}from'@playwright/test';

test('hyr',async({page})=>{
await page.goto('https://www.hyrtutorials.com/p/html-dropdown-elements-practice.html');
//await page.locator('#name').fill('John Doe');

//await page.locator('#course').selectOption('java');

await page.locator('#ide').selectOption([
  { index: 0 },
  { index: 2 }
]);




});
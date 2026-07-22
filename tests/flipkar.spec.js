import { test, expect } from '@playwright/test';


test('Flipkart search test',async ({page}) =>{

    await page.goto('https://www.flipkart.com/');;

await page.locator('//span[@class="b3wTlE"]').click();
 //await page.pause();
await page.locator('(//input[@placeholder="Search for Products, Brands and More"])[1]').fill('iphone 14');
await page.keyboard.press('Enter');
// const title=await page.locator('//div[contains(text(),"Apple iPhone 14 (Red, 512 GB)")]').click();
// const title1=await title.textContent();
// console.log(title1);
// //expect(title1).textContent('Apple iPhone 14 (Red, 512 GB)');
// await page.waitForLoadState('networkidle');

// const [newPage] = await Promise.all([
//   page.waitForEvent('popup'),
//   await page.locator('//div[contains(text(),"Apple iPhone 14 (Red, 512 GB)")]').click()
// ]);
const [newPage] = await Promise.all([
    page.waitForEvent('popup'),
    //page.getByText('iPhone').click()
   // page.getByText('Apple iPhone 14 (Red, 512 GB)').click()
   await page.getByRole('link', {
  name: 'Apple iPhone 14 (Red, 512 GB)'
}).click()
]);
await newPage.waitForLoadState();
//Console.log(await newPage.title());
await expect(newPage).toHaveTitle('APPLE iPhone 14 ( 512 GB Storage) Online at Best Price On Flipkart.com');
    // Print the title of the new page
//console.log(await newPage.title());
console.log(await newPage.title());



});
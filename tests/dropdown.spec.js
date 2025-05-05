const{test, expect} =require('@playwright/test')

test('learn dropdown method', async function ({page}) {

    await page.goto("https://freelance-learn-automation.vercel.app/signup")

    await page.locator("#state").selectOption({label:"Goa"})

    await page.waitForTimeout

    await page.locator("#state").selectOption({value:"Delhi"})

    await page.waitForTimeout

    await page.locator("#state").selectOption({index:2})

    await page.waitForTimeout

})
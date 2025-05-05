const {test, expect}=require('@playwright/test')

test('File upload', async function ({page}) {

    await page.goto("https://the-internet.herokuapp.com")

    await page.locator('a[href="/upload"]').click()

    await page.waitForTimeout(3000)

    await page.locator("#file-upload").setInputFiles("/Users/bamla/OneDrive/Desktop/response.json")

    await page.waitForTimeout(3000)

    await page.locator("#file-submit").click()

    expect(await page.locator("//h3")).toHaveText("File Uploaded!")

    await page.waitForTimeout(2000)

})


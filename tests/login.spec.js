const {test,expect} =require('@playwright/test')


test('login Test case', async function ({page}) {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    console.log(await page.viewportSize().height)

    console.log(await page.viewportSize().width)

    await page.getByPlaceholder("Username").fill("Admin", {delay:200})

    await page.getByPlaceholder("password").fill("admin123", {delay:100})

    await page.locator("//button[@type='submit']").click()

    await expect(page).toHaveURL(/dashboard/);

    await page.getByAltText("profile picture").first().click()

    await page.getByText("Logout").click()

    await expect(page).toHaveURL(/login/);


})
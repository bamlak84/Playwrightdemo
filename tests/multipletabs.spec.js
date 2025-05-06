const {test, expect}=require('@playwright/test')

test('File upload', async function ({browser}) {

    const context = await browser.newContext()

    const page = await context.newPage()

    await page.goto("https://freelance-learn-automation.vercel.app/login")

    const [newpage] = await Promise.all
            (
                [

                        context.waitForEvent("page") ,

                        page.locator("(//a[contains(@href, 'facebook')])[1]").click()


                ]
            )

        await newpage.waitForTimeout(5000)

        await newpage.locator("(//input[@name='email'])[2]").fill("Bamlak84@gmail.com")


})

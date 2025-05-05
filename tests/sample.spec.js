const {test,expect} =require('@playwright/test')


test('My First test', async function ({page}) {
    
    expect(100).toBe(100)
    
})

test('My Second test', async function ({page}) {
    
    expect(10).toBe(10)

})

test('My Third test', async function ({page}) {
    
    expect(2.0).toBe(2.0)

})

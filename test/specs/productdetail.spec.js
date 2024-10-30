import { driver, $ } from '@wdio/globals'

describe('Product Detail Page', function(){
    beforeEach(async function() {
        const productImage = $('//*[@content-desc="Product Image"]');
        await productImage.click();
    })

    describe('Review Product Feature', function(){
        it('Check 1-Star review in main product page', async function(){
            const rating_1 = $('id=com.saucelabs.mydemoapp.android:id/start1IV')
            await rating_1.click()

            const successReview = $('id=com.saucelabs.mydemoapp.android:id/sortTV')
            await expect(successReview).toHaveText('Thank you for submitting your review!')

            const continueButton = $('id=com.saucelabs.mydemoapp.android:id/closeBt')
            await continueButton.click()
        })

        it('Check 5-Star review in main product page', async function(){
            const rating_5 = $('id=com.saucelabs.mydemoapp.android:id/start5IV');
            await rating_5.click()

            const successReview = $('id=com.saucelabs.mydemoapp.android:id/sortTV')
            await expect(successReview).toHaveText('Thank you for submitting your review!')

            const continueButton = $('id=com.saucelabs.mydemoapp.android:id/closeBt')
            await continueButton.click()
        })

        it('Check 1-Star review in detail product page', async function(){
            const productImage = $('//*[@content-desc="Product Image"]');
            await productImage.click();

            const rating_1 = $('id=com.saucelabs.mydemoapp.android:id/start1IV')
            await rating_1.click()

            const successReview = $('id=com.saucelabs.mydemoapp.android:id/sortTV')
            await expect(successReview).toHaveText('Thank you for submitting your review!')

            const continueButton = $('id=com.saucelabs.mydemoapp.android:id/closeBt')
            await continueButton.click()
        })

        it('Check 5-Star review in detail product page', async function(){
            const productImage = $('//*[@content-desc="Product Image"]');
            await productImage.click();

            const rating_5 = $('id=com.saucelabs.mydemoapp.android:id/start5IV');
            await rating_5.click()

            const successReview = $('id=com.saucelabs.mydemoapp.android:id/sortTV')
            await expect(successReview).toHaveText('Thank you for submitting your review!')

            const continueButton = $('id=com.saucelabs.mydemoapp.android:id/closeBt')
            await continueButton.click()
        })
    })

    describe('Verify change the product color functionality on the detail page', function(){
        it('Check first color option', async function() {
            const firstColorOption = $('id=com.saucelabs.mydemoapp.android:id/color1')
            await firstColorOption.click()

            const productImage = $('//*[@content-desc="Product Image"]');
            await expect(productImage).toHaveAttribute('src', 'expected_first_color_image_src');
        })

        it('Check last color option', async function() {
            const lastColorOption = $('id=com.saucelabs.mydemoapp.android:id/color5') 
            await lastColorOption.click()

            const productImage = $('//*[@content-desc="Product Image"]');
            await expect(productImage).toHaveAttribute('src', 'expected_last_color_image_src');
        })
    })

    describe('Verify add to cart functionality', function(){
        it('')
    })

})


after(async function(){
    await driver.pause(3000)
})
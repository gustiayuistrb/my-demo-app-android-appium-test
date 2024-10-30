import { driver, $ } from '@wdio/globals'

describe('Product quantity and cart functionality', function(){
    beforeEach(async function() {
        const productImage = $('//*[@content-desc="Product Image"]');
        await productImage.click();
    })

    describe('Add to Cart Functionality', function() {
        it('Test add product to cart', async function() {
            const addToCartButton = $('id=com.saucelabs.mydemoapp.android:id/addToCartBtn');
            await addToCartButton.click();

            const cartMessage = $('id=com.saucelabs.mydemoapp.android:id/cartMessage');
            await expect(cartMessage).toHaveText('Product added to cart!');
        })
    })

    describe('Adjust Product Quantity', function() {
        it('Test press quantity plus button', async function() {
            const qtyPlusButton = $('id=com.saucelabs.mydemoapp.android:id/qtyPlusBtn');
            await qtyPlusButton.click();

            const quantityDisplay = $('id=com.saucelabs.mydemoapp.android:id/quantityDisplay');
            await expect(quantityDisplay).toHaveText('2'); 
        })

        it('Test press quantity minus button', async function() {
            const qtyMinusButton = $('id=com.saucelabs.mydemoapp.android:id/qtyMinusBtn');
            await qtyMinusButton.click();

            const quantityDisplay = $('id=com.saucelabs.mydemoapp.android:id/quantityDisplay');
            await expect(quantityDisplay).toHaveText('0');
        })
    })

})


after(async function(){
    await driver.pause(3000)
})
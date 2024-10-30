import { driver, $ } from '@wdio/globals';
import cartPage from '../pageobjects/cart.page';

describe('Product quantity and cart functionality', function(){
    beforeEach(async function() {
        await cartPage.openProduct();
    })

    describe('Add to Cart Functionality', function() {
        it('Test add product to cart', async function() {
            await cartPage.addToCart();
            await expect(cartPage.cartMessage).toHaveText('Product added to cart!');
        })
    })

    describe('Adjust Product Quantity', function() {
        it('Test press quantity plus button', async function() {
            await cartPage.pressQtyPlus();
            await expect(cartPage.quantityDisplay).toHaveText('2'); 
        })

        it('Test press quantity minus button', async function() {
            await cartPage.pressQtyMinus();
            await expect(cartPage.quantityDisplay).toHaveText('0');
        })
    })

})


after(async function(){
    await driver.pause(3000)
})
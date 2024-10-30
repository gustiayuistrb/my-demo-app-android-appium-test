import { $ } from '@wdio/globals';

class CartPage {
    get productImage() { return $('//*[@content-desc="Product Image"]'); }
    get addToCartButton() { return $('id=com.saucelabs.mydemoapp.android:id/addToCartBtn'); }
    get cartMessage() { return $('id=com.saucelabs.mydemoapp.android:id/cartMessage'); }
    get qtyPlusButton() { return $('id=com.saucelabs.mydemoapp.android:id/qtyPlusBtn'); }
    get qtyMinusButton() { return $('id=com.saucelabs.mydemoapp.android:id/qtyMinusBtn'); }
    get quantityDisplay() { return $('id=com.saucelabs.mydemoapp.android:id/quantityDisplay'); }

    async openProduct() {
        await this.productImage.click();
    }

    async addToCart() {
        await this.addToCartButton.click();
    }

    async pressQtyPlus() {
        await this.qtyPlusButton.click();
    }

    async pressQtyMinus() {
        await this.qtyMinusButton.click();
    }

}

export default new CartPage();

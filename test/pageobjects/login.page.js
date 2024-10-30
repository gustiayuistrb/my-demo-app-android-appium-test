import { $ } from '@wdio/globals'
import Page from './page.js';

class LoginPage{
    get menuButton() { return $('//*[@content-desc="View menu"]') }
    get loginMenu() { return $('//*[@content-desc="Login Menu Item"]') }
    get loginPageTitle() { return $('id=com.saucelabs.mydemoapp.android:id/loginTV') }
    get usernameInput() { return $('id=com.saucelabs.mydemoapp.android:id/nameET') }
    get passwordInput() { return $('id=com.saucelabs.mydemoapp.android:id/passwordET'); } // Pastikan ID ini benar
    get passwordError() { return $('id=com.saucelabs.mydemoapp.android:id/passwordErrorTV') }
    get loginButton() { return $('id=com.saucelabs.mydemoapp.android:id/loginBtn') }
    get usernameError() { return $('id=com.saucelabs.mydemoapp.android:id/nameErrorTV') }
    get productPageTitle() { return $('id=com.saucelabs.mydemoapp.android:id/productTV') }
    get logoutMenu() { return $('//*[@content-desc="Logout Menu Item"]')}
    get logoutConfirm() { return $('id=android:id/button1') }
    
    async openLoginMenu() {
        await this.menuButton.click();
        await this.loginMenu.click();
    }

    async loginProcess(username, password){
        await this.usernameInput.setValue(username);
        await this.passwordInput.setValue(password);
        await this.loginButton.click();
    }

    async logout() {
        await this.menuButton.click();
        await this.logoutMenu.click();
        await this.logoutConfirm.click();
    }
}

export default new LoginPage();

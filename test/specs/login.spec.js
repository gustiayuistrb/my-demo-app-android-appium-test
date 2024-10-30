import { driver, $ } from '@wdio/globals'
import loginPage from '../pageobjects/login.page'

describe('LOGIN FEATURE', function(){
    beforeEach(async function(){
        await loginPage.openLoginMenu();
        await expect(loginPage.loginPageTitle).toHaveText('Login')
    })

    it('login with empty password', async function(){
        await loginPage.loginProcess("bod@example.com", "");
        await expect(loginPage.passwordError).toHaveText('Enter Password')
    })

    it('login with empty username', async function(){
        await loginPage.loginProcess("", "10203040");
        await expect(loginPage.usernameError).toHaveText('Username is required')
    })

    it('login with valid username and password', async function(){
        await loginPage.loginProcess("bod@example.com", "10203040");
        expect(loginPage.productPageTitle).toHaveText('Products')
        
        await loginPage.logout();
        expect(loginPage.loginPageTitle).toHaveText('login')
    })

    after(async function(){
        await driver.pause(3000)
    })

})
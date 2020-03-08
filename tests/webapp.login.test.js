import {expect} from 'chai';
const localConfig = require('../lib/test.config');
describe('Invalid Login Test of Webapp site',()=> {
    it('Navigate to Home Page',() =>{
        browser.url('http://zero.webappsecurity.com/');
        const metaData = browser.getMetadata();
        expect(metaData.url).to.contains('zero.webappsecurity.com');
        expect(metaData.title).to.contains('Zero - Personal Banking - Loans - Credit Cards');
    })

    it('Navigate to login page',()=>{
        const btnSignIn = $('#signin_button');
        btnSignIn.waitForExist(5000);
        btnSignIn.click();
        expect(browser.getTitle()).to.contains('Zero - Log in');
    })

    it('Try invalid login and verify the error message', () =>{
        const txtLoginId = $('#user_login');
        const txtPasswd = $('#user_password');
        const btnSignIn = $('//input[@value="Sign in"]');
        const errorMsg = $('//form[@id="login_form"]/div[1]');
        txtLoginId.waitForEnabled(5000);
        txtLoginId.setValue(localConfig.username);
        txtPasswd.setValue(localConfig.password);
        btnSignIn.click();
        errorMsg.waitForDisplayed(5000);
        expect(errorMsg.getText()).to.contains('Login and/or password are wrong.');
        browser.pause(3000);
    })
})
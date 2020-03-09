import {expect} from 'chai';
const localConfig = require('../lib/test.config');
import * as dataHelper from '../lib/data-helper';
describe('Invalid Login Test of Webapp site',()=> {
    it('Navigate to Home Page',() =>{
        browser.url('http://zero.webappsecurity.com/');
        const metaData = browser.getMetadata();
        expect(metaData.url).to.contains('zero.webappsecurity.com');
        expect(metaData.title).to.contains('Zero - Personal Banking - Loans - Credit Cards');
    })

    it('Navigate to login page',()=>{
        browser.waitAndClick('#signin_button');
        expect(browser.getTitle()).to.contains('Zero - Log in');
    })

    it('Try invalid login and verify the error message', () =>{
        const errorMsg = $('//form[@id="login_form"]/div[1]');
        browser.waitAndType('#user_login',dataHelper.getRandomEmail());
        browser.waitAndType('#user_password',localConfig.password);
        browser.waitAndClick('//input[@value="Sign in"]');
        console.log(dataHelper.getRandomName());
        errorMsg.waitForDisplayed(5000);
        expect(errorMsg.getText()).to.contains('Login and/or password are wrong.');
        browser.pause(3000);
    })
})
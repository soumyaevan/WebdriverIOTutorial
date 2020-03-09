import {expect} from 'chai';
import HomePage from '../Pages/HomePage';
import LoginPage from '../Pages/LoginPage';
const localConfig = require('../lib/test.config');

describe('Login test of webappsecurity page', () => {
    it('Validate Home page and navigate to Login Page',()=>{
        HomePage.open();
        expect(HomePage.title).to.contains('Zero - Personal Banking - Loans - Credit Cards');
        browser.waitAndClick(HomePage.btnSignIn);
        HomePage.wait(3000);        
    })

    it('Validate Invalid Login Message',() => {
        LoginPage.submitLoginCredential(localConfig.username,localConfig.password);
        LoginPage.validateErrorMsg(localConfig.errorMessage);
    })
})
import BasePage from './BasePage';
import {expect} from 'chai';
import CustomMethod from '../Actions/CustomMethod';
const localConfig = require('../lib/test.config');
class LoginPage extends BasePage{
    get title(){
        return (browser.getTitle());
    }

    get url(){
        return (browser.getUrl());
    }

    get txtUserName(){
        return '#user_login';
    }

    get txtPassword(){
        return '#user_password';
    }

    get btnSignIn(){
        return '//input[@value="Sign in"]';
    }

    get errorMessage(){
        return '//form[@id="login_form"]/div[1]';
    }

    open(){
        super.open(localConfig.url);
    }

    submitLoginCredential(userName, password){
        CustomMethod.waitAndType(this.txtUserName,userName);
        CustomMethod.waitAndType(this.txtPassword,password);
        CustomMethod.waitAndClick(this.btnSignIn);
    }

    validateErrorMsg(value){
        expect(CustomMethod.waitAndGetText(this.errorMessage)).to.contains(value,'Error message is mismatched');
    }
}
export default new LoginPage; 
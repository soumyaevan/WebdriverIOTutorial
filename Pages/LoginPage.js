import BasePage from './BasePage';
import {expect} from 'chai';
import CustomMethod from '../Actions/CustomMethod';
const localConfig = require('../lib/test.config');
import allureReporter from '@wdio/allure-reporter';
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
        allureReporter.startStep('Login Authentication');
        {
            allureReporter.startStep('Entering Username');
            CustomMethod.waitAndType(this.txtUserName,userName);
            allureReporter.endStep();
            allureReporter.startStep('Entering Password');
            CustomMethod.waitAndType(this.txtPassword,password);
            allureReporter.endStep();
            allureReporter.startStep('Clicking Sign In button');
            CustomMethod.waitAndClick(this.btnSignIn);
            allureReporter.endStep();
        }
        allureReporter.endStep();
    }

    validateErrorMsg(value){

        if((CustomMethod.waitAndGetText(this.errorMessage)).includes(value)){
            allureReporter.endStep('passed')
        }else{
            allureReporter.endStep('failed');
        }
        expect(CustomMethod.waitAndGetText(this.errorMessage)).to.contains(value,'Error message is mismatched');
    }
}
export default new LoginPage; 
import BasePage from './BasePage';
import {expect} from 'chai';
import CustomMethod from '../Actions/CustomMethod';
const localConfig = require('../lib/test.config');
import allureReporter from '@wdio/allure-reporter';

/**
 * Contains elements and functions related to login page
 */
class LoginPage extends BasePage{

    /**
     * return title of the login page
     */
    get title(){
        return (browser.getTitle());
    }

    /**
     * return url of the login page
     */
    get url(){
        return (browser.getUrl());
    }

    /**
     * return id of the user name field
     */
    get txtUserName(){
        return '#user_login';
    }

    /**
     * return id of the password field
     */
    get txtPassword(){
        return '#user_password';
    }

    /**
     * return xpath of the sign in button
     */
    get btnSignIn(){
        return '//input[@value="Sign in"]';
    }

    /**
     * return xpath of the error message of the invalid login
     */
    get errorMessage(){
        return '//form[@id="login_form"]/div[1]';
    }

    open(){
        super.open(localConfig.url);
    }

    /**
     * this function is used to login to the application
     * @param {*} userName 
     * @param {*} password 
     */
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

    /**
     * to validate the error message for invalid login
     * @param {*} value 
     */
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
import {expect} from 'chai';
import HomePage from '../Pages/HomePage';
import LoginPage from '../Pages/LoginPage';
import allureReporter from '@wdio/allure-reporter'
const axios = require('axios');
const localConfig = require('../lib/test.config');

describe('Login test of webappsecurity page', () => {
    it('Validate Home page and navigate to Login Page',()=>{
        allureReporter.addDescription('Home Page Navigation');
        allureReporter.startStep('Navigating to Home Page');
        HomePage.open();
        expect(HomePage.title).to.contains('Zero - Personal Banking - Loans - Credit Cards');
        allureReporter.endStep();
        allureReporter.startStep('Clicking on SignIn button to navigate to login page')
        browser.waitAndClick(HomePage.btnSignIn);
        allureReporter.endStep();
        HomePage.wait(3000);        
    })

    it('Validate Invalid Login Message',() => {
        allureReporter.addDescription('Invalid Login test')
        LoginPage.submitLoginCredential(localConfig.username,localConfig.password);
        LoginPage.validateErrorMsg(localConfig.errorMessage);
    })

    it('redirect URL',() =>{
        browser.url('https://www.clarks.co.uk');
        browser.execute(function(){
            change_script = $("script[src^='//t.contentsquare.net']").attr('src').replace('t.contentsquare.net','t-staging.contentsquare.net');
            $("script[src^='//t.contentsquare.net']").remove();
            $("<script id='testScript'/>").text(change_script).appendTo("head");
        })
    })

})
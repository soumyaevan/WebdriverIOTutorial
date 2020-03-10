import {expect} from 'chai';
import HomePage from '../Pages/HomePage';
import LoginPage from '../Pages/LoginPage';
const axios = require('axios');
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

    it('Post request uning axios', async () =>{
        const params = {
            projectIds: [345],
            tagVersion: "66be63ff2ade1c794c0cb24bbc25157fff4ad186"
        }
        let res = await axios.post('https://dcb-staging.eu-west-1.csq.io/tag-builder/build',params);
        console.log(res.data);
        let responseToValidate = res.data.success;
        expect(responseToValidate).to.be.equal(true);
    })

    it('PUT request using axios', async () => {
        const params = {
            autoInsightsEnabled : true
        };
        const headers = {
            'Content-Type': 'application/json'
        }
        let res = await axios.put('https://projects-staging.csq.io/v1/tags/345',params,headers);
        console.log(res.data);
        let dataToValidate = res.data.payload.autoInsightsEnabled;
        let responseToValidate = res.data.success;
        console.log(dataToValidate);
        console.log(responseToValidate);
        expect(dataToValidate).to.be.equal(true);
        expect(responseToValidate).to.be.equal(true);
    })

})
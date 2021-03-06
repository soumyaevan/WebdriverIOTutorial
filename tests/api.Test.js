import {expect} from 'chai';
import allureReporter from '@wdio/allure-reporter'
const axios = require('axios');


describe('Login test of webappsecurity page', () => {
    it('send a PUT request to core-projects staging', async () => {
        allureReporter.addDescription('Sending PUT request');
        const params = {
            autoInsightsEnabled : true
        };
        const options = {
            headers: {'Content-Type': 'application/json'}
        }
        let res = await axios.put('https://projects-staging.csq.io/v1/tags/345',params,options);
        console.log(res.data);
        let dataToValidate = res.data.payload.autoInsightsEnabled;
        let responseToValidate = res.data.success;
        console.log(dataToValidate);
        console.log(responseToValidate);
        expect(dataToValidate).to.be.equal(true);
        expect(responseToValidate).to.be.equal(true);
    })
    it('Post request to send the built tag', async () =>{
        allureReporter.addDescription('Sending POST call');
        const params = {
            projectIds: [345],
            tagVersion: "66be63ff2ade1c794c0cb24bbc25157fff4ad186"
        }
        let res = await axios.post('https://dcb-staging.eu-west-1.csq.io/tag-builder/build',params);
        console.log(res.data);
        let responseToValidate = res.data.success;
        expect(responseToValidate).to.be.equal(true);
    })

})
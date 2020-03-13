import {expect} from 'chai';
import allureReporter from '@wdio/allure-reporter'
const axios = require('axios');


describe('Class name and node type on Click event', () => {

    // it('send a PUT request to core-projects staging', async () => {
    //     allureReporter.addDescription('Sending PUT request');
    //     const params = {
    //         autoInsightsEnabled : true
    //     };
    //     const options = {
    //         headers: {'Content-Type': 'application/json'}
    //     }
    //     let res = await axios.put('https://projects-staging.csq.io/v1/tags/345',params,options);
    //     console.log(res.data);
    //     let dataToValidate = res.data.payload.autoInsightsEnabled;
    //     let responseToValidate = res.data.success;
    //     console.log(dataToValidate);
    //     console.log(responseToValidate);
    //     expect(dataToValidate).to.be.equal(true);
    //     expect(responseToValidate).to.be.equal(true);
    // })
    // it('Post request to send the built tag', async () =>{
    //     allureReporter.addDescription('Sending POST call');
    //     const params = {
    //         projectIds: [345],
    //         tagVersion: "66be63ff2ade1c794c0cb24bbc25157fff4ad186"
    //     }
    //     let res = await axios.post('https://dcb-staging.eu-west-1.csq.io/tag-builder/build',params);
    //     console.log(res.data);
    //     let responseToValidate = res.data.success;
    //     expect(responseToValidate).to.be.equal(true);
    // })

    it('Open Client website',()=>{
        browser.url('https://www.clarks.co.uk');
        browser.execute(function(){
            change_script = $("script[src^='//t.contentsquare.net']").attr('src').replace('t.contentsquare.net','t-staging.contentsquare.net');
            $("script[src^='//t.contentsquare.net']").remove();
            $("<script id='testScript'/>").text(change_script).appendTo("head");
        })
        browser.refresh();
    })

    it('Redirect js url to staging', async ()=>{
        //allureReporter.addDescription('Redirect JS url');
        let res = await axios.get('https://t-staging.contentsquare.net/uxa/7e233b03f5323.js');
        console.log(res.data[0]);
    })
})
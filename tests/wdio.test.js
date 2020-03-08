import {expect} from 'chai';
describe('Automation Practice Test', () => {
    it('Navigate to Login Page', () =>{
        browser.url('http://www.automationpractice.com');
        browser.$('//a[@title="Log in to your customer account"]').click();        
    })

    it('Verify title of the web site', () =>{
        const title = browser.getTitle();
        expect(title).to.contains('Login - My Store');
    })
})
import {expect} from 'chai';
describe('Automation Practice Test', () => {
    it('Verify title of the web site', () =>{
        browser.url('http://www.automationpractice.com');
        const title = browser.getTitle();
        const pageURL = browser.getUrl();
        // expect(title).to.contains('My Store');
        // expect(pageURL).to.contains('automationpractice.com/index.php');
        const metaData = browser.getMetadata();
        expect(metaData.title).to.contains('My Store');                         // Metadata has been added in wdio.conf.js file
        expect(metaData.url).to.contains('automationpractice.com/index.php');
    })

    it('Navigate to Login Page', () =>{
        browser.$('//a[@title="Log in to your customer account"]').click();
        const title = browser.getTitle();
        expect(title).to.contains('Login - My Store');
        const loginEmail = $('#email');
        loginEmail.waitForExist(5000);
        const loginPass = $('#passwd');
        loginPass.waitForEnabled(5000);
        expect(loginEmail.isDisplayed()).to.be.true;
        expect(loginPass.isExisting()).to.be.true;
        loginEmail.addValue('sensoumya94@gmail.com');
        loginPass.setValue('Nopass@123');
        browser.pause(3000);            // Static wait
        loginEmail.clearValue();
        browser.pause(3000);            
    })

    it('Testing JavaScript', () =>{
        const add = browser.execute(
            (n1, n2) => {
                return n1 + n2;
            },
            30,60
        )
        console.log(add);
        expect(add).to.equal(90);
    })
})
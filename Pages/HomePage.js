import BasePage from './BasePage';
const localConfig = require('../lib/test.config');

/**
 * this is home page class.
 * consists of the element and functions related to home page
 */
class HomePage extends BasePage{

    /**
     * return the title of the current web site
     */
    get title(){
        return (browser.getTitle());
    }

    /**
     * return the current url
     */
    get url(){
        return (browser.getUrl());
    }

    /**
     * return the element id of the sign in button of the home page
     */
    get btnSignIn(){
        return '#signin_button';
    }

    /**
     * Launch the website
     */
    open(){
        super.open(localConfig.url);
    }
}
export default new HomePage; 


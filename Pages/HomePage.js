import BasePage from './BasePage';
const localConfig = require('../lib/test.config');
class HomePage extends BasePage{
    get title(){
        return (browser.getTitle());
    }

    get url(){
        return (browser.getUrl());
    }

    get btnSignIn(){
        return '#signin_button';
    }

    open(){
        super.open(localConfig.url);
    }
}
export default new HomePage; 


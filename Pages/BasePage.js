/**
 * this is base class
 */
export default class BasePage{
    /**
     * 
     * @param url the url of the website need to be tested 
     */
    open(url){
        try {
            browser.url(url);
        } catch (error) {
            console.log(error.message);
        }
    }

    /**
     * 
     * @param time wait time to pause the execution manually 
     */
    wait(time){
        try {
            browser.pause(time);
        } catch (error) {
            console.log(error.message);
        }
    }
}
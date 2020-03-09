export default class BasePage{
    open(url){
        try {
            browser.url(url);
        } catch (error) {
            console.log(error.message);
        }
    }

    wait(time){
        try {
            browser.pause(time);
        } catch (error) {
            console.log(error.message);
        }
    }
}
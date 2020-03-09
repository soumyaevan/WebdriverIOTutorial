class CustomMethod{
    waitAndClick(selector){
        try{
            $(selector).waitForEnabled(5000);
            $(selector).click();
        }catch(error){
            console.log(error.message);
        }
    }

    waitAndType(selector, value){
        try {
            $(selector).waitForEnabled(5000);
            $(selector).setValue(value);
        } catch (error) {
            console.log(error.message);
        }
    }

    waitAndGetText(selector){
        try {
            $(selector).waitForDisplayed(5000);
            let text = $(selector).getText();
            return text;
        } catch (error) {
            console.log(error.message);
            return '';
        }
    }
}

export default new CustomMethod;
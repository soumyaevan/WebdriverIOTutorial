module.exports ={
    /**
     * Returns random text
     */
    getRandomName: function(){
        let num = Math.floor(Math.random()*100 + 1);
        return `Name_${new Date().getTime().toString()}${num}`;
    },

    /**
     * Returns random email address
     */
    getRandomEmail: function(){
        return `${new Date().getTime().toString()}@gmil.com`;
    }
    
}
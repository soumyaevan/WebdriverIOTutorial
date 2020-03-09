module.exports ={
    getRandomName: function(){
        let num = Math.floor(Math.random()*100 + 1);
        return `Name_${new Date().getTime().toString()}${num}`;
    },

    getRandomEmail: function(){
        return `${new Date().getTime().toString()}@gmil.com`;
    }
    
}
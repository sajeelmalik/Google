var opn = require("opn"); 

var Google = {

    search: function(arr, x){

        var results = {
            positions: [],
            count: 0,
            time: 0
        };

        var start = process.hrtime();

        for(var i = 0; i < arr.length; i++){
            if(arr[i] === x){
                results.positions.push(i);
                results.count++;
            }
        }

        results.time = (parseFloat(process.hrtime(start)[0]) + parseFloat("." + process.hrtime(start)[1])).toFixed(2);

        return results;
    },

    searchOnline: function(str){
        opn(`https://www.google.com/search?q=${str}`);
    }
}

module.exports = Google;

// var opn = require("opn"); 

var Google = function(){

    this.search = function(arr, x){

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

    this.searchOnline = function(str){
        opn(`https://www.google.com/search?q=${str}`);
    }
}

module.exports = Google;

var google  =  new Google();

var {positions, count, time} = google.search(["captain america", "thor", "black widow", "captain america", "captain america", "iron man", "quicksilver", "spiderman", "starlord", "captain america", "ant man", "dr. strange", "thanos", "captain marvel", "gamora", "hulk", "nebula", "hawkeye", "vision", "scarlet witch"], "captain america");

    console.log(`Captain America appears ${count} time(s) at indices ${positions.length > 1 ? positions.splice(0, positions.length-1).join(", ") + ", and " + positions[positions.length-1]: positions.join("")}. Your search took ${time}s long to execute.`)
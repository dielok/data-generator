#!/usr/bin/env node

var moment = require('moment');

function random(i,j) { return Math.floor((Math.random() * j) + i); }
function randomOnTime() {
    
    if (random(1, 100) < 98) {
        
        return true;
        
    } else {
        
        return false;
        
    }
    
}

function randomReclamation() {
    
    if (random(1, 100) >= 99) {
        
        return true;
        
    } else {
        
        return false;
        
    }
    
}

var start, today, data = [];

date = moment("20181001");
today = moment();


//console.log(today.diff(start, 'days'));

while (today.diff(date) > 0) {
    
    let point = {
        date: date.format(),
        revisions: random(0, 12),
        onTime: randomOnTime(),
        reclamation: randomReclamation()
    };
    
    data.push(point);
    
    //console.log('.' + date.format());
    date = date.add(random(1, 5), 'days');
    
}

console.log(data);

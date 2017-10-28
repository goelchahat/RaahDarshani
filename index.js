const fs = require('fs');
const readLastLines = require('read-last-lines');
const say = require('say')

function driver(){
    // fs.readFile('output.txt', 'utf8', function(err, data) {  
    //     if (err) throw err;
    //     console.log(data);
    //     if(data) {
    //         console.log("hello");
    //     }
    //     fs.writeFile('output.txt', '', function(){console.log('done')})
    // });
    readLastLines.read('output.txt', 1)
    .then((lines) => {
        console.log(lines);
        if(lines == 1){
            say.speak("Object is in front of you");
        }
    });
}

console.log('before setInterval');

setInterval(driver, 1000);
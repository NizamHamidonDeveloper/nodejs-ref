const {readFile, writeFileSync} = require('fs');
console.log('start');

readFile('./content/first.txt', 'utf8',(err,result)=>{
    if(err) {
        console.log(err);
        return
    }
    const first = result;
    readFile('./content/first.txt', 'utf8',(err,result)=>{
        if(err) {
            console.log(err);
            return
        }
        const second = result;
        writeFileSync('./content/result-sync.txt', `Here is the result new: ${first}, ${second}`, 
        (err,result) =>{
            if(err) {
                console.log(err);
                return
            }
            console.log(result,'done with this task');

        })
    })
})

console.log('start with next one');
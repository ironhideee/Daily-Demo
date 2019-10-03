const glob = require('glob');


/*********阻塞I/O**********/
// var result = null;
// console.time('glob');
// result = glob.sync(__dirname + '/**/*');
// console.timeEnd('glob');
// console.log(result)


/*********非阻塞I/O**********/
var result = null;
console.time('glob')
glob(__dirname + '/**/*' ,(err,res)=>{
    result = res;
    console.log(result)
});
console.timeEnd('glob')
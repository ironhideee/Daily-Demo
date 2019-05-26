//解决回调地狱的问题
setTimeout(function(){
    console.log('1');
    setTimeout(function(){
        console.log('2');
        setTimeout(function(){
            console.log('3');
            setTimeout(function(){
                console.log('4');
            },1000);
        },1000);
    },1000);
},1000);

//用promise改写
function getNum1(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve('1')
        },1000)
    })
}
function getNum2(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve('2')
        },1000)
    })
}
function getNum3(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve('3')
        },1000)
    })
}
function getNum4(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve('4')
        },1000)
    })
}

getNum1().then(function(data){
    console.log(data)
    return getNum2()
}).then(function(data){
    console.log(data)
    return getNum3()
}).then(function(data){
    console.log(data)
    return getNum4()
}).then(function(data){
    console.log(data)
})
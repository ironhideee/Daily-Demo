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


const promise1 = new Promise ((resolve,reject) => {
    setTimeout(resolve('100'),1000)
})
const promise2 = new Promise ((resolve,reject) => {
    setTimeout(resolve('200'),1000)
})
const promise3 = new Promise ((resolve,reject) => {
    setTimeout(resolve('300'),1000)
})

Promise.all([promise1,promise2,promise3]).then(value => {
    console.log(value)
})

//案例一
// 封装地形 GeoJSON 数据接口
// 将每个数据接口封装为一个返回 Promise 的函数
function getArea () {
    return new Promise((resolve, reject) => {
      fetch('./resources/china.json').then(resp =>
        resp.json().then(china => resolve(china))
      )
    })
  }
  
  // 封装分色地图数据接口
  function getPopulation () {
    return new Promise((resolve, reject) => {
      fetch('./resources/china-population.json').then(resp =>
        resp.json().then(data => resolve(data))
      )
    })
  }
  
  // 封装城市数据接口
  function getCity () {
    return new Promise((resolve, reject) => {
      fetch('./resources/city.json').then(resp =>
        resp.json().then(data => resolve(data))
      )
    })
  }
  
  // 使用 Promise.all 以在三个数据接口均异步成功后，执行回调逻辑
  Promise.all([getArea(), getPopulation(), getCity()]).then(values => {
    // 依次从返回的数据接口数组中获取不同接口数据
    let china = values[0]
    let population = values[1]
    let city = values[2]
    // 使用数据
    doWithData(china, population, city)
  })
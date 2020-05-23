function getData(){
    // 链式处理,将异步变为类似单线程的写法: 高级用法.
    // fetch('../mock/data1.json').then(function(response) {
    //     console.log(response)
    //     return  //... 执行成功, 第1步...
    // }).then(function(returnedValue) {
    //     // ... 执行成功, 第2步...
    // }).catch(function(err) {
    //     // 中途任何地方出错...在此处理 :( 
    // });
    fetch('http://localhost:3000/api/data', {
        method:'GET',
        headers: { // 请求头（可以是Headers对象，也可是JSON对象）
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        mode:'cors',// 允许发送跨域请求
        credentials: 'include'
    }).then(function(response){
        //打印返回的json数据
        response.json().then(function(data){
            console.log(data);
        })
    }).catch(function(e){
        console.log('error: ' + e.toString());
    })
}

getData();
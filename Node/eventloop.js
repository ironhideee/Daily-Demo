const eventloop = {
    queue : [],
    loop(){
        while(this.queue.length > 0){
            var callback = this.queue.shift();
            callback();
        }
        setTimeout(this.loop.bind(this),50);   //这里this指的是eventloop对象
    },
    add(callback){
        this.queue.push(callback);
    }
}

eventloop.loop();

setTimeout(() => {
    eventloop.add(function(){
        console.log(1)
    })
},500)

setTimeout(() => {
    eventloop.add(function(){
        console.log(2)
    })
},800)
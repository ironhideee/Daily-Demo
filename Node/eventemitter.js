const EventEmitter  = require('events').EventEmitter;

class Publishlesson extends EventEmitter {
    constructor(){
        super();
        setInterval(()=>{
            this.emit('newlesson', { price: Math.random() * 100 });
        },3000)
    }
}

const pusblishdemo = new Publishlesson;

pusblishdemo.addListener('newlesson', (res)=>{
    console.log('we get a new lesson',res)
})
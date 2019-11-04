const net = require('net');

const server = net.createServer((socket) => {
    socket.on('data', function(buffer){
        const seqBuffer = buffer.slice(0,2);
        const lessonid = buffer.readInt32BE(2);

        setTimeout(() => {
            const buffer = Buffer.concat([
                seqBuffer,
                Buffer.from(data[lessonid])
            ])
            socket.write(
                buffer
            );
        }, 10+ Math.random()*1000)
         
    })
})

server.listen(4000);

const data = {
    136797: "01",
    136798: "02",
    136799: "03"
}
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})
const Net = require('net')
const port = 12001

const server = new Net.Server()

server.listen(port, function () {
    console.log(`Server listening for connection requests on socket localhost:${port}`)
})

server.on('connection', function (socket) {
    console.log('CONNECTED')

    socket.on('data', function (chunk) {
        console.log(`${chunk.toString()}`)
    })

    socket.on('end', function () {
        console.log('CONNECTION CLOSED')
    })

    socket.on('error', function (err) {
        //console.log(`Error: ${err}`)
    })

    readline.on('line', function (input) {
        if(input == "Q") process.exit(0)
        else socket.write(input)
    })
    
})


import { Server } from 'socket.io'
import http from 'http'

const servidor = http.createServer()
const socketServ = new Server(servidor)

socketServ.on('connection', (socketio) => {
    console.log('Novo usuário online!')

    socketio.on('disconnect', () => {
        console.log('Usuário offline')
    })

    socketio.on('chat', (msg) => {
        console.log(msg)
        socketio.broadcast.emit('chat', msg)
    })
})

servidor.listen(3000, console.log('Servidor funcionando na porta 3000!'))
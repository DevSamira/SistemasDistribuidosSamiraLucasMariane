import { io } from 'socket.io-client';
import readline from 'readline';
const Ireadline = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let urlLocalhost = 'http://localhost:3000';

Ireadline.question('Informe seu nome/nickname: ', (nome) => {
	let socket = io(urlLocalhost);

	const enviarMensagem = () => {
		Ireadline.question('', (mensagem) => {
			const data = new Date();
			const horaString =
				data.getHours() +
				':' +
				data.getMinutes() +
				':' +
				data.getSeconds();

			socket.emit('chat', `[${horaString}] [${nome}]: ${mensagem}`);
			enviarMensagem();
		});
	};
});

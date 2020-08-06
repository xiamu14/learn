import io from 'socket.io-client';

const socket = io('http://localhost:4002', {
  transports: ['websocket']
});

socket.on('connect', function(){});
socket.on('event', (data:any) =>{
  console.log('message', data);
});
socket.on('disconnect', function(){});

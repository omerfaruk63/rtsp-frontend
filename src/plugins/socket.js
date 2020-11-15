import io from 'socket.io-client';

let socket = undefined;

function initialiseSocket(url) {
  socket = io(url);
}

export function addEventListener(event) {
    socket = undefined;
    initialiseSocket(event.url);
    socket.on(event.type, event.callback);
}

export function sendEvent(event) {
  socket.emit(event.type, event.data);
}

export function disconnect() {
    socket.disconnect();
  }
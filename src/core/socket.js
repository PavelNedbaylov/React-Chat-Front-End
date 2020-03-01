import io from 'socket.io-client'

export default io(window.location.origin.replace('3000','3003'));
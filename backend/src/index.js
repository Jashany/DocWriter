import {Server} from 'socket.io';
import Connection from './db/db.js';
import {updateDocument,getDocument} from './controller/document-controller.js';

const PORT = 5000;

Connection();

const io = new Server(PORT,{
    cors: {
        origin: 'http://localhost:5173',
        methods: ['GET', 'POST'],
    }
});

io.on('connection', (socket) => {
    socket.on('get-document', async documentId => {
        const document = await getDocument(documentId);
        socket.join(documentId);
        socket.emit('load-document',document.data);

        socket.on('send-changes', (delta) => {
            socket.broadcast.to(documentId).emit('receive-changes', delta);
        });

        socket.on('save-document', async (data) => {
            await updateDocument(documentId, data);
        });
    });
});
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const cors = require('cors');
const supabase = require('./supabase');

const app = express();

const server = http.createServer(app);
const io = socketIO(server);
// app.use(cors({
//     origin: 'https://project-1-get-every-user-interaction-of-the-ui.vercel.app'
// }));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'https://project-1-get-every-user-interaction-of-the-ui.vercel.app');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});





io.on('connection', (socket) => {
    console.log('A user connected', socket.id);

    // Handle events from the client
    socket.on('webapi', (data) => {
        console.log('Message from client:', data);
        // Broadcast the message to all connected clients
        io.emit('message', data);
    });

    socket.on('disconnect', () => {
        // for last modified
        const date = new Date()
        const lasttime = date.toLocaleTimeString()
        console.log('User disconnected', socket.id);
        // update disconnect user
        let id = socket.id;


        supabase.from('userinfo').update({
            lastModified: lasttime,
            Online: false
        }).eq(
            "socketid", id
        ).select().then((res) => {
            console.log(res.statusText)

        })








    });
});


// Close the database connection when the server is stopped
process.on('SIGINT', async () => {
    process.exit();
});


const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});



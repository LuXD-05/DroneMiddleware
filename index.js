'use strict';

// require('dotenv').config();
// const https = require('https');
// const http = require('http');
// const fs = require('fs');
// const express = require('express');
// const app = express();
// const session = require('express-session');
// const jwt = require('jsonwebtoken');
// const cookieParser = require('cookie-parser');

// const homeRouter = require('./lib/routes/homeRouter.js');
// const { createConnection } = require('./lib/modules/connection.js');
// const connection = createConnection();

// app.use(express.json());
// app.use(cookieParser());
// app.use('/home', homeRouter);
// app.use(express.static(__dirname + '/public'));
// app.use(express.urlencoded({ extended: true }));
// app.use(session({
//     secret: 'key',
//     resave: false,
//     saveUninitialized: true,
//     cookie: { secure: true }
// }));
// app.use(cookieParser('secret')); 

// app.get('/', async function(req, res) {
//     res.redirect(`/home.html`);
// });

// app.post('/login', async function (req, res, next) {
//     // ... per prossime richieste aggiungere token jwt nell'header delle richieste
//     const { email, password  } = req.body;
//     try {
//         const username = await checkUser(email, password);
//         if (username !== '') {
//             // creo sessione
//             req.session.username = username;
//             // creo e assegno token in cookies
//             const token = jwt.sign({ username }, process.env.SECRET_ACCESS_TOKEN, { expiresIn: "1d" });
//             res.cookie("token", token, {
//                 httpOnly: true,
//                 secure: true,
//                 signed: true
//             });
//             // salvo sessione in db

//             //? forse meglio fare col token così poi posso includerlo nelle richieste?
//             res.redirect(`/home.html?id=${req.session.username}`);
//             next();
//         } else {
//             // credenziali non valide
//             res.redirect('/login.html?error=invalid-credentials'); 
//         }
//     } catch (error) {
//         // errore validazione utente
//         console.error("Login " + error); // res.status(500).send(error)
//     }
// })

// app.post('/logout', (req, res) => {
//     req.session.destroy();
//     res.clearCookie("token");
//     res.redirect("login.html");
// });

// const httpServer = http.createServer(app);
// const httpsServer = https.createServer(app);

// const sslOptions = {
//     key: fs.readFileSync('path/to/private.key'),
//     cert: fs.readFileSync('path/to/certificate.crt')
// };
// var httpPort = 3001;
// httpServer.listen(httpPort, () => {
//     console.log('Server HTTP in ascolto sulla porta ' + httpPort);
// });

// httpsServer.listen(443, () => {
//     console.log('Server HTTPS in ascolto sulla porta 443');
// });
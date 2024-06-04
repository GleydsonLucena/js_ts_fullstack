require('dotenv').config();

const express = require('express');
const app = express();

const mongoose = require('mongoose');

mongoose.connect(process.env.CONNECTIONSTRING)
    .then(() => app.emit('OK!'))
    .catch(e => console.log(e));

const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');

const routes = require('./routes');
const path = require('path');
const { middlewareGlobal } = require('./src/middlewares/middleware');

// https://meusite.com/ <-GET - > entrega a página

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, 'public')));

const mongoClientPromise = new Promise((resolve) => {
    mongoose.connection.on("connected", () => {
        const client = mongoose.connection.getClient();
        resolve(client);
    });
});

const sessionStore = MongoStore.create({
    clientPromise: mongoClientPromise,
    dbName: "gleydsonlucena",
    collection: "sessions"
});

const sessionOptions = session({
    secret: 'keyboard cat',
    store: sessionStore,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
    }
});

app.use(sessionOptions);
app.use(flash());

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

// Nossos próprios middlewares

app.use(middlewareGlobal);
app.use(routes)

app.on('OK!', () => {
    app.listen(3000,
        () => {
            console.log('Acessar http://localhost:3000');
            console.log('Servidor execultando na porta 3000');
        });
});
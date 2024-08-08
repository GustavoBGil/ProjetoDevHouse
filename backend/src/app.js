import express from 'express';
import mongoose, { mongo } from 'mongoose';
import routes from './routes';

class App{

    constructor(){
        this.server = express();

        mongoose.connect('mongodb+srv://gustavobusnardogil:159357@devhouse.94dap.mongodb.net/?retryWrites=true&w=majority&appName=devhouse');

        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.server.use(express.json());
    }

    routes(){
        this.server.use(routes);
    }

}

export default new App().server;
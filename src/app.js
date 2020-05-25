require('dotenv').config({
    path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
});

const express = require('express');

class AppController {
    constructor() {
        this.express = express();

        this.middlewares();
        this.routes();
    }

    middlewares() {
        //entender todas as resquisições como json
        this.express.use(express.json());
    }

    routes() {
        this.express.use(require('./routes'));
    }
}

module.exports = new AppController().express;

//porque não foi instaciada porta para o servidor aqui dentro ou algo do genero? Pois para os testes não se pode alocar uma porta, isso será separado. Dentro dos testes, nao sera instaciado um servidor online, apenas a aplicação
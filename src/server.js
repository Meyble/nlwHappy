//isntalador do express --> npm install express
//vou chamar os pacotes q eu baixei, no caso o express
const express = require('express');
//mesmo q o express seja uma variavel, la em cima ela se torna uma função, se feita desse jeito
const server = express();
//inportando outra dependencia para que possa usar o \ na pesquisa de rotas
const path = require('path');
const pages = require('./pages.js')

//criar uma rota
server
//ultilizar body do req no metodo post
.use(express.urlencoded({ extended: true }))
//ultilizando arquivos estaticos
.use(express.static('public')) 
//configurar template engine
.set('views', path.join(__dirname, "views"))
.set('view engine', 'hbs')
 //rotas da aplicação
.get('/', pages.index)
.get('/orphanage', pages.orphanage)
.get('/orphanages', pages.orphanages)
.get('/create-orphanage', pages.createOrphanage)
.post('/save-orphanage', pages.saveOrphanage)

//ligar o server
server.listen(5500)
const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const Sequelize = require('sequelize');
const path = require('path');
const bodyParser = require('body-parser');

// Config
    // Template Engine
        app.engine('handlebars', handlebars({defaultLayout: 'main'}))
        app.set('view engine', 'handlebars')

    // Body Parser
        app.use(bodyParser.urlencoded({extended: false}))
        app.use(bodyParser.json())

    // Conexão com o banco de dados MySQL
        const sequelize = new Sequelize('weathermap','root','admin', {
            host: "localhost",
            dialect: 'mysql',
            timezone: "-03:00"
        })

    // Definir a tabela "Localweather" no BD "weathermap"
        const Localweather = sequelize.define('localweather', {
            cidade: {
                type: Sequelize.STRING
            },
        
            temperatura: {
                type: Sequelize.INTEGER
            },
        
            clima: {
                type: Sequelize.STRING
            },

            updatedAt: {
                type: Sequelize.TIME
            }
        })    
        
    //CRIAR TABELA (*RODAR NA PRIMEIRA VEZ*)   
        //Localweather.sync({force: true})
    
    //Exportando a tabela
        module.exports = {
            Sequelize: Sequelize,
            sequelize: sequelize,
            Localweather
        }

    //Path
        app.use(express.static(path.join(__dirname,'public')));

    // Rotas

        app.get('/', function(req,res){
            Localweather.findAll().then(cidades => {
                res.render('index');
                console.log("Todas as cidades:", JSON.stringify(cidades, null, 4));

            })
        })

        app.post('/', function(req,res){
            Localweather.create({
                cidade: req.body.cidade,
                temperatura: req.body.temperatura,
                clima: req.body.clima   
            })
        })

    app.listen(8081, function(){
        console.log("Servidor rodando!");
    })

    /*
    User.findAll().then(users => {
  console.log("All users:", JSON.stringify(users, null, 4));
});
    */

    /*
                Localweather.findAll().then(function(buscas){
                res.render('index', {buscas: buscas});
            })
    */
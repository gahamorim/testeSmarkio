<h1 align="center">Welcome to TesteSmarkio 👋</h1>

> Aplicação web que fornece informações meteorológicas através da API do OpenWeatherMap 

### 🏠 Homepage ( localhost:8081 )

## Install

```sh
Node.JS -> https://nodejs.org/en/download/ (conferir com node -v, e npm -v)
VS Code(ou qualquer outro editor de texto) -> https://code.visualstudio.com/download#
Express.JS -> npm install express --save
Nodemon -> npm install nodemon -g 
MySQL Community Server -> MySQL Installer -> Server only(Standalone, Development Machine) -> https://dev.mysql.com/downloads/windows/installer/8.0.html
Sequelize -> npm install --save sequelize
MySQL2 -> npm install --save mysql2
Body-parser -> npm install --save body-parser
```

## Usage

```sh
Definir PATH MySQL como Variável de Ambiente -> C:\Program Files\MySQL\MySQL Server 8.0\bin
Utilizador MySQL -> Criar uma conta login=admin, password=admin
```

## Run tests

```sh
Checar usuário MySQL -> No cmd, digite: mysql -h localhost -u root -p. Password = admin

Antes de rodar a aplicação, criar o banco de dados MySQL:
CREATE DATABASE weathermap;
USE weathermap;
SHOW TABLES;
DESCRIBE localweathers;
SELECT * from localweathers;


Para rodar a aplicação, utilizar o comando no cmd: node app.js
OBSERVAÇÃO: Rodar a aplicação web pela primeira vez para que a tabela seja criada no banco de dados(weathermap).
			Após a criação, acessar o arquivo app.js e comentar inserindo // na linha: Localweather.sync({force: true}) (app.js:44)
```

## CONSIDERATIONS

```sh
Ao fazer a busca pela cidade, a aplicação web obtém êxito em trazer as informações pela API. A questão é que não foi possível inserir a função de
tempo em que a busca foi feita, apesar de ter realizado várias tentativas. 
É possivel observar, recarregando a página, que adicionei as informações do banco de dados dinâmicamente em um div no html abaixo dos painéis. Lá se encontra o updatedAt, que representa a hora em que a busca foi feita (tentativa mais próxima).

Quanto ao top 5 das cidades, tentei trabalhar com as queries no MySQL, mas não obtive êxito em implementá-lo.
```

## Author

👤 **Gabriel Amorim**

* Github: [@gahamorim](https://github.com/gahamorim)

## Show your support

Give a ⭐️ if this project helped you!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
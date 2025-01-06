import 'dotenv/config'
import express from 'express'

import Sequelize from 'sequelize'
import config from './config/database.js'

const sequelize = new Sequelize(config)

const app = express() // instanciar o express

sequelize
    .authenticate()
    .then(() => {
        console.log("Banco de dados Conectado")
        app.listen(PORT, () => {
            console.log("Servidor On")
        })
    })
    .catch((err) => {
        console.error(err)
    })
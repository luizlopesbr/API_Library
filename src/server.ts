import dotenv from "dotenv";
dotenv.config();
import { connect } from "./config/database"


const PORT:number = parseInt(`${process.env.PORT || 3000}`);

import app from "./app";

connect()
    .then(() => {
        app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}!`));
    })

    .catch((err) => {
        console.error("Erro ao conectar ao banco de dados:", err)
        process.exit(1) // Encerra a aplicação se não conseguir conectar
      })

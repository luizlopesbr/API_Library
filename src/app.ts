import "express-async-errors";
import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";


const app = express();

app.use(morgan("tiny"));//ver o que chega de requisição na aplicação

app.use(cors());//conectar a um front-end.

app.use(helmet());//11 tipos de proteções de segurança de ataques mais comuns

app.use(express.json());

app.use((req: Request, res: Response, next: NextFunction) => {
    res.send("Hello world");
})

//tratamento de erro pra não quebrar a aplicação se der problema em uma rota
app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).send(error.message);
})

export default app;




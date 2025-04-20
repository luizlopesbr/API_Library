// Importa os tipos necessários do Express
import { Request, Response, NextFunction, RequestHandler } from 'express';

// Define e exporta uma função chamada `asyncHandler`.
// Essa função recebe como argumento `wrapperController`, que é uma função assíncrona (Promise)
// que recebe os parâmetros padrão de middleware do Express: req, res e next.
export const asyncHandler = (
  wrapperController: (req: Request, res: Response, next: NextFunction) => Promise<any>
): RequestHandler => {

  // Retorna uma nova função que será usada como middleware do Express.
  // Essa função executa a `wrapperController` recebida, e se houver algum erro (rejeição da Promise),
  // o erro é passado para o `next`, que ativa o middleware de tratamento de erros do Express.
  return (req, res, next) => {
    // Envolve a execução da função `wrapperController` em um `Promise.resolve`
    // para capturar qualquer erro assíncrono com `.catch(next)`
    Promise.resolve(wrapperController(req, res, next)).catch(next);
  };
};

import { Request, Response } from "express";
import { BookService } from "../services/bookservice";

const service = new BookService();

export class BookController {
  async getAll(req: Request, res: Response) {
    const books = await service.listAll();
    res.json(books);
  }

  async getById(req: Request, res: Response) {
    const id = Number(req.params.id);
    const book = await service.findById(id);
    res.json(book);
  }

  async create(req: Request, res: Response) {
    const { title, author } = req.body;
    const book = await service.create(title, author);
    res.status(201).json(book);
  }

  async update(req: Request, res: Response) {
    const id = Number(req.params.id);
    const { title, author, available } = req.body;
  
    // Primeiro, buscamos o livro existente
    const book = await service.findById(id);
  
    // Atualiza somente os campos que foram enviados
    if (title) book.title = title;
    if (author) book.author = author;
    if (available !== undefined) book.available = available;
  
    await service.update(id, book); // Atualiza o livro
  
    res.json(book); // Retorna o livro atualizado
  }
  

  async delete(req: Request, res: Response) {
    const id = Number(req.params.id);
    await service.delete(id);
    res.status(204).send();
  }

  async borrow(req: Request, res: Response) {
    const id = Number(req.params.id);
    await service.borrow(id);
    res.json({ message: "Book borrowed" });
  }

  async devolve(req: Request, res: Response) {
    const id = Number(req.params.id);
    await service.devolve(id);
    res.json({ message: "Book returned" });
  }
}

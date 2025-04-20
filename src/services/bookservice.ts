import { BookRepository } from "../repositories/bookRepository";

export class BookService {
  private repository = new BookRepository();

  async listAll() {
    return await this.repository.findAll();
  }

  async findById(id: number) {
    const book = await this.repository.findById(id);
    if (!book) throw new Error("Book not found");
    return book;
  }

  async create(title: string, author: string) {
    const book = await this.repository.create({ title, author });
    return book;
  }

  async update(id: number, data: { title?: string; author?: string; available?: boolean }) {
    const book = await this.findById(id);
    Object.assign(book, data);
    await this.repository.update(book);
    return book;
  }

  async delete(id: number) {
    await this.repository.delete(id);
  }

  async borrow(id: number) {
    const book = await this.findById(id);
    book.borrow();
    await this.repository.update(book);
  }

  async devolve(id: number) {
    const book = await this.findById(id);
    book.devolve();
    await this.repository.update(book);
  }

  async getLoanDuration(id: number): Promise<number | null> {
    const book = await this.repository.findById(id);
    if (!book) throw new Error("Book not found");

    return book.getBorrowDuration();
  }
}

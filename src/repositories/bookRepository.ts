import { Book } from "../models/bookModel";
import { connect } from "../config/database";

export class BookRepository {
  async findAll(): Promise<Book[]> {
    const client = await connect();
    const result = await client.query("SELECT * FROM books");
    return result.rows.map(row => new Book(row.id, row.title, row.author, row.available, row.borrow_date, row.devolve_date));
  }

  async findById(id: number): Promise<Book | null> {
    const client = await connect();
    const result = await client.query("SELECT * FROM books WHERE id = $1", [id]);
    if (result.rows.length === 0) return null;
    const row = result.rows[0];
    return new Book(row.id, row.title, row.author, row.available, row.borrow_date, row.devolve_date);
  }

  async create(data: { title: string; author: string }): Promise<Book> {
    const client = await connect();
    const result = await client.query(
      "INSERT INTO books (title, author, available) VALUES ($1, $2, $3) RETURNING *",
      [data.title, data.author, true]
    );
    const row = result.rows[0];
    return new Book(row.id, row.title, row.author, row.available);
  }

  async update(book: Book): Promise<void> {
    const client = await connect();
    await client.query(
      `UPDATE books 
       SET title = $1, author = $2, available = $3, borrow_date = $4, devolve_date = $5 
       WHERE id = $6`,
      [book.title, book.author, book.available, book.borrowDate, book.devolveDate, book.id]
    );
  }

  async delete(id: number): Promise<void> {
    const client = await connect();
    await client.query("DELETE FROM books WHERE id = $1", [id]);
  }
}

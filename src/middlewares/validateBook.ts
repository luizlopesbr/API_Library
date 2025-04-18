import { Request, Response, NextFunction } from "express";

export function validateBook(req: Request, res: Response, next: NextFunction): void {
  const { title, author } = req.body;

  if (!title || typeof title !== "string") {
    res.status(400).json({ message: "Title is required and must be a string" });
    return;
  }

  if (!author || typeof author !== "string") {
    res.status(400).json({ message: "Author is required and must be a string" });
    return;
  }

  next();
}

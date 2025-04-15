export class Book {
  constructor(
    public id: number,
    public title: string,
    public author: string,
    public available: boolean = true,
    public borrowDate?: Date,
    public devolveDate?: Date
  ) {}

  isAvailable(): boolean {
    return this.available;
  }

  borrow(date: Date = new Date()): void {
    if (!this.available) throw new Error('Book is not available');
    this.available = false;
    this.borrowDate = date;
    this.devolveDate = undefined; // reset caso tenha sido devolvido antes
  }

  devolve(date: Date = new Date()): void {
    if (this.available) throw new Error('Book was not borrowed');
    this.available = true;
    this.devolveDate = date;
  }

  getBorrowDuration(): number | null {
    if (!this.borrowDate) return null;
    const endDateBorrow = this.devolveDate ?? new Date();
    const miliSecondsInOneSecond = 1000;
    const secondsInOneMinute = 60;
    const minutesInOneHour = 60;
    const hoursInOneDay = 24;
    const miliSecondsPerDay = miliSecondsInOneSecond * secondsInOneMinute * minutesInOneHour * hoursInOneDay;
    const differenceInMiliseconds = endDateBorrow.getTime() - this.borrowDate.getTime();
    return Math.floor(differenceInMiliseconds / miliSecondsPerDay);
  }
}

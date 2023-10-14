import { BookStatus } from "./enums/BookStatus";

export class Book {
    private title: string;
    private author: string;
    private year: number;
    private bookStatus: BookStatus;


  public constructor(title: string, author: string, year: number, bookStatus: BookStatus) {
        this.title = title;
        this.author = author;
        this.year = year
        this.bookStatus = bookStatus
    }

    public getTitle(): string {
        return this.title
    }

    public setTtile(title: string): void {
         this.title = title

    }


    public getAuthor(): string{
        return this.author
    }

    public setAuthor(author: string): void {
        this.author = author;

    }

    public getYear(): number{
        return this.year
    }
    public setYear(year: number): void{
        this.year = year;
    }


    public getBookStatus(): BookStatus {
        return this.bookStatus 

    }
    public setBookStatus(bookStatus: BookStatus): void {
        this.bookStatus = bookStatus
    }

    public init(author: string, title: string, year: number, bookStatus: BookStatus): void{
        this.author = author;
        this.title = title;
        this.year = year;
        this.bookStatus = bookStatus;

    }
}

//czy konstruktor powinnien być prywantny jeżeli mamy metodę init??
const myBook: Book = new Book("j.k.rowling","harry potter",1998,BookStatus.AVAIBLE)
console.log(myBook)
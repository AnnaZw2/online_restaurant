import { Book } from "./Book";
import { BookStatus } from "./enums/BookStatus";

class Library {
    private books: Book[];
    public constructor(books: Book[]) {
        this.books = books
    }

    public getBooks(): Book[] {
        return this.books
    }
    public setBooks(books: Book[]): void {
        this.books = books
    }

    public init(): Book[] {
        return []
    }

    public addBook(book: Book): void {
        this.books.push(book)
    }

    public borrowBook(book: Book): boolean {
        if (book.getBookStatus() == BookStatus.AVAIBLE) {
            book.setBookStatus(BookStatus.RENTED)
            return true
        }
        return false

    }

    public returnBook(book: Book): boolean{
        if(book.getBookStatus() == BookStatus.RENTED){
            book.setBookStatus(BookStatus.AVAIBLE)
            return true
        }
        return false

    }

    public findByAuthor(author: string){
        
    }
}
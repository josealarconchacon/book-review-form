import { Component, OnInit } from '@angular/core';
import { Book } from './book';
import { BookService } from './book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
  pageTitle: string = 'Book List';

  // properties
  setImageWidth: number = 30;
  setImageMargin: number = 2;
  showImage: boolean = false;
  showErrorMessage: string = '';
  showFilterBooks: Book[] = [];
  books: Book[] = [];

  // setter and getter
  private _listFilter: string = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    console.log(`value is: ${value}`);
    this.showFilterBooks = this.performFilterForBooks(value);
  }

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    // getBooks method from the bookService to retrieve a list of books and subscribe to handle the response from the getBooks
    this.bookService.getBooks().subscribe({
      next: (bookResponse) => {
        this.books = bookResponse;
        this.showFilterBooks = this.books;
      },
      error: (error) => (this.showErrorMessage = error),
    });
  }

  toggleBookImage(): void {
    this.showImage = !this.showImage;
  }

  performFilterForBooks(filterBy: string): Book[] {
    filterBy = filterBy.toLowerCase();
    return this.books.filter((book: Book) =>
      book.bookName.toLowerCase().includes(filterBy)
    );
  }

  onReviewClicked(message: string): void {
    this.pageTitle = 'Rating : ' + message;
  }
}

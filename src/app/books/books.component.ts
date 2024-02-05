import { Component, OnInit } from '@angular/core';
import { Book } from './book';

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
  showFilterBooks: Book[] = [];

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

  books: Book[] = [
    {
      bookId: 2,
      bookName: 'The Metamorphosis',
      boobCode: 'GTR-0098',
      releaseDate: 'June 22, 2000',
      description:
        'For use in schools and libraries only. Writings by and about Kafka and textual notes accompany his translations of his early 20th-century work.',
      price: 19.0,
      rating: 3.9,
      imageUrl: '../../assets/images/theMetamorphosis.jpeg',
    },
    {
      bookId: 3,
      bookName: 'Madame Bovary',
      boobCode: 'TRR-012',
      releaseDate: 'December 1, 2019',
      description:
        'Madame Bovary, originally published as Madame Bovary: Provincial Manners, is a novel by French writer Gustave Flaubert, published in 1857. The eponymous character lives beyond her means in order to escape the banalities and emptiness of provincial life.',
      price: 21.99,
      rating: 4.1,
      imageUrl: '../../assets/images/madameBovary.jpeg',
    },
  ];

  ngOnInit(): void {
    this.listFilter = 'The Metamorphosis';
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

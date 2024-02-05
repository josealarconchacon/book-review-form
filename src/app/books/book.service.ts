import { Injectable } from '@angular/core';
import { Book } from './book';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  // return list of books
  getBooks(): Book[] {
    return [
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
  }
}

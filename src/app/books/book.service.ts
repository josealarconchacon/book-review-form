import { Injectable } from '@angular/core';
import { Book } from './book';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private booksUrl = 'api/books/books.json';

  constructor(private http: HttpClient) {}

  // returns an Observable of type Book[]
  // Angular HttpClient to make a GET request to booksUrl and process the response using the pipe method
  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.booksUrl).pipe(
      tap((data) => console.log('All', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    let showErrorMessage: string = '';
    // checks if the error is an instance of ErrorEvent
    if (error.error instanceof ErrorEvent) {
      showErrorMessage = `An error occurred: ${error.error.message}`;
    } else {
      // otherwise, constructs an error message based on the status and message of the HttpErrorResponse.
      showErrorMessage = `Backend returned code ${error.status}: message ${error.message}`;
    }
    console.log(showErrorMessage);
    // returns an Observable that emits an error using the throwError function passing a new Error object
    return throwError(() => new Error(showErrorMessage));
  }
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SharedComponent } from './shared/shared.component';
import { BooksComponent } from './books/books.component';
import { FormsModule } from '@angular/forms';
import { SetToSpacesPipe } from './shared/set-to-spaces.pipe';
import { ReviewComponent } from './shared/review.component';
import { BookDetailComponent } from './books/book-detail.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SharedComponent,
    BooksComponent,
    SetToSpacesPipe,
    ReviewComponent,
    BookDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'books', component: BooksComponent },
      { path: 'books/:id', component: BookDetailComponent },
      { path: 'home', component: HomeComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', redirectTo: 'home', pathMatch: 'full' },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SharedComponent,
    BooksComponent,
    SetToSpacesPipe,
    ReviewComponent,
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

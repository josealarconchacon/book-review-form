import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SharedComponent } from './shared/shared.component';
import { BooksComponent } from './books/books.component';
import { FormsModule } from '@angular/forms';
import { SetToSpacesPipe } from './shared/set-to-spaces.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SharedComponent,
    BooksComponent,
    SetToSpacesPipe,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

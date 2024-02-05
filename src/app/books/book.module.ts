import { NgModule } from '@angular/core';
import { BooksComponent } from './books.component';
import { BookDetailComponent } from './book-detail.component';
import { SetToSpacesPipe } from '../shared/set-to-spaces.pipe';
import { RouterModule } from '@angular/router';
import { bookDetailGuard } from './book-detail.guard';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [BooksComponent, BookDetailComponent, SetToSpacesPipe],
  imports: [
    RouterModule.forChild([
      { path: 'books', component: BooksComponent },
      {
        path: 'books/:id',
        canActivate: [bookDetailGuard],
        component: BookDetailComponent,
      },
    ]),
    SharedModule,
  ],
})
export class BookModule {}

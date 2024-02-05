import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <nav class="navbar navbar-expand navbar-light bg-light">
      <a class="navbar-brand" style="margin: 15px;">{{ siteTitle }}</a>
      <ul class="nav nav-pills">
        <li><a class="nav-link" routerLink="/home">Book</a></li>
        <li><a class="nav-link" routerLink="/books">Book Form</a></li>
      </ul>
    </nav>
    <div class="container">
      <router-outlet></router-outlet>
    </div>
  `,
})
export class AppComponent {
  siteTitle: string = 'Book Review Form';
}

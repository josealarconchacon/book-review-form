import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div style="text-align: center">
      <app-books></app-books>
    </div>
  `,
})
export class AppComponent {
  siteTitle: string = 'Book Review Form';
}

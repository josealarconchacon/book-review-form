import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css'],
})
export class ReviewComponent implements OnChanges {
  @Input() rating: number = 0;
  cropWidth: number = 75;

  ngOnChanges(): void {
    this.cropWidth = (this.rating * 75) / 5;
  }

  onClick(): void {
    console.log('Clicked on the review!', this.rating);
  }
}

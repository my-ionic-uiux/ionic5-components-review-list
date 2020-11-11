import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-catalog-review-list',
  templateUrl: './catalog-review-list.component.html',
  styleUrls: ['./catalog-review-list.component.scss'],
})
export class CatalogReviewListComponent implements OnInit {

  @Input() reviewList;


  constructor() { }

  ngOnInit() {}

}

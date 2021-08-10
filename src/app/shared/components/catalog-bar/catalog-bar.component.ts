import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-catalog-bar',
  templateUrl: './catalog-bar.component.html'
})
export class CatalogBarComponent implements OnInit {

  @Input() categories: string[];
  @Output() onCategorySelected: any = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  // select category
  selectCategory(event: Event): void {
    this.onCategorySelected.emit((<HTMLSelectElement>event.target).value);
  }
}

import { Component, inject } from '@angular/core';
import { BookListComponent } from '../book-list/book-list.component';
import { BookType, BooksService, IBook } from '../services/books.service';
import { TelegramService } from '../services/telegram.service';
import { CommonModule } from '@angular/common';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [BookListComponent, CommonModule],
  template: `
  <h2 class="title">Жанры</h2>

  <div class="filter">
    @for(filter of books.getFilterNames; track filter.id) {
      <div class="filter-item" (click)="setFilter(filter.type)"
      [ngClass]="{'active' : filter.type === activeFilter[0].type}">
        {{filter.name}}
      </div>
    }
  </div>
  
  <app-book-list
    [title]="getTitle(activeFilter[0].type)"
    [books]="activeFilter"
  />
  `

})
export class ShopComponent {
  telegram = inject(TelegramService);
  books = inject(BooksService);

  activeFilter: IBook[] = this.books.byGroup['dystopia'];

  constructor() {
    this.telegram.BackButton.hide();
  }
  
  setFilter(type: BookType) {
    this.activeFilter = this.books.byGroup[`${type}`];
  }

  getTitle(type: any) {
    return this.books.getFilterNames.find((x: any) => x.type === type)?.name ?? '';
  }

}

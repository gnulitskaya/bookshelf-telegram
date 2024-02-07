import { Component, Input } from '@angular/core';
import { IBook } from '../services/books.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [RouterLink, CommonModule],
  template: `
    <h2>{{ title }}</h2>
    <h4>{{ subtitle }}</h4>
    <ul class="books">
      @for(book of books; track book.id) {
        <li class="book-item" [routerLink]="'/book/' + book.id">
            <div class="book-image">
                <!-- <img [src]="book.image" [alt]="book.name"> -->
                <div *ngIf="!imageLoaded" class="loader-wrapper">
                  <span class="loader"></span>
                </div>
                <img [src]="book?.image" (load)="imageLoaded = true" />
            </div>
            <div class="book-info">
                <h3>{{ book.name }}</h3>
            </div>
        </li>
      }
    </ul>
  `
})
export class BookListComponent {
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() books: IBook[] = [];

  imageLoaded: boolean = false;

  constructor() {

  }
}

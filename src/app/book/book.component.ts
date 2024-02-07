import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { BooksService, IBook } from '../services/books.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TelegramService } from '../services/telegram.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button class="btn-back" (click)="goBack()">
      Назад
    </button>
    <div class="book-item-inner centered">
      <h2 class="mb">{{ book?.name }}</h2>
      <br />
      <!-- <img [src]="book?.image"/> -->

      <!-- <img *ngIf="!imageLoaded" src="loader.gif" /> -->
      <div *ngIf="!imageLoaded" class="loader-wrapper">
      <span class="loader"></span>
      </div>
      <img [src]="book?.image" (load)="imageLoaded = true" />

      <br />
      <br />
      <button class="btn">
        <a [href]="book?.link" target="_blank">Скачать книгу</a>
      </button>

      <ul class="list">
        @for (file of bookss.getDownloadType; track file.id) {
          <li>
          <!-- [href]="getDownloadUrl(book!.name, file.name)"  -->
            <!-- <a download>{{file.name}}</a> -->
            {{file.name}}
          </li>
        }
      </ul>
      
      <p class="book-text">{{ book?.description }}</p>
    </div>
  `,
})
export class BookComponent implements OnInit, OnDestroy {
  bookss = inject(BooksService);
  book: IBook | undefined;
  imageLoaded: boolean = false;

  constructor(
    private books: BooksService,
    private telegram: TelegramService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) this.book = this.books.getById(id);
    this.goBack = this.goBack.bind(this);
  }

  goBack() {
    this.router.navigate(['/']);
  }

  ngOnInit(): void {
    this.telegram.BackButton.show();
    this.telegram.BackButton.onClick(this.goBack);
  }

  ngOnDestroy(): void {
    this.telegram.BackButton.offClick(this.goBack);
  }

  // getDownloadUrl(bookname: string, name: string) {
  //   return `/assets/files/${bookname}-${name}`;
  // }
}

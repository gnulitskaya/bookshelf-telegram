import { Routes } from '@angular/router';
import { ShopComponent } from './shop/shop.component';
import { BookComponent } from './book/book.component';

export const routes: Routes = [
    { path: '', component: ShopComponent, pathMatch: 'full' },
    { path: 'book/:id', component: BookComponent },
];

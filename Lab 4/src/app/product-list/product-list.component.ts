import { products } from '../products';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products = products;

  share() {
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}
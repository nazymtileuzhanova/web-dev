import {Component, Input, OnInit} from '@angular/core';
import { products } from '../products';
@Component({
  selector: 'app-product-items',
  templateUrl: './product-items.component.html',
  styleUrls: ['./product-items.component.css']
})
export class ProductItemsComponent implements OnInit {
  i = 0;
  products = products;
  // @ts-ignore
  @Input categoryId: number;
  removeD(product:any){
    product.shows = false;
  }
  likem(product:any){
    product.likes += 1;
  }
  share() {
    window.alert('The product has been shared!');
  }
  likem0(product:any){
    if(product.rating1 > 0){
      product.rating = (product.rating + product.rating1) / 2;
    } 
  }
  likem1(product:any){
    product.rating1 += 1;
  }
  likem2(product:any){
    product.rating2 += 2;
  }
  likem3(product:any){
    product.rating3 += 3;
  }
  likem4(product:any){
    product.rating4 += 4;
  }
  likem5(product:any){
    product.rating5 += 5;
  }


  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
  constructor() { }

  ngOnInit(): void {
  }

}
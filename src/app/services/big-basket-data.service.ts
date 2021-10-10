import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Utils } from '../utils';
import { ProductsDataService } from './products-data.service';

@Injectable()
export class BigBasketDataService extends ProductsDataService {
  protected static productList = [
    new Product(1, 'GoodQuality1', Utils.randPrice(), '1', 'Frozen'),
    new Product(2, 'GoodQuality2', Utils.randPrice(), '2', 'Fruits'),
    new Product(3, 'GoodQuality3', Utils.randPrice(), '3', 'Deco'),
    new Product(4, 'GoodQuality4', Utils.randPrice(), '4', 'Baby'),
    new Product(5, 'GoodQuality5', Utils.randPrice(), '5'),
    new Product(6, 'GoodQuality6', Utils.randPrice(), '6'),
    new Product(7, 'GoodQuality7', Utils.randPrice(), '7'),
    new Product(8, 'GoodQuality8', Utils.randPrice(), '8'),
    new Product(9, 'GoodQuality9', Utils.randPrice(), '9'),
    new Product(10, 'GoodQuality10', Utils.randPrice(), '10')
  ];

  getProducts() {
    return BigBasketDataService.productList;
  }
}

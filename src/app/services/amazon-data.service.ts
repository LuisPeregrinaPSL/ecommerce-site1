import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Utils } from '../utils';
import { ProductsDataService } from './products-data.service';

@Injectable()
export class AmazonDataService extends ProductsDataService {
  protected static productList = [
    new Product(1, 'CheapQuality1', Utils.randPrice(), '1', 'Frozen'),
    new Product(2, 'CheapQuality2', Utils.randPrice(), '2', 'Fruits'),
    new Product(3, 'CheapQuality3', Utils.randPrice(), '3', 'Deco'),
    new Product(4, 'CheapQuality4', Utils.randPrice(), '4', 'Baby'),
    new Product(5, 'CheapQuality5', Utils.randPrice(), '5'),
    new Product(6, 'CheapQuality6', Utils.randPrice(), '6'),
    new Product(7, 'CheapQuality7', Utils.randPrice(), '7'),
    new Product(8, 'CheapQuality8', Utils.randPrice(), '8'),
    new Product(9, 'CheapQuality9', Utils.randPrice(), '9'),
    new Product(10, 'CheapQuality10', Utils.randPrice(), '10')
  ];


  getProducts() {
    return AmazonDataService.productList;
  }
}

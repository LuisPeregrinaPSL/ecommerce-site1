import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Utils } from '../utils';
import { ProductsDataService } from './products-data.service';

@Injectable()
export class AmazonDataService extends ProductsDataService {
    protected static productList = [
        new Product(1, 'CheapQuality1', Utils.randBetween(ProductsDataService.minPrice, ProductsDataService.maxPrice), '1', 'Frozen'),
        new Product(2, 'CheapQuality2', Utils.randBetween(ProductsDataService.minPrice, ProductsDataService.maxPrice), '2', 'Fruits'),
        new Product(3, 'CheapQuality3', Utils.randBetween(ProductsDataService.minPrice, ProductsDataService.maxPrice), '3', 'Deco'),
        new Product(4, 'CheapQuality4', Utils.randBetween(ProductsDataService.minPrice, ProductsDataService.maxPrice), '4', 'Baby'),
        new Product(5, 'CheapQuality5', Utils.randBetween(ProductsDataService.minPrice, ProductsDataService.maxPrice), '5'),
        new Product(6, 'CheapQuality6', Utils.randBetween(ProductsDataService.minPrice, ProductsDataService.maxPrice), '6'),
        new Product(7, 'CheapQuality7', Utils.randBetween(ProductsDataService.minPrice, ProductsDataService.maxPrice), '7'),
        new Product(8, 'CheapQuality8', Utils.randBetween(ProductsDataService.minPrice, ProductsDataService.maxPrice), '8'),
        new Product(9, 'CheapQuality9', Utils.randBetween(ProductsDataService.minPrice, ProductsDataService.maxPrice), '9'),
        new Product(10, 'CheapQuality10', Utils.randBetween(ProductsDataService.minPrice, ProductsDataService.maxPrice), '10')
    ];


    getProducts() {
        return AmazonDataService.productList;
    }
}

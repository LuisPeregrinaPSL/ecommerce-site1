import { Injectable } from '@angular/core';
import { InexistingProductError } from '../errors/inexisting-product-error';
import { Product } from '../models/product';
import { Utils } from '../utils';

@Injectable()
export class ProductsDataService {
    static minPrice = 1;
    static maxPrice = 300;
    protected static productList = [
        new Product(1, 'Alpha', Utils.randBetween(ProductsDataService.minPrice, ProductsDataService.maxPrice), '1', 'Frozen'),
        new Product(2, 'Beta', Utils.randBetween(ProductsDataService.minPrice, ProductsDataService.maxPrice), '2', 'Fruits'),
        new Product(3, 'Gamma', Utils.randBetween(ProductsDataService.minPrice, ProductsDataService.maxPrice), '3', 'Deco'),
        new Product(4, 'Delta', Utils.randBetween(ProductsDataService.minPrice, ProductsDataService.maxPrice), '4', 'Baby'),
        new Product(5, 'Epsilon', Utils.randBetween(ProductsDataService.minPrice, ProductsDataService.maxPrice), '5'),
        new Product(6, 'Zeta', Utils.randBetween(ProductsDataService.minPrice, ProductsDataService.maxPrice), '6'),
        new Product(7, 'Eta', Utils.randBetween(ProductsDataService.minPrice, ProductsDataService.maxPrice), '7'),
        new Product(8, 'Theta', Utils.randBetween(ProductsDataService.minPrice, ProductsDataService.maxPrice), '8'),
        new Product(9, 'Iota', Utils.randBetween(ProductsDataService.minPrice, ProductsDataService.maxPrice), '9'),
        new Product(10, 'Kappa', Utils.randBetween(ProductsDataService.minPrice, ProductsDataService.maxPrice), '10')
    ];

    constructor() { }

    getProducts() {
        return ProductsDataService.productList;
    }


    addProduct(id: number, name: string, price: number, pictureId: string, category?: string) {
        const product = new Product(id, name, price, pictureId, category);
        this.addFromProduct(product);
    }

    addFromProduct(product: Product) {
        ProductsDataService.productList.push(product);
    }

    removeProduct(id: number) {
        const index = ProductsDataService.productList.findIndex((product: Product) => product.id === id);
        if (index === -1) {
            throw new InexistingProductError();
        }
        ProductsDataService.productList.splice(index, 1);
    }

    getProductById(id: number): Product | undefined {
        const products = this.getProducts();
        for (const product of products) {
            if (product.id === id) {
                return product;
            }
        }
        return;
    }
}

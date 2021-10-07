import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { AmazonDataService } from 'src/app/services/amazon-data.service';
import { BigBasketDataService } from 'src/app/services/big-basket-data.service';
import { ProductsDataService } from 'src/app/services/products-data.service';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.sass'],
    providers: [{ provide: ProductsDataService, useClass: BigBasketDataService }]
})
export class ProductsComponent implements OnInit {
    initialList: Product[];

    constructor(private productService: ProductsDataService) {
        this.initialList = this.productService.getProducts();
    }

    ngOnInit(): void {

    }
}

import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductsDataService } from 'src/app/services/products-data.service';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.sass']
})
export class ProductsComponent implements OnInit {
    initialList: Product[];

    constructor(private productService: ProductsDataService) {
        this.initialList = this.productService.getProducts();
    }

    ngOnInit(): void {

    }
}

import { Component, Input, OnInit } from '@angular/core';
import { faPlusSquare, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { CartService } from 'src/app/services/cart.service';
import { Product } from 'src/app/models/product';
import { ProductsDataService } from 'src/app/services/products-data.service';
import { UserService } from 'src/app/services/user.service';

@Component({
    selector: 'app-product-details',
    templateUrl: './product-details.component.html',
    styleUrls: ['./product-details.component.sass'],
})
export class ProductDetailsComponent implements OnInit {
    @Input() product!: Product;
    faTrashAlt = faTrashAlt;
    faPlusSquare = faPlusSquare;

    constructor(public userService: UserService, public cartService: CartService, public productService: ProductsDataService) { }

    ngOnInit(): void {
    }

    removeProduct(id: number) {
        this.productService.removeProduct(id);
    }

}

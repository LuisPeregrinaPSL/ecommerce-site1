import { Component, OnInit } from '@angular/core';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { CartService } from 'src/app/services/cart.service';
import { Product } from 'src/app/models/product';
import { ProductsDataService } from 'src/app/services/products-data.service';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.sass']
})
export class CartComponent implements OnInit {
    list: Product[] = [];
    faTrashAlt = faTrashAlt;

    constructor(private cartService: CartService, public productService: ProductsDataService) {
        // Construct the list of products based on the id numbers in cartService
        const productIdsInCart = this.cartService.getCartProducts();
        for (const productId of productIdsInCart) {
            const product = productService.getProductById(productId);
            if (product) {
                this.list.push(product);
            }
        }
    }

    ngOnInit(): void {
    }

    /**
     *
     * @param id Removes item from cart
     */
    delete(id: number) {
        for (let i = 0; i < this.list.length; i++) {
            if (this.list[i].id === id) {
                this.list.splice(i, 1);
                this.cartService.removeProduct(id);
            }
        }
    }

    /**
     * Gets thej total based on this.list
     */
    getTotal() {
        let total = 0;
        this.list.forEach((product) => total += product.price);
        return total;
    }

}

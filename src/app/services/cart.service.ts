import { Injectable } from '@angular/core';
import { Constants } from '../constants';
import { ProductWasNotInCartError } from '../errors/product-was-not-in-cart-error';
import { UnableToGetCartError } from '../errors/unable-to-get-cart-error';

@Injectable({
    providedIn: 'root'
})
export class CartService {
    /**
     * Use numbers to avoid cyclic dependency on ProductService.
     */
    constructor() { }

    /**
     * Adds an existing Product to the cart.
     *
     * @param product Product
     */
    addProduct(productId: number) {
        const productIds: number[] = this.getCartProducts();

        productIds.push(productId);
        this.saveCart(productIds);
    }

    removeProduct(productId: number) {
        const productIds: number[] = this.getCartProducts();
        const index = productIds.findIndex((_productId: number) => _productId === productId);
        if (index === -1) {
            throw new ProductWasNotInCartError();
        }
        productIds.splice(index, 1);
        this.saveCart(productIds);
    }

    /**
     * Removes users from storage
     */
    clearCart() {
        localStorage.setItem(Constants.cartKey, '[]');
    }

    getCartProducts() {
        const jsonStr = localStorage.getItem(Constants.cartKey);
        let productIds: number[] = [];
        if (jsonStr !== null) {
            try {
                productIds = JSON.parse(jsonStr);
            } catch (e) {
                throw new UnableToGetCartError();
            }
        }
        return productIds;
    }

    private saveCart(productIds: number[]) {
        localStorage.setItem(Constants.cartKey, JSON.stringify(productIds));
    }
}

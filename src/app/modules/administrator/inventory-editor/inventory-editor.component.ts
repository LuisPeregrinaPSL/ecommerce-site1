import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faGlasses } from '@fortawesome/free-solid-svg-icons';
import { Product } from 'src/app/models/product';
import { ProductsDataService } from 'src/app/services/products-data.service';

@Component({
    selector: 'app-inventory-editor',
    templateUrl: './inventory-editor.component.html',
    styleUrls: ['./inventory-editor.component.sass']
})
export class InventoryEditorComponent implements OnInit {
    @Input() product!: Product;
    productForm: FormGroup;

    constructor(private productsDataService: ProductsDataService) {
        this.productForm = new FormGroup({
            name: new FormControl(this.product.name, [
                Validators.required,
                Validators.minLength(3),
                Validators.maxLength(20)
            ]),
            category: new FormControl(this.product.category, [
                Validators.required,
                Validators.minLength(3),
                Validators.maxLength(20)
            ]),
            price: new FormControl(this.product.price, [
                Validators.required,
                Validators.minLength(3),
                Validators.maxLength(3)
            ])
        });
    }

    ngOnInit(): void {
    }

    onSubmit() {
        this.productsDataService.removeProduct(this.product.id);
        this.product.name = this.productForm.value.name;
        this.product.category = this.productForm.value.category;
        this.product.price = this.productForm.value.price;
        this.productsDataService.addFromProduct(this.product);
    }

    onCancel() {
        return false;
    }

    updatePicture() {
        return false;
    }

    clearPicture() {
        return false;
    }

}

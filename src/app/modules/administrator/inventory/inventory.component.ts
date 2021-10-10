import { Component, OnInit } from '@angular/core';
import { faEdit, faPlusSquare, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { BigBasketDataService } from 'src/app/services/big-basket-data.service';
import { ProductsDataService } from 'src/app/services/products-data.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.sass'],
  providers: [{ provide: ProductsDataService, useClass: BigBasketDataService }]
})
export class InventoryComponent implements OnInit {
  faEdit = faEdit;
  faTrashAlt = faTrashAlt;
  faPlusSquare = faPlusSquare;

  constructor(public productsDataService: ProductsDataService) { }

  ngOnInit(): void {
  }

  addNewProduct() {
    console.log('');
  }

  removeProduct(id: number) {
    this.productsDataService.removeProduct(id);
  }

  editProduct(id: number) {
    console.log('');
  }

  updatePrice(id: number, newPrice: number) {
    const product = this.productsDataService.getProductById(id)
    if (product) {
      product.price = newPrice;
    }
  }
}

import { CurrencyPipe } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-price-updater',
  templateUrl: './price-updater.component.html',
  styleUrls: ['./price-updater.component.sass']
})
export class PriceUpdaterComponent implements OnInit {
  @Input() price!: number;
  @Output() priceChanged: EventEmitter<number> = new EventEmitter();


  priceUpdateForm!: FormGroup;

  constructor() {
  }


  ngOnInit(): void {
    this.priceUpdateForm = new FormGroup({
      pricevalue: new FormControl(this.price, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(10)
      ])
    });
  }

  onSubmit() {
    this.price = this.priceUpdateForm.value.pricevalue;
    this.priceChanged.emit(this.price);
  }

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryComponent } from './inventory/inventory.component';
import { UsersComponent } from './users/users.component';


@NgModule({
  declarations: [
    InventoryComponent,
    UsersComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    InventoryComponent,
    UsersComponent
  ]
})
export class AdministratorModule { }

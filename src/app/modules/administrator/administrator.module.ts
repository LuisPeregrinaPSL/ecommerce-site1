import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryComponent } from './inventory/inventory.component';
import { UsersComponent } from './users/users.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { InventoryEditorComponent } from './inventory-editor/inventory-editor.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PriceUpdaterComponent } from './price-updater/price-updater.component';


@NgModule({
    declarations: [
        InventoryComponent,
        UsersComponent,
        InventoryEditorComponent,
        PriceUpdaterComponent
    ],
    imports: [
        CommonModule,
        FontAwesomeModule,
        ReactiveFormsModule
    ],
    exports: [
        InventoryComponent,
        UsersComponent
    ]
})
export class AdministratorModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';

import { UserModule } from './modules/user/user.module';
import { AdministratorModule } from './modules/administrator/administrator.module';
import { ShopModule } from './modules/shop/shop.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from './modules/shared/shared.module';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FontAwesomeModule,
        NgbModule,
        SharedModule,
        UserModule,
        AdministratorModule,
        ShopModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

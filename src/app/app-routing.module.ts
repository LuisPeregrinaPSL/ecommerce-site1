import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './modules/shop/cart/cart.component';
import { HomeComponent } from './modules/shared/home/home.component';
import { LoginComponent } from './modules/user/login/login.component';
import { LogoutComponent } from './modules/user/logout/logout.component';
import { MyAccountComponent } from './modules/user/my-account/my-account.component';
import { ProductsComponent } from './modules/shop/products/products.component';
import { RegisterComponent } from './modules/user/register/register.component';
import { UsersComponent } from './modules/administrator/users/users.component';
import { InventoryComponent } from './modules/administrator/inventory/inventory.component';
import { UserPermission } from './modules/user/user-permission';
import { AdministratorPermission } from './modules/administrator/administrator-permission';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'products',
        component: ProductsComponent
    },
    {
        path: 'cart',
        component: CartComponent,
        canActivate: [UserPermission]
    },
    {
        path: 'my-account',
        component: MyAccountComponent,
        canActivate: [UserPermission]
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'logout',
        component: LogoutComponent,
        canActivate: [UserPermission]
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'users',
        component: UsersComponent,
        canActivate: [UserPermission, AdministratorPermission]
    },
    {
        path: 'inventory',
        component: InventoryComponent,
        canActivate: [UserPermission, AdministratorPermission]
    }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [UserPermission, AdministratorPermission]
})
export class AppRoutingModule { }

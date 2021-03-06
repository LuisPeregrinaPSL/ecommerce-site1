import { Component, OnInit } from '@angular/core';
import { faClipboardList, faCogs, faSearch, faShoppingCart, faSignOutAlt, faUser, faUsers } from '@fortawesome/free-solid-svg-icons';
import { UserService } from '../../../services/user.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {
    collapsed = true;
    faShoppingCart = faShoppingCart;
    faSearch = faSearch;
    faSignOutAlt = faSignOutAlt;
    faUser = faUser;
    faCog = faCogs;
    faUsers = faUsers;
    faClipboardList = faClipboardList;

    loggedInUser = '';
    isAdmin = false;


    constructor(userService: UserService) {
        try {
            this.loggedInUser = userService.getLoggedInUser().fullname;
            this.isAdmin = userService.isAdmin();
        } catch (e) {
        }
    }

    ngOnInit(): void {

    }

}

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../../services/user.service';

@Injectable({
    providedIn: 'root'
})
export class UserPermission implements CanActivate {
    constructor(private userService: UserService, private router: Router) { }

    /**
     * Returns true if logged in, otherwise redirects to login.
     *
     * @param route ActivatedRouteSnapshot
     * @param state RouterStateSnapshot
     */
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
        boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        if (!this.userService.isLoggedIn()) {
            return this.router.parseUrl('/login');
        }
        return true;
    }
}

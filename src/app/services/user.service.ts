import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Constants } from '../constants';
import { UnableToGetUsersError } from '../errors/unable-to-get-users-error';
import { UserAlreadyAdminError } from '../errors/user-already-admin-error';
import { UserDidNotExistError } from '../errors/user-did-not-exist-error';
import { UserNotLoggedInError } from '../errors/user-not-logged-in-error';
import { UserWasNotAdminError } from '../errors/user-was-not-admin-error';
import { User } from '../models/user';

@Injectable({
    providedIn: 'root'
})
export class UserService implements CanActivate {

    constructor() { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
        boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        throw new Error('Method not implemented.');
    }

    /**
     * Adds user.
     *
     * @param user User
     */
    addUser(fullname: string, username: string, email: string, password: string) {
        const users: User[] = this.getUsers();
        const id = users.length > 0 ? users[users.length - 1].id + 1 : 1;
        const newUser = User.create(id, fullname, username, email, password);

        users.push(newUser);
        this.saveUsers(users);
    }

    /**
     * Removes user.
     *
     * @param user User
     */
    removeUser(user: User) {
        const users: User[] = this.getUsers();
        const index = users.findIndex((_user: User) => _user.id === user.id);
        if (index === -1) {
            throw new UserDidNotExistError();
        }
        users.splice(index, 1);
        this.saveUsers(users);
    }

    /**
     * Updates user fullname, email and password
     *
     * @param id number
     * @param fullname string
     * @param email string
     * @param password string
     */
    updateUser(id: number, fullname?: string, email?: string, password?: string) {
        const users: User[] = this.getUsers();
        const index = users.findIndex((user: User) => user.id === id);
        if (index === -1) {
            throw new UserDidNotExistError();
        }
        if (fullname) {
            users[index].fullname = fullname;
        }
        if (email) {
            users[index].email = email;
        }
        if (password) {
            users[index].password = password;
        }
        this.saveUsers(users);
    }

    /**
     * Adds user to the list of admins.
     *
     * @param user User
     */
    setAdmin(user: User) {
        const adminIds: number[] = this.getAdmins();
        if (user.id in adminIds) {
            throw new UserAlreadyAdminError();
        }
        adminIds.push(user.id);
        this.saveAdmins(adminIds);
    }

    /**
     * Removes user from the list of admins.
     *
     * @param user User
     */
    unsetAdmin(user: User) {
        const adminIds: number[] = this.getAdmins();
        const index = adminIds.findIndex((id: number) => id === user.id);
        if (index === -1) {
            throw new UserWasNotAdminError();
        }
        adminIds.splice(index, 1);
        this.saveAdmins(adminIds);
    }


    /**
     * getLoggedInUser may throw Error if it couldn't parse.
     */
    isLoggedIn(): boolean {
        try {
            return this.getLoggedInUser().id !== -1;
        } catch (e) {
            return false;
        }
    }

    /**
     * Returns logged in user, false if there is none.
     */
    getLoggedInUser(): User {
        const userId = localStorage.getItem(Constants.userKey);
        if (userId === null || userId.length < 1) {
            throw new UserNotLoggedInError();
        }
        const users = this.getUsers();
        const index = users.findIndex((user: User) => user.id === parseInt(userId, 10));
        if (index === -1) {
            throw new UserDidNotExistError();
        }
        return users[index];
    }

    isAdmin(): boolean {
        return this.isLoggedIn() && this.getAdmins().includes(this.getLoggedInUser().id);
    }

    /**
     * Returns true if the username and password matches to one User, returns false if not.
     * If it does match, sets the loggedin user, used by getLoggedInUser
     *
     * @param username string
     * @param password string
     */
    challengeLogin(username: string, password: string) {
        const users: User[] = this.getUsers();
        let matched = false;
        for (const user of users) {
            if (user.username === username && user.password === password) {
                localStorage.setItem(Constants.userKey, user.id.toString());
                matched = true;
                break;
            }
        };

        return matched;
    }

    /**
     * Removes the user login info.
     */
    removeLogin() {
        localStorage.removeItem(Constants.userKey);
    }


    private saveUsers(users: User[]) {
        localStorage.setItem(Constants.usersKey, JSON.stringify(users));
    }

    private saveAdmins(adminIds: number[]) {
        localStorage.setItem(Constants.adminUsers, JSON.stringify(adminIds));
    }

    /**
     * Removes users from storage
     */
    private clearUsers() {
        localStorage.setItem(Constants.usersKey, '[]');
    }

    /**
     * Removes admin ids from storage
     */
    private clearAdmins() {
        localStorage.setItem(Constants.adminUsers, '[]');
    }

    /**
     * Returns users, empty array, or error if it fails
     */
    private getUsers(): User[] {
        const jsonStr = localStorage.getItem(Constants.usersKey);
        let users: User[] = [];
        if (jsonStr !== null) {
            try {
                users = JSON.parse(jsonStr);
            } catch (e) {
                throw new UnableToGetUsersError();
            }
        }
        return users;
    }

    /**
     * Admins are stored as an array of User.id, empty array, or error.
     */
    private getAdmins() {
        const jsonStr = localStorage.getItem(Constants.adminUsers);
        let adminIds: number[] = [];
        if (jsonStr !== null) {
            try {
                adminIds = JSON.parse(jsonStr);
            } catch (e) {
                throw new UnableToGetUsersError();
            }
        }
        return adminIds;
    }

}

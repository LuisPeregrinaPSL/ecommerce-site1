import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
    selector: 'app-my-account',
    templateUrl: './my-account.component.html',
    styleUrls: ['./my-account.component.sass']
})
export class MyAccountComponent implements OnInit {
    user: User;
    userForm: FormGroup;
    canUpdate = false;

    constructor(public userService: UserService, private router: Router) {
        this.user = userService.getLoggedInUser();
        this.userForm = new FormGroup({
            fullname: new FormControl(this.user.fullname, [
                Validators.required,
                Validators.minLength(3),
                Validators.maxLength(200)
            ]),
            email: new FormControl(this.user.email, [
                Validators.required,
                Validators.minLength(3),
                Validators.maxLength(30),
                Validators.email
            ]),
            password: new FormControl(this.user.password, [
                Validators.required,
                Validators.minLength(3),
                Validators.maxLength(30)
            ])
        });
        this.onChanges();
    }

    ngOnInit(): void {
    }

    onSubmit() {
        this.userService.updateUser(
            this.user.id,
            this.userForm.value.fullname,
            this.userForm.value.email,
            this.userForm.value.password
        );
        this.router.navigate([]);
    }

    onChanges(): void {
        this.userForm.valueChanges.subscribe(thisUser => {
            if (
                thisUser.fullname !== this.user.fullname ||
                thisUser.email !== this.user.email ||
                thisUser.password !== this.user.password
            ) {
                this.canUpdate = true;
            } else {
                this.canUpdate = false;
            }
        });
    }
}

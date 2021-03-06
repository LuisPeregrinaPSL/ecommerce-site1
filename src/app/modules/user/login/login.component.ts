import { Location } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
    @ViewChild('username') usernameInput!: ElementRef;
    needsAttention = false;
    alertMessage = '';
    loginForm = new FormGroup({
        username: new FormControl('', [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(30)
        ]),
        password: new FormControl('', [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(30)
        ])
    });

    constructor(private location: Location, private router: Router, private userService: UserService) { }

    ngOnInit(): void {
    }

    onSubmit() {
        const good = this.userService.challengeLogin(this.loginForm.value.username, this.loginForm.value.password);
        if (good) {
            this.location.back();
        } else {
            this.needsAttention = true;
            this.alertMessage = 'Incorrect username and / or password.';
            this.loginForm.patchValue({ password: '' });
            this.usernameInput.nativeElement.focus();
        }
    }

    register() {
        this.router.navigate(['/register']);
    }

    onCancel() {
        this.location.back();
    }
}

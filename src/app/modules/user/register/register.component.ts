import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { Constants } from '../../../constants';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {
  registerForm = new FormGroup({
    fullname: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(200)
    ]),
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(30)
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(30),
      Validators.email
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(30)
    ]),
    admin: new FormControl(false)
  });

  constructor(private location: Location, private router: Router, private userService: UserService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    // Add user
    const user = this.userService.addUser(
      this.registerForm.value.fullname,
      this.registerForm.value.username,
      this.registerForm.value.email,
      this.registerForm.value.password);
    // Login
    this.userService.challengeLogin(this.registerForm.value.username, this.registerForm.value.password);
    // Admin setup
    if (this.registerForm.value.admin) {
      this.userService.setAdmin(user);
    }
    // Go to home
    this.router.navigate(['/']);
  }

  onCancel() {
    this.location.back();
  }
}

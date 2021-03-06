import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { Constants } from '../../../constants';

@Component({
    selector: 'app-logout',
    templateUrl: './logout.component.html',
    styleUrls: ['./logout.component.sass']
})
export class LogoutComponent implements OnInit {

    constructor(private location: Location, private router: Router, private userService: UserService) { }

    ngOnInit(): void {
    }

    onSubmit() {
        this.userService.removeLogin();
        this.router.navigate(['/']);
    }

    onCancel() {
        this.location.back();
    }

}

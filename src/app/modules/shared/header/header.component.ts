import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  username!: string;

  constructor(
    private loginService: LoginService
  ) {

  }

  ngOnInit(): void {
    this.loginService.showLoggedInMessage.subscribe(name => this.username = name);
  }

}

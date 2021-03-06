import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit, AfterViewInit {
  bgColors = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark'];

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {

    Array.from(document.getElementsByClassName('picsum-img-wrapper')).forEach((element, index) => {
      element.classList.add(this.getBackgroundClass());
    });
  }

  getBackgroundClass() {
    return 'bg-' + this.bgColors[Math.floor(Math.random() * (this.bgColors.length - 1))];
  }

}

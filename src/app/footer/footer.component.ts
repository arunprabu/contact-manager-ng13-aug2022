import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="text-center">
      <hr>
      <app-menu>
        <li><a href="#" class="nav-link px-2 link-dark">Back to Top</a></li>
      </app-menu>
      <p class="redText">&copy; Copyright 2022</p>
    </footer>
  `,
  styles: [
    `
      .greyText{
        color: grey;
      }
    `
  ]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

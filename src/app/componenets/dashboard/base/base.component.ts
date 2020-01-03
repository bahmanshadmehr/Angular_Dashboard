import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SideMenuComponent } from '../side-menu/side-menu.component';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BaseComponent implements OnInit {
  language: string;

  constructor() { }

  ngOnInit() {
    this.language = 'fa';
  }

}

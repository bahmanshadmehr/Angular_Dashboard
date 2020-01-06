import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SideMenuComponent } from '../side-menu/side-menu.component';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BaseComponent implements OnInit {

  constructor(public translate: TranslateService) {
  }

  ngOnInit() {
    _toastr("Welcome! You have 24 new notifications and 3 new messages.", "top-left", "success", false);
  }

}

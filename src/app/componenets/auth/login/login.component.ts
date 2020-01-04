import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  language: string;

  constructor(public translate: TranslateService) { }

  ngOnInit() {
    this.language = 'fa';
  }

}

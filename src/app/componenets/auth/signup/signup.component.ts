import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  language: string;
  accepted_terms: boolean;

  constructor(public translate: TranslateService) { }

  ngOnInit() {
    this.accepted_terms = false;
    this.language = 'fa';
  }

  acceptTerms(){
    this.accepted_terms = true;
  }

}

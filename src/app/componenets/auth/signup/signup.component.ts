import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  language: string;
  accepted_terms: boolean;

  constructor() { }

  ngOnInit() {
    this.accepted_terms = false;
    this.language = 'fa';
  }

  acceptTerms(){
    this.accepted_terms = true;
  }

}

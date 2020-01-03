import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interence',
  templateUrl: './interence.component.html',
  styleUrls: ['./interence.component.css']
})
export class InterenceComponent implements OnInit {
  styles: string[];
  language: string;

  constructor() { }

  ngOnInit() {
    this.language = 'fa'
    if (this.language == 'fa'){
      this.styles = [
        'assets/plugins/bootstrap/RTL/bootstrap-rtl.min.css',
        'assets/plugins/bootstrap/RTL/bootstrap-flipped.min.css',
        'assets/css/layout-RTL.css'
      ]
      console.log(this.styles);
      
    }
  }

}

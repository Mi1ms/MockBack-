import { Component, OnInit, Input } from '@angular/core';
// import { indicateur } from '.indicateur/'

@Component({
  selector: 'app-back-up',
  templateUrl: './back-up.component.html',
  styleUrls: ['./back-up.component.css']
})
export class BackUpComponent implements OnInit {

  @Input() indicator: any;

  constructor() {
  }

  ngOnInit() {
    console.log(this.indicator);
  }



}

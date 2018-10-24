import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-crontask',
  templateUrl: './crontask.component.html',
  styleUrls: ['./crontask.component.css']
})
export class CrontaskComponent implements OnInit {
  @Input() indicator: any;

  constructor() { }

  ngOnInit() {
    
    console.log(this.indicator);
  }

}

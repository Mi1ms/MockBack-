import { Component, OnInit, Input } from '@angular/core';
import { IndicateurComponent } from '../indicateur.component';


@Component({
  providers:[IndicateurComponent],
  selector: 'app-crontask',
  templateUrl: './crontask.component.html',
  styleUrls: ['./crontask.component.css']
})
export class CrontaskComponent implements OnInit {
  @Input() info: any;

  constructor() { }

  ngOnInit() {

    console.log(this.info);
  }

}

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { MockbackService } from './mockback.service';

@Component({
  selector: 'app-indicateur',
  templateUrl: './indicateur.component.html',
  styleUrls: ['./indicateur.component.css']
})
export class IndicateurComponent implements OnInit {

  indicateurs: any[];

  constructor(private indicateurService: MockbackService) { }

  ngOnInit() {
    // console.log(this.indicateurService.createDb().list);
    this.indicateurs = this.indicateurService.createDb().list;
  }

}

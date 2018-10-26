import { Component, OnInit, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-indicateur',
  templateUrl: './indicateur.component.html',
  styleUrls: ['./indicateur.component.css']
})
export class IndicateurComponent implements OnInit {

  indicateurs: any = [];

  constructor(private indicateurService: AppService) { }

  ngOnInit() {

    this.indicateurs = this.GetAllList();
  }

  GetAllList() {
    return this.indicateurService.getList()//.subscribe(data => this.indicateurs
    //);
  }

}

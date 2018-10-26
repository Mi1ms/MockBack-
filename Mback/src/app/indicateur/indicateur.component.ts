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
    var test = this.GetAllList()
    .subscribe(
      data => {
          this.indicateurs = data.v1
          
      },
      error => { console.log(error);
      });

      // this.indicateurs = []// this.indicateurs.vOne;
  }

  GetAllList() {
    return  this.indicateurService.getList()
    // .subscribe(
    //   data => {
    //       var datalist = data
    //       return datalist;
    //   },
    //   error => { console.log(error);
    //   });

  }

}

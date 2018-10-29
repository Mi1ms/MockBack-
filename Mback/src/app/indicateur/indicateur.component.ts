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
  error: boolean = false;
  msgerror: string;

  constructor(private indicateurService: AppService) { }

  ngOnInit() {

    this.GetAllList()
            .subscribe(
                data => {
                    if(typeof data === 'object'){
                      this.indicateurs = data.v1
                    }
                },
                error => {
                  this.error = true;
                  this.msgerror = error.message;
                }
            );
  }

  GetAllList() {
      return this.indicateurService.getList()
  }

  getInfo(info){
      console.log(info);
  }

}

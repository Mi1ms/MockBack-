import { Component, OnInit, EventEmitter } from '@angular/core';
import { AppService } from '../app.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-indicateur',
  templateUrl: './indicateur.component.html',
  styleUrls: ['./indicateur.component.css']
})
export class IndicateurComponent implements OnInit {

  indicateurs: any = [];
  error: boolean = false;
  msgerror: string;
  nbr: number = 0;

  constructor(private indicateurService: AppService,
              private route: ActivatedRoute
             ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.indicateurService.getList("groups/"+id+"/indicators")
        .subscribe((indic) => {
          this.indicateurs = indic
        })
  }

  getInfo(info): void {

  }

}

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
  id;

  constructor(private indicateurService: AppService,
              private route: ActivatedRoute,
              private router: Router
             ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    // this.indicateurService.getList("groups/"+this.id+"/indicators")
    //     .subscribe((indic) => {
    //       this.indicateurs = indic
    //     })
  }

  getInfo(id, obj) {
        this.router.navigate([id, 'indicators', obj.id ]);

  }

}

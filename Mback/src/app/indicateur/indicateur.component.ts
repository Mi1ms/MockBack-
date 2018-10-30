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
              private route: ActivatedRoute,
              private router: Router ) { }

  ngOnInit() {

    this.GetAllList()
            .subscribe(
                data => {
                    if(typeof data === 'object'){

                      this.indicateurs = data

                    }
                },
                error => {
                  this.error = true;
                  this.msgerror = error.message;
                }
            );
  }

  GetAllList() {
      return this.indicateurService.getList("indicators")
  }

  getInfo(info){
      if(info.typ === 'backup'){
        this.router.navigate(['/back'], info)

      } else {
        this.router.navigate(['/cron'], info).then(
          () => console.log(info)
        )
      }
  }

}

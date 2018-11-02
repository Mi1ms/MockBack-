import { Component, OnInit, Input } from '@angular/core';
import { AppService } from '../../app.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  details: any = [];
  name: any = [];

  constructor(private route: ActivatedRoute,
              private info: AppService
    ) { }

  ngOnInit() {

      let typ = this.route.snapshot.paramMap.get('typ')

      this.info.getList("indicators/"+typ)
          .subscribe((indic) => {
            this.details = indic
            this.info.getList("groups/"+this.details.groupId)
                .subscribe((client) =>  this.name = client)
          })
  }

}

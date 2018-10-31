import { Component, OnInit } from '@angular/core';
import { AppService } from '/src/app/app.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private info: AppService
    ) { }

  ngOnInit() {

      let id = this.route.snapshot.paramMap.get('id');
      let typ = this.route.snapshot.paramMap.get('typ');
      console.log(id, typ)
      this.info.getList("groups/"+id+"/indicators"+typ)
          .subscribe((indic) => {
            console.log(indic)
      //       this.indicateurs = indic
          })
      console.log(this.info);
  }

}

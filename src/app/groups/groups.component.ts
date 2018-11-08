import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {
  groups: any;
  object = Object.keys;

  constructor(private service: AppService) { }

  ngOnInit() {
    this.service.getList("groups")
        .subscribe( (data) => {
          // console.log(data)
          this.GetIndicators(data)
        }
    );
  }

  GetIndicators(response){
      this.groups = response;

      for ( let client of response ) {
        let search = "groups/"+client.id+"/indicators";
        let x = client.id-1;
        this.service.getList(search)
          .subscribe(
            (info) => {
              let calcul = this.getSum(info)
              console.log(calcul);

              this.groups[x].total = calcul.length
              this.groups[x].sum = calcul.global
              this.groups[x].allsuccess = calcul.success
              this.groups[x].sumsuccess = calcul.sumsuccess
              this.groups[x].allwarning = calcul.warning
              this.groups[x].sumwarning = calcul.sumwarning
              this.groups[x].alldanger = calcul.danger
              this.groups[x].sumdanger = calcul.sumdanger
          })

      }
  }

  getSum( obj ) {
    let success = 0;
    let forcedsuccess = 0;
    let warning = 0;
    let forcedwarning = 0;
    let danger = 0;
    let forcedanger = 0;
    let sum = 0;

    for( let indicators of obj ) {
      if(!indicators.forced){
          switch (indicators.status) {
            case "success":
              success++;
              break;
            case "warning":
              warning++;
              break;
            case "danger":
              danger++;
              break;
          }
          sum++
      } else {
        switch (indicators.status) {
          case "success":
            forcedsuccess++;
            break;
          case "warning":
            forcedwarning++;
            break;
          case "danger":
            forcedanger++;
            break;
        }
      }
    }

    return {
      "success": success,
      "sumsuccess": success+forcedsuccess,
      "warning": warning,
      "sumwarning": warning+forcedwarning,
      "danger": danger,
      "sumdanger": danger+forcedanger,
      "global": sum,
      "length": obj.length
    }
  }

  getPercent(portion, sum) {
    let calcul = portion/sum * 100;
    return calcul+"%"
  }

}

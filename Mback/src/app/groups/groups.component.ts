import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {
  groups: any;

  constructor(private service: AppService) { }

  ngOnInit() {
    this.service.getList("groups")
    .subscribe((data) => this.groups = data
    );
    // this.groups.forEach()
    // this.service.getList("groups/"+x+"/indicators")
  }

}

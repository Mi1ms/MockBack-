import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { HttpClient } from "@angular/common/http";
import { InMemoryDbService } from "angular-in-memory-web-api";
//

@Injectable({
  providedIn: 'root'
})
export class MockbackService implements InMemoryDbService {
  // InMemoryDbService require to implements this method
  createDb(){
    let list = [
          {
            id: 1,
            typ: "crontask",
            last_updated: "2009",
            status: "warning",
          },
          {
            id: 2,
            typ: "backup",
            last_updated: "2004",
            status: "danger",
          },
          {
            id: 3,
            typ: "crontask",
            last_updated: "2005",
            status: "success",
          },
    ];
    return {
      list: list
    };
  }

}

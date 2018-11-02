# MockBack

**verification of status machine,list with status** 
Developement Front, with fake-backend. Use Angular v6.0 and Json-server


## Prerequisite

notions Angular 


## Install

*Json-server for the fake-Back you can see more here : https://github.com/typicode/json-server
```
        npm install -g json-server
```
        
*Create file db.json with data && Start Json Server
```
// db.json
{
  "indicators": [
    {
      "id": 1,
      "label": "Sauvegarde doc",
      "typ": "backup",
      "status": "danger",
      "groupId": 1,
      "forced": false
    }
  ], 
  "groups": [
    {
      "id": 1,
      "name": "PP"
    }
  ]
}
```

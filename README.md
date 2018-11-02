# Verification of Machine

**List of status machine** 
Developement Front, with fake-backend. Use Angular v6.0 and Json-server


## Prerequisite

*notions Angular 
*TypeScript

## Install

Json-server for the fake-Back you can see more [on official doc](https://github.com/typicode/json-server)
```
        npm install -g json-server
```
   
## For BackEnd Part   
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
*This command run Json Server : watch file db.json 
```
        json-server --watch db.json --routes node_modules/json-server/routes.json 

```
## Run Angular project 
Just Run in the directory
```
        // open automatically project on browser
        ng serve --open
```
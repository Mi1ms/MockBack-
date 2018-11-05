# Verification of Machine  :white_check_mark:

**List of status machine** 
Developement Front, with fake-backend. Use Angular v6.0 and Json-server. Make with love ~~and some tears~~


## Prerequisite

- [Angular version 6](https://angular.io/)
- [Json-Server](https://github.com/typicode/json-server)


## Install

For this project, you need to run Json Server && Angular at the same time. We use Json Server like a FakeBackEnd, allowing the Front Developer to work without the real Back.

### 1. For Angular 
You need install a module : @angular-devkit/build-angular 
	
```
	npm install --save-dev @angular-devkit/build-angular
```

### 2. For Json Server   
More informations on [official doc](https://github.com/typicode/json-server). Now we install Json Server and modify file _routes.js_.
```
	npm install -g json-server
```
_Create file db.json with data && Start Json Server_
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
_Open file node_modules/json-server/routes.json_ 
```
	//routes.json
{
  "/api/": "/",
  "/blog/:resource/:id/show": "/:resource/:id",
  "/blog/:category": "/posts?category=:category"
}

```
_And modify like this_ 
```
	//routes.json
{
  "/api/v1/:indicators": "/:indicators",
  "/api/v1/:indicators/:id": "/:indicators/:id",
  "/api/v1/:client/:id/:indicators": "/:client/:id/:indicators"
}

```


This command run Json Server : watch data of file db.json && url path from file node_modules/json-server/routes.json

```
	json-server --watch db.json --routes node_modules/json-server/routes.json 

```

## Run Angular project 
Just Run in the directory
```
        // open automatically project on browser
        ng serve --open
```

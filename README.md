# Node-Express-MySql-Angular6
Boilerplate for Nodejs+Express+MySql+Sequelize+Angular6 

### Features: ###
- NodeJs
- ExpressJs
- MySql
- SequelizeJs
- Passport Authentication with JWT token for protected routes
- Logging Support using bunyan & morgan
- Angular 6 with angualr cli
- Bootstrap 4 with scss support

### Pre-requisite ###

Node.js -- version 8.11.2 LTS

### Installation - API Server ###

### Angular Server ###

Go to angualr directory
* $ cd _protected/client

To install dependencies, please run
* $ npm install

You can configure api url which needed on angular services by editing the environment.ts & environment.prod.ts, it can under the directory
* _protected/client/src/environments

To run angular in development mode, please run
* $ ng serve
 then your angular app developemnt mode is exposed in http://localhost:4200

To take production build, please run
* $ npm run build
 then your production files are placed in "public" folder
 Note: This public folder is marked as static files in express configuration to serve files.

### Node Server ###
To install dependencies, please run
* $ npm install

Then start the node server, please run
* $ npm start 

Front End URL : http://localhost:4040/
API URL : http://localhost:4040/api/v1/auth/login



### Folder Structure: ###
_protected  // application code are reside in this folder
 - api      // contians our api server codes
   - config  // contains all the needed app constanst + configuration files for api server
   - helpers // contains helper files which we used in our server   
   - middleware // contains middleware files which we used in our server
   - v1      //  this folder maintains the needed api server codes for version v1
    - auth   // this folder contains our application authentications
     - auth.controller.js
     - auth.route.js
    - shared  // this folder contains share modules/services.
     - services
       - user.service.js
       - index.js
       index.js
    - user    // User related routes, controllers, models are grouped in a folder for easier access with module approach
      - user.controller.js
      - user.model.js
      - user.role.model.js
      - user.route.js
    - model.js  // this file handles the db connection established using sequelizejs ORM
    - route.js  //contains our application routes
   .gitignore
 - client // folder which angular files resides.
db   // contains mysql schema files
logs // application logs are stored in this folder
public // contains the build files for web
.env // contains the environmental variables
.gitignore
.jshintrc
 index.js
 package.json


 
 






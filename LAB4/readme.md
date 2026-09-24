# NPM Project
1. goto project folder {by cd}
2. type ```bpm init -y```
3. open package.json
4. update ```type:module```
5. install nodemon ```npm i nodemon -D```
6. update script in package.json
```
scripts: {
    "start": "node app.js",
    "dev": "nodemon prg7.js"
}
```

7. add node_nodule to .gitignore
8. to run use `npm run dev`

## REST API {Representational State Transfer}
- majorly backend server return only data not html file
- REST API user {get , put , patch , delete} method to communicate with client
- any browser can check only get method 
- for other method type we use third party API tester like postman , thunder client . echo api etc

## Request Type
1. GET - get all , get by id 
- /api/prodcts - print all product details 
- /api/products/101 - print the prodcut details whose id is 101

2. POST 
- /api/products - it add the product in the database 

3. PUT/PATCH 
- /api/products/201/
in echo API body{
    what we have to chnage
}

4. DELETE
- /api/products/110 - it means product number 110 deleted

5. EXPORT 
- exported function can be 
# crud-app-backend
Backend of application

1st step clone this repo by " git clone https://github.com/Akshay7623/crud-app-backend/ "

2nd cd to crud-app-backend and run command "npm install" it will install all necessary packages.

3rd now create .env file in root directory

PASTE CODE FROM BELOW AND REPLACE YOUR MONGO_URL

PORT=5000
MONGO_URL=YOUR_MONGO_URL

now run "node index.js"

we have 5 api endpoint which are below

/api/create -> Create new record in database  - name:String, mobile:String, age:Number, address:String

/api/getusers -> Read all the records from the database - no parameter required

/api/getuser - > To get a single document from database - id: Object id of the documnet

/api/updateuser - > To Update a single record in databse - id:ObjectId, name:String, mobile:String, age:Number, address:String

/api/deleteuser -> To Delete a record from the database - id:ObjectId

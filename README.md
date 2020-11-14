Before start project run "npm install" in main directory and inside client folder.

Before run backend please check mongodb port is match to you port. (inside env file)

Then, using "npm start" start the backend and using "npm start" inside client folder start the front end.

To run tests "npm test"

"register, login, logout, getProfile" for these endpoints following curls are the example.

register user -

curl --location --request POST 'localhost:5000/api/registerUser' \
--header 'Content-Type: application/json' \
--data-raw '{
    "email" : "supunrajaisnghe@gmail.com",
    "password" : "test",
    "cPassword" : "test",
    "fName" : "supun"
}'

login -

curl --location --request POST 'localhost:5000/api/login' \
--header 'Content-Type: application/json' \
--data-raw '{
    "email" : "supunrajaisnghe@gmail.com",
    "password" : "test"
}'

get profile - please make sure to change authorization token

curl --location --request GET 'localhost:5000/api/user' \
--header 'Authorization: bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmYWUzOTExNTE4NDZkMzY1NGY5MmVkZCIsImVtYWlsIjoic3VwdW5yYWphaXNuZ2hlQGdtYWlsLmNvbSIsImlhdCI6MTYwNTI1NDYwNX0.ygiC49izrIxPIJwmkKRVqdHd0wR6_bswSegh7zqqBAI' \
--data-raw ''

to logout - please make sure to change authorization token
for logout i have used attribute because we after we set jwt we can't expire jwt manually.

curl --location --request GET 'localhost:5000/api/user/logout' \
--header 'Authorization: bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmYWUzOTExNTE4NDZkMzY1NGY5MmVkZCIsImVtYWlsIjoic3VwdW5yYWphaXNuZ2hlQGdtYWlsLmNvbSIsImlhdCI6MTYwNTI1NDYwNX0.ygiC49izrIxPIJwmkKRVqdHd0wR6_bswSegh7zqqBAI'


To second task Front + Backend i used this backend and make separate routes for products.

For frontend I have Used react-bootstrap.

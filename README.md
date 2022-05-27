# NAME: Pius Ifodo
# PROJECT: Banking API server for financial applications
# PROJECT BACKEND: NodeJs, Express & MongoDB
# PROJECT FROTEND: Flutter (for Mobile - Android version)
## THE SERVER

- Server built with NodeJs & Express together with MongoDB for the Database systems. 
- All end-points/routes have been well tested accordingly.
- Swagger and SwaggerUI was used for it's documentation.
- JWT is implemented for authentications of most routes.

NOTE: The JWT authorization token expires in 15 Mins since it's a banking API, for more security measures.

- [Click here to see API documentation](https://banking-api-with-nodejs.herokuapp.com/api-docs)


## THE CLIENT

Front-end/Client to consume the APIs was implimented, using Flutter (for Mobile) and a user is able to do the following:
- Signup
- Login
- Transfer funds (with Auth Token)
- Withdraw funds (with Auth Token)
- Deposit funds (with Auth Token) and then
- See transaction histories, according to the time & date of transaction as demended

The authorization token expires in 15 mins. The user will be logged out the moment a request is attempted and is expected to login again, before making any transaction requests.

### Default Login details
- email: paxian.pi@gmail.com
- password: 123456

Below, is a link to the deployed debug APK file...

- [Click this link to download APK file for test ONLY](https://drive.google.com/file/d/13wAvlmemIdmY3tR4VUNbp-e0mi26laGq/view?usp=sharing)

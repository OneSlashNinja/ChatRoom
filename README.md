# Socket.io Chat Room

This project implemented a real-time chat application with socket.io.

![Screenshot](https://user-images.githubusercontent.com/3967446/32359950-e2d3a24e-c027-11e7-87ef-643d9e63b686.png)

## Tech Stack

Server:

* [Nodejs](https://nodejs.org/) + [Express](http://expressjs.com/)
* [Socket.io](http://socket.io/)

Client:

* [Vue.js](https://vuejs.org/)
* [Bootstrap](http://getbootstrap.com/)
* [Socket.io](http://socket.io/)

## Running the application locally

```
git clone https://github.com/OneSlashNinja/ChatRoom.git
cd ChatRoom
npm install
cd Server
node app.js
```

Then you can access the chat room here: <http://localhost:3000>

## Features

### Version 1.0

* Most basic chat room. multi user may connect to the server( use **ifconfig** or **ipconfig** to find out the server ip address ) and chat and see the real-time message

### Version 2.0

* Add simple login functionalities. User may input their nickname before entering the chat room. And user may see who is currently online at left hand side user list.

* Message now has the prefix to indicate by who it is sent

### Version 3.0 (TODO)

* Add the user-to-user chat functionalities

* Use [Redis](https://redis.io/) or [MongoDB](https://www.mongodb.com/) as database to store the history messages so that new loged in user may see what is going on

## At the end

If you like this project, please star it and let me know if you want to help or contribute. Thank you.
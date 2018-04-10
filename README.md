# Playlist Mongodb Server
Nodejs server, biedt API op een Mongodb database met recept en ingredient informatie.
Dit is dus alleen de back-end.

## Vooraf
- Nodejs installeren
- Mongodb installeren

## Gebruik
Vanaf command line:
```
npm install
npm start
```
De server runt op [localhost:3000](http://localhost:3000) en op [Heroku](https://node-mongodb-server.herokuapp.com/api/v1/users).

## API Endpoints
Aanroepen van de endpoints kan met [Postman](https://www.getpostman.com/docs/introduction).

Voorbeelden van endpoints:

### Users
```
Users ophalen
GET: http://localhost:3000/api/user/users

Ophalen op ID.
GET: http://localhost:3000/api/user/users/:id

Nieuwe user toevoegen.
POST: http://localhost:3000/api/user/createuser

User verwijderen.
DELETE: http://localhost:3000/api/user/deleteuser/5a1be38516b0c512dcda4fe0

User editten(userName veranderen).
PUT: http://localhost:3000/api/user/editUser/:id

### Playlists

Playlist ophalen van user
GET: http://localhost:3000/api/playlist/playlists/:id

Playlist plaatsen of verwijderen (geef een array mee met al je playlists)
PUT: http://localhost:3000/api/playlist/addRemovePlaylist/:id

## Gemaakt door
- Jordy Huijgens
- Joep Gruter

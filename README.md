# chat_app
- project setup
- user authentication api implemented
- messages api 
- get all users api to display in the sidebar
- added ui components for login, signup and chat feature
- using useContext hook for state management since, it's a small application or else I would have use RTQ query for api fetching and statemanagement
- added messsaging feature for single user personally
- untill now whenever a user sends a msg to another user, the receiver should refresh the page inorder to see the recently visible page. so, now I'll be implementing socket.io
- implemented realy time messaging feature
- impliment notify users who all are online and disconnected


env variables
- PORT
- DB_URI
- NODE_ENV
- JWT_SECRET
- CLIENT_URL


Example
DB_URI=mongodb://localhost:27017/chat-app
PORT=5000
JWT_SECRET=password1234
NODE_ENV=development
CLIENT_URL=http://localhost:5173


Run frontend - npm run dev
Run backend folder - npm start


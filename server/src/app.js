import { createUserWithEmailAndPassword } from "firebase/auth";
import {APP, ANALYTICS, AUTH} from "./firebase-config";

const express = require('express');
const cors = require('cors');

const port = 3000;
const app = express();
app.use(cors());


/** GET endpoint for sending back a Hello World message */
app.get('/hello', (req, res) => {
  res.type('text');
  res.send('Hello, World!');
});

// Tells our app to listen to the given port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

app.post('/api/auth', (req, res) => {
  const auth = AUTH;
  createUserWithEmailAndPassword(auth, req.query.email, req.query.password)
    .then((userCredential) => {
      const user = userCredential.user;
      // would put in a function to retrieve users data on success
      res.status(200).send("Successful account creation");
    })
    .catch((error) => {
      res.status(400).send("Invalid email provided");
    });
});

app.post('/api/login', (req, res) => {

});
const adminfirebase = require("firebase-admin");

// Load Firebase Service Account Key JSON
const serviceAccount = require("./serviceAccountKey.json");

adminfirebase.initializeApp({
  credential: adminfirebase.credential.cert(serviceAccount),
});

module.exports = adminfirebase;

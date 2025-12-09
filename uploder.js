import { createRequire } from "module";
import { fileURLToPath } from "url";
import { dirname } from "path";

const require = createRequire(import.meta.url);
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

var admin = require("firebase-admin");

var serviceAccount = require("./service_key.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const firestore = admin.firestore();
const path = require("path");
const fs = require("fs");
const directoryPath = path.join(__dirname, "files");

fs.readdir(directoryPath, function (err, files) {
  if (err) {
    return console.log("Unable to scan directory: " + err);
  }

  files.forEach(function (file) {
    var lastDotIndex = file.lastIndexOf(".");

    var menu = require("./files/" + file);

    if (Array.isArray(menu)) {
      menu.forEach(function (obj) {
        firestore
          .collection(file.substring(0, lastDotIndex))
          .doc(obj.itemID)
          .set(obj)
          .then(function (docRef) {
            console.log("Document written: " + obj.itemID);
          })
          .catch(function (error) {
            console.error("Error adding document: ", error);
          });
      });
    } else if (menu.Countries) {
      Object.keys(menu.Countries).forEach(function (countryName) {
        firestore
          .collection(file.substring(0, lastDotIndex))
          .doc(countryName)
          .set(menu.Countries[countryName])
          .then(function (docRef) {
            console.log("Document written: " + countryName);
          })
          .catch(function (error) {
            console.error("Error adding document: ", error);
          });
      });
    } else {
      Object.keys(menu).forEach(function (key) {
        firestore
          .collection(file.substring(0, lastDotIndex))
          .doc(key)
          .set(menu[key])
          .then(function (docRef) {
            console.log("Document written: " + key);
          })
          .catch(function (error) {
            console.error("Error adding document: ", error);
          });
      });
    }
  });
});
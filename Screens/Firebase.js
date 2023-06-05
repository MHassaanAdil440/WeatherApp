import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAx5oAAxRa4WwVqoHT_ciu_dGcf06sh0lA",
    authDomain: "weatherapp-3a18b.firebaseapp.com",
    projectId: "weatherapp-3a18b",
    storageBucket: "weatherapp-3a18b.appspot.com",
    messagingSenderId: "263421487781",
    appId: "1:263421487781:web:bb3de82e5d664e64e5bb4c",
    measurementId: "G-TQY2GEF0NM"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
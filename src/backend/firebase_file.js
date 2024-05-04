import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/database';
import {getDatabase, ref, set, child, update, remove} from 'firebase/database';


export const app = firebase.initializeApp({
    apiKey: "AIzaSyDfCW-ocnAQYOu3i_iFSjYyUZFqFU-o_7I",
    authDomain: "auto-note-28672.firebaseapp.com",
    projectId: "auto-note-28672",
    storageBucket: "auto-note-28672.appspot.com",
    messagingSenderId: "236773560714",
    appId: "1:236773560714:web:2e15b843c88e2c89217873",
    measurementId: "G-R508VNVNS4"
});

export const auth = app.auth();
export const database = getDatabase();
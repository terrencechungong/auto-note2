import { Validation } from '../Validation';
import { auth } from '../firebase_file';
import { set, ref, database } from "firebase/database"

export class User {
    constructor(firstName, lastName, username, emailAddress, phoneNumber) {
        this.first_name = firstName;
        this.last_name = lastName;
        this.username = username;
        this.email= emailAddress
        this.phone_number = phoneNumber; 
        this.wins = 0;
        this.losses = 0;
        this.mvp_count = 0;
        this.last_login = Date.now();
    }
    //move this to the class
}

export class FriendRequest {
    constructor(sender, receiver, senderFullName, recieverFullName) {
        this.sender = sender;
        this.receiver = receiver;
        this.sender_full_name = senderFullName;
        this.reciever_full_name = recieverFullName;
        this.is_active = true;
        // this.timestamp = Date.now(); // make it now
    }
}
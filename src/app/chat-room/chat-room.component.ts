import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth'; 
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs'; 
export interface Item { user: string, photo: string, message: string} 

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css']
})
export class ChatRoomComponent implements OnInit {

  chatCollection: AngularFirestoreCollection<Item>
  chats: Observable<Item[]>
  chatMessage: string

  constructor( public afAuth: AngularFireAuth, public db: AngularFirestore ) {
    this.chats = db.collection<Item>('chatRoom').valueChanges()
   }

  ngOnInit() {
    console.log(this.chats)
    setTimeout((console.log(this.chats)), 3000)
  }

  sendMessage() {
    let id:string = Date.now().toString()
    let item: Item = {
      user: this.afAuth.auth.currentUser.displayName,
      photo: this.afAuth.auth.currentUser.photoURL,
      message: this.chatMessage
    }
    this.db.collection('chatRoom').doc(id).set(item)
    this.chatMessage = ''
  }

}

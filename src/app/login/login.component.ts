import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
export interface Item { email: string, password: string }
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  email: string;
  password: string;
  private itemDoc: AngularFirestoreDocument<Item>;
  item: Observable<Item>;

  constructor(private afs: AngularFirestore) {
    //Create a reference to a document on our database
    this.itemDoc = afs.collection("users").doc("testUser");
    //Creat a variable that holds the latest values of our database document
    this.item = this.itemDoc.valueChanges();
    //Extract the data from the database doc variable
    this.item.subscribe(
      user => {
        this.email = user.email;
        this.password = user.password
      }
    )
   }

  ngOnInit() {

  }

  signIn() {
    this.afs.collection("users").doc<Item>().set({email:this.email, password:this.password});
    console.log(this.email + ", " + this.password)
  }

}
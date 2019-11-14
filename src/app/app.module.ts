import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import {RouterModule} from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component'

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

const paths: {}[] = [
  {path: "", component: HomeComponent},
  {path: "login", component: LoginComponent}
]

const firebaseConfig = {
  apiKey: "AIzaSyBdYolNw0F89MeMcSzFmG9dH7c29ghgu6g",
  authDomain: "live-bf-demo.firebaseapp.com",
  databaseURL: "https://live-bf-demo.firebaseio.com",
  projectId: "live-bf-demo",
  storageBucket: "live-bf-demo.appspot.com",
  messagingSenderId: "639158613358",
  appId: "1:639158613358:web:e524f51be5f300f9787d7f",
  measurementId: "G-DLR6ERHR6T"
};

@NgModule({
  imports:      [ 
                  BrowserModule, 
                  FormsModule, 
                  MDBBootstrapModule.forRoot(),
                  RouterModule.forRoot(paths),
                  AngularFireModule.initializeApp(firebaseConfig),
                  AngularFireDatabaseModule,
                  AngularFirestoreModule,
                  AngularFireAuthModule 
                  ],
  declarations: [ AppComponent, HelloComponent, HomeComponent, LoginComponent, NavbarComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

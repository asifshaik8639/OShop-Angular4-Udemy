import { AngularFireAuth } from 'angularfire2/auth';
import { Component, OnInit } from '@angular/core';

import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent  implements OnInit {

   user: firebase.User;

  constructor(private afauth: AngularFireAuth) {
    console.log("afauth in BsNavbarComponent called");
    afauth.authState.subscribe((x) => this.user = x);  

  }

  ngOnInit() {
   
  }

  logout() {
     console.log('log out method called');
    this.afauth.auth.signOut();
  }

  

}

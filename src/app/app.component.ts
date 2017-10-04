import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  lat = 41.9350192;
  lng = 0.2429466;
  zoom = 14;

  users: any[];
  userSelected: any = {};
  siguiendo = false;

  constructor(
    private afDB: AngularFireDatabase
  ) {
    this.afDB.list('/users').subscribe(users => {
      console.log(users);
      this.users = users;

      if ( this.siguiendo ) {
        for (const user of users) {
          if (user.$key === this.userSelected.$key) {
            this.lat = user.lat;
            this.lng = user.lng;
          }
        }
      }
    });
  }

  seguir_user(user: any) {
    this.siguiendo = true;
    this.lat = user.lat;
    this.lng = user.lng;
    this.userSelected = user;
    console.log(this.userSelected);
  }

  dejar_seguir() {
    this.siguiendo = false;
    this.userSelected = {};
  }
}

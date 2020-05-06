import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {MessagingService} from './service/messaging/messaging.service';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFireMessagingModule} from '@angular/fire/messaging';
import {AngularFireModule} from '@angular/fire';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireMessagingModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyDolcP7sZmHTteAePSrDVECoE9wYBEgHhs",
      authDomain: "redeflix-fd80d.firebaseapp.com",
      databaseURL: "https://redeflix-fd80d.firebaseio.com",
      projectId: "redeflix-fd80d",
      storageBucket: "redeflix-fd80d.appspot.com",
      messagingSenderId: "87831460251",
      appId: "1:87831460251:web:301e8e42ebbea3c9d2093e"
    }),
  ],
  providers: [MessagingService],
  bootstrap: [AppComponent]
})
export class AppModule { }

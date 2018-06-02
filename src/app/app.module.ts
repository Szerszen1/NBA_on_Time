import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { environment } from '../environments/environment';
import { Routes, Router } from '@angular/router';
import { AuthGuard } from './core/auth.guard';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AppRoutingModule } from './/app-routing.module';
import { AuthService } from './core/auth.service';
import { UserFormComponent } from './user-form/user-form.component';
import { YoutubePlayerModule } from 'ngx-youtube-player';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { YoutubePlayerComponent } from './youtube-player/youtube-player.component';
import { NewsComponent } from './news/news.component';
import { TablesComponent } from './tables/tables.component';
import { ScoresComponent } from './scores/scores.component';
import { TeamsComponent } from './teams/teams.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { LakersComponent } from './teams/lakers/lakers.component';
import { HttpService } from './http.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    UserProfileComponent,
    UserFormComponent,
    YoutubePlayerComponent,
    NewsComponent,
    TablesComponent,
    ScoresComponent,
    TeamsComponent,
    FavouritesComponent,
    LakersComponent,
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase, 'NBA-ON-TIME'), // imports firebase/app needed for everything
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
    AppRoutingModule,
    ReactiveFormsModule,
    YoutubePlayerModule,
  ],
  providers: [AuthService, HttpService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
 }



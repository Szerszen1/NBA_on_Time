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
import { LakersComponent } from './teams/lakers/lakers.component';
import { HttpService } from './http.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CelticsComponent } from './teams/celtics/celtics.component';
import { RocketsComponent } from './teams/rockets/rockets.component';
import { ClippersComponent } from './teams/clippers/clippers.component';
import { JazzComponent } from './teams/jazz/jazz.component';
import { GrizzliesComponent } from './teams/grizzlies/grizzlies.component';
import { BucksComponent } from './teams/bucks/bucks.component';
import { HawksComponent } from './teams/hawks/hawks.component';
import { KingsComponent } from './teams/kings/kings.component';
import { NuggetsComponent } from './teams/nuggets/nuggets.component';
import { MavericksComponent } from './teams/mavericks/mavericks.component';
import { BullsComponent } from './teams/bulls/bulls.component';
import { HeatComponent } from './teams/heat/heat.component';
import { ThunderComponent } from './teams/thunder/thunder.component';
import { PelicansComponent } from './teams/pelicans/pelicans.component';
import { CavaliersComponent } from './teams/cavaliers/cavaliers.component';
import { HornetsComponent } from './teams/hornets/hornets.component';
import { KnicksComponent } from './teams/knicks/knicks.component';
import { SunsComponent } from './teams/suns/suns.component';
import { TimberwolvesComponent } from './teams/timberwolves/timberwolves.component';
import { PacersComponent } from './teams/pacers/pacers.component';
import { MagicComponent } from './teams/magic/magic.component';
import { NetsComponent } from './teams/nets/nets.component';
import { WarriorsComponent } from './teams/warriors/warriors.component';
import { TrailblazersComponent } from './teams/trailblazers/trailblazers.component';
import { SpursComponent } from './teams/spurs/spurs.component';
import { PistonsComponent } from './teams/pistons/pistons.component';
import { WizardsComponent } from './teams/wizards/wizards.component';
import { RaptorsComponent } from './teams/raptors/raptors.component';
import { PhiladelphiaComponent } from './teams/philadelphia/philadelphia.component';
import { HomepageComponent } from './homepage/homepage.component';

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
    LakersComponent,
    CelticsComponent,
    RocketsComponent,
    ClippersComponent,
    JazzComponent,
    GrizzliesComponent,
    BucksComponent,
    HawksComponent,
    KingsComponent,
    NuggetsComponent,
    MavericksComponent,
    BullsComponent,
    HeatComponent,
    ThunderComponent,
    PelicansComponent,
    CavaliersComponent,
    HornetsComponent,
    KnicksComponent,
    SunsComponent,
    TimberwolvesComponent,
    PacersComponent,
    MagicComponent,
    NetsComponent,
    WarriorsComponent,
    TrailblazersComponent,
    SpursComponent,
    PistonsComponent,
    WizardsComponent,
    RaptorsComponent,
    PhiladelphiaComponent,
    HomepageComponent,
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



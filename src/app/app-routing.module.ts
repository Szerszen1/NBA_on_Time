import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AuthGuard } from './core/auth.guard';
import { UserFormComponent } from './user-form/user-form.component';
import { YoutubePlayerComponent} from './youtube-player/youtube-player.component';
import { NewsComponent } from './news/news.component';
import { TablesComponent } from './tables/tables.component';
import { ScoresComponent } from './scores/scores.component';
import { TeamsComponent } from './teams/teams.component';
import { FavouritesComponent } from './favourites/favourites.component';

const routes: Routes = [
  { path: 'user-profile', component: UserProfileComponent},
  { path: 'user-form', component: UserFormComponent},
  { path: 'youtube-player', component: YoutubePlayerComponent},
  { path: 'news', component: NewsComponent},
  { path: 'tables', component: TablesComponent},
  { path: 'scores', component: ScoresComponent},
  { path: 'teams', component: TeamsComponent},
  { path: 'favourites', component: FavouritesComponent},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],

})
export class AppRoutingModule { }

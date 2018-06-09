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
import { BucksComponent } from './teams/bucks/bucks.component';
import { BullsComponent } from './teams/bulls/bulls.component';
import { CavaliersComponent } from './teams/cavaliers/cavaliers.component';
import { CelticsComponent } from './teams/celtics/celtics.component';
import { ClippersComponent } from './teams/clippers/clippers.component';
import { GrizzliesComponent } from './teams/grizzlies/grizzlies.component';
import { HawksComponent } from './teams/hawks/hawks.component';
import { HeatComponent } from './teams/heat/heat.component';
import { HornetsComponent } from './teams/hornets/hornets.component';
import { JazzComponent } from './teams/jazz/jazz.component';
import { KingsComponent } from './teams/kings/kings.component';
import { KnicksComponent } from './teams/knicks/knicks.component';
import { LakersComponent } from './teams/lakers/lakers.component';
import { MagicComponent } from './teams/magic/magic.component';
import { MavericksComponent } from './teams/mavericks/mavericks.component';
import { NetsComponent } from './teams/nets/nets.component';
import { NuggetsComponent } from './teams/nuggets/nuggets.component';
import { PacersComponent } from './teams/pacers/pacers.component';
import { PelicansComponent } from './teams/pelicans/pelicans.component';
import { PhiladelphiaComponent } from './teams/philadelphia/philadelphia.component';
import { PistonsComponent } from './teams/pistons/pistons.component';
import { RaptorsComponent } from './teams/raptors/raptors.component';
import { RocketsComponent } from './teams/rockets/rockets.component';
import { SpursComponent } from './teams/spurs/spurs.component';
import { SunsComponent } from './teams/suns/suns.component';
import { ThunderComponent } from './teams/thunder/thunder.component';
import { TimberwolvesComponent } from './teams/timberwolves/timberwolves.component';
import { TrailblazersComponent } from './teams/trailblazers/trailblazers.component';
import { WarriorsComponent } from './teams/warriors/warriors.component';
import { WizardsComponent } from './teams/wizards/wizards.component';

const routes: Routes = [
  { path: 'user-profile', component: UserProfileComponent},
  { path: 'user-form', component: UserFormComponent},
  { path: 'youtube-player', component: YoutubePlayerComponent},
  { path: 'news', component: NewsComponent},
  { path: 'tables', component: TablesComponent},
  { path: 'scores', component: ScoresComponent},
  { path: 'teams', component: TeamsComponent},
  { path: 'favourites', component: FavouritesComponent},
  { path: 'teams/bucks', component: BucksComponent},
  { path: 'teams/bulls', component: BullsComponent},
  { path: 'teams/cavaliers', component: CavaliersComponent},
  { path: 'teams/celtics', component: CelticsComponent},
  { path: 'teams/clippers', component: ClippersComponent},
  { path: 'teams/grizzlies', component: GrizzliesComponent},
  { path: 'teams/hawks', component: HawksComponent},
  { path: 'teams/heat', component: HeatComponent},
  { path: 'teams/hornets', component: HornetsComponent},
  { path: 'teams/jazz', component: JazzComponent},
  { path: 'teams/kings', component: KingsComponent},
  { path: 'teams/knicks', component: KnicksComponent},
  { path: 'teams/lakers', component: LakersComponent},
  { path: 'teams/magic', component: MagicComponent},
  { path: 'teams/mavericks', component: MavericksComponent},
  { path: 'teams/nets', component: NetsComponent},
  { path: 'teams/nuggets', component: NuggetsComponent},
  { path: 'teams/pacers', component: PacersComponent},
  { path: 'teams/pelicans', component: PelicansComponent},
  { path: 'teams/philadelphia', component: PhiladelphiaComponent},
  { path: 'teams/pistons', component: PistonsComponent},
  { path: 'teams/raptors', component: RaptorsComponent},
  { path: 'teams/rockets', component: RocketsComponent},
  { path: 'teams/spurs', component: SpursComponent},
  { path: 'teams/suns', component: SunsComponent},
  { path: 'teams/thunder', component: ThunderComponent},
  { path: 'teams/timberwolves', component: TimberwolvesComponent},
  { path: 'teams/trailblazers', component: TrailblazersComponent},
  { path: 'teams/warriors', component: WarriorsComponent},
  { path: 'teams/wizards', component: WizardsComponent},

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],

})
export class AppRoutingModule { }

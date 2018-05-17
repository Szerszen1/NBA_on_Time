import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AuthGuard } from './core/auth.guard';
import { UserFormComponent } from './user-form/user-form.component';
import { YoutubePlayerComponent} from './youtube-player/youtube-player.component';

const routes: Routes = [
  { path: 'user-profile', component: UserProfileComponent},
  { path: 'user-form', component: UserFormComponent},
  { path: 'youtube-player', component: YoutubePlayerComponent},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],

})
export class AppRoutingModule { }

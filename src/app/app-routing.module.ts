import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RJComponent } from './rj/rj.component';
import { ShowsComponent } from './shows/shows.component';
import { ShowdetailsComponent } from './showdetails/showdetails.component';
import { TopsongsComponent } from './topsongs/topsongs.component';
import { MovietrailorComponent } from './movietrailor/movietrailor.component';
import { MemorylaneComponent } from './memorylane/memorylane.component';
import { SongplayComponent } from './songplay/songplay.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SearchComponent } from './search/search.component';
import { TermsComponent } from './terms/terms.component';
import { AboutComponent } from './about/about.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { ContactComponent } from './contact/contact.component';
import { AdvertiseComponent } from './advertise/advertise.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent },
  { path: 'rj/:slug', component: RJComponent },
  { path: 'shows-bhu', component: ShowsComponent, data: { page: 1 } },
  { path: 'shows-rou', component: ShowsComponent, data: { page: 2 } },
  { path: 'show-detail/:slug',component: ShowdetailsComponent },
//  { path: 'topsongs', component: TopsongsComponent },
  { path: 'movietrailor', component: MovietrailorComponent, data: { page: 2 } },
  { path: 'videos', component: MovietrailorComponent, data: { page: 3 } },

  { path: 'top-song', component: MemorylaneComponent, data: { page: 1 } },
  { path: 'memory-lane', component: MemorylaneComponent, data: { page: 2 } },
  { path: 'about', component: PrivacyComponent, data: { page: 1 } },
  { path: 'advertise', component: PrivacyComponent, data: { page: 2 } },
  { path: 'terms', component: PrivacyComponent, data: { page: 3 } },
  { path: 'privacy', component: PrivacyComponent, data: { page: 4 } },


  { path: 'search', component: SearchComponent },
  { path: 'songplay', component: SongplayComponent },
  { path: 'pagenotfound', component: PagenotfoundComponent },
  { path: 'search', component: SearchComponent },
  { path: 'terms', component: TermsComponent },
  { path: 'about', component: AboutComponent },
//  { path: 'privacy', component: PrivacyComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'advertise',component: AdvertiseComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

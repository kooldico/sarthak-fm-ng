import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from "ngx-spinner";
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { TermsComponent } from './terms/terms.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { OwlModule } from 'ngx-owl-carousel';
import { RJComponent } from './rj/rj.component';
import { VideoComponent } from './video/video.component';
import { VideodetailsComponent } from './videodetails/videodetails.component';
import { LivefmComponent } from './livefm/livefm.component';
import { ShowsComponent } from './shows/shows.component';
import { ShowdetailsComponent } from './showdetails/showdetails.component';
import { TopsongsComponent } from './topsongs/topsongs.component';
import { MovietrailorComponent } from './movietrailor/movietrailor.component';
import { MemorylaneComponent } from './memorylane/memorylane.component';
import { SongplayComponent } from './songplay/songplay.component';
import { SearchComponent } from './search/search.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AdvertiseComponent } from './advertise/advertise.component';
import { AllsongsComponent } from './allsongs/allsongs.component';
import { environment } from '../environments/environment';


// const appRoutes: Routes = [
//
//   { path: 'home', component: HomeComponent },
//
// ];



@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    TermsComponent,
    PrivacyComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    RJComponent,
    VideoComponent,
    VideodetailsComponent,
    LivefmComponent,
    ShowsComponent,
    ShowdetailsComponent,
    TopsongsComponent,
    MovietrailorComponent,
    MemorylaneComponent,
    SongplayComponent,
    SearchComponent,
    PagenotfoundComponent,
    AdvertiseComponent,
    AllsongsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OwlModule,
    HttpClientModule,
    NgxSpinnerModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

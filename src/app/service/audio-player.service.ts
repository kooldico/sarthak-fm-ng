import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
import * as $ from "jquery"

@Injectable({
  providedIn: 'root'
})
export class AudioPlayerService {

  public baseUrl = environment.base_url;
  audioChange: Subject<string> = new Subject<string>();
  private item:any;
  public audio:any;


  constructor(private httpClient: HttpClient,private route: ActivatedRoute,private spinner: NgxSpinnerService) {

    this.audio =  document.getElementById("mainAudio");

   }


  play(slug)
  {

    this.httpClient.get(this.baseUrl+"api/play-song?slug="+slug)
      .subscribe((data)=> {
        console.log('sttt');
        console.log(data);
        console.log('ennnnd');
        this.item = data;

        this.audioChange.next(this.item);
        $(".songplay-cont").addClass("musicfixed");
        this.audio =  document.getElementById("mainAudio");
        this.audio.setAttribute('src', this.item.song_link);
        this.audio.play();



      });


  }




  watch(): Observable<any> {
    return this.audioChange.asObservable();
  }




}

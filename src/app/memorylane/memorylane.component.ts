import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
import { AudioPlayerService} from '.././service/audio-player.service';
import * as $ from "jquery"
@Component({
  selector: 'app-memorylane',
  templateUrl: './memorylane.component.html',
  styleUrls: ['./memorylane.component.scss']
})
export class MemorylaneComponent implements OnInit {

  public baseUrl = environment.base_url;
  public type = 0;
  public songLink = '';
  public showSongs:any;
  public playSg:any;
  public playerFlag = 0;
  public audio:any;

  constructor(private httpClient: HttpClient,private route: ActivatedRoute,private spinner: NgxSpinnerService,private audioService:AudioPlayerService) {

    this.spinner.show();
    this.audio =  document.getElementById("mainAudio");

  }

  ngOnInit() {

    this.spinner.hide();

    // $(".songclick").click(function(){
    //   $(".songplay-cont").addClass("musicfixed");
    //
    // });

    this.type = this.route.snapshot.data['page'];

    this.loadAllSong(this.type);


    // this.audioService.watch().subscribe((value) => {
    //   console.log('ssss');
    //   console.log(value);
    //   console.log('eenn');
    //
    // });

  }

  loadAllSong(type)
  {
    this.httpClient.get(this.baseUrl+"api/top-song/"+type)
      .subscribe((data)=> {
        console.log(data);
        this.showSongs = data;
      });
  }


  playSong(slug)
 {
  var res =  this.audioService.play(slug);



 }

  // playSong(slug)
  // {
  //
  //   this.httpClient.get(this.baseUrl+"api/play-song?slug="+slug)
  //     .subscribe((data)=> {
  //       console.log(data);
  //
  //       this.playSg = data;
  //
  //     //  localStorage.setItem('songTitle', this.playSg.title);
  //
  //       $(".songplay-cont").addClass("musicfixed");
  //       //const audio = document.createElement('audio');
  //       //audio.src = this.playSg.song_link;
  //       //audio.play();
  //
  //       // if(this.playerFlag==0)
  //       // {
  //       //   audio.src = this.playSg.song_link;
  //       //   audio.play();
  //       //   this.playerFlag = 1;
  //       // }else{
  //       //
  //       //   audio.src = this.playSg.song_link;
  //       //   audio.load();
  //       // //  audio.play();
  //       //
  //       // }
  //
  //
  //     this.audio.setAttribute('src', this.playSg.song_link);
  //     this.audio.play();
  //
  //     });
  //
  //
  // }

}

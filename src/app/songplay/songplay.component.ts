import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
import { AudioPlayerService} from '.././service/audio-player.service';
import * as $ from 'jquery';
declare var $:any;

@Component({
  selector: 'app-songplay',
  templateUrl: './songplay.component.html',
  styleUrls: ['./songplay.component.scss']
})
export class SongplayComponent implements OnInit {

  public songTitles = '';
    public allSongLists:any;
    public image = '';
    public songDescription ='';
    public slug = '';
    public buttonSlug = '';
    public buttonSlugP = '';
    public audio:any;
    public countTimer = 0;
    public volSet = 0;

  constructor(private httpClient: HttpClient,private route: ActivatedRoute,private spinner: NgxSpinnerService,private audioService:AudioPlayerService) {
    this.audio =  document.getElementById("mainAudio");
  }

  ngOnInit() {
    // $(".musicclose").click(function(){
    //   $(".songplay-cont").removeClass("musicfixed");
    //
    // })

  //  this.songTitles = localStorage.getItem('songTitle');

  this.audioService.watch().subscribe((data)=> {

              this.allSongLists = data;
              this.songTitles = this.allSongLists.title;
              this.songDescription = this.allSongLists.description;
              this.image = this.allSongLists.fullThumbPath;
              this.buttonSlug =  this.allSongLists.next_slug;
              this.buttonSlugP =  this.allSongLists.prev_slug;
              this.slug = this.allSongLists.slug;//fm-link


            });

            setInterval(function(){

              this.audio =  document.getElementById("mainAudio");
              var currTime = this.audio.currentTime;
              var dur = this.audio.duration;

              $( "#slider-range-min" ).slider({
                range: "min",
                value: currTime,
                min: 0,
                max: dur,
                slide: function( event, ui ) {
                //console.log(ui.value/100);
                this.audio.currentTime =  120;

              }


              });


            }, 1000);





  setTimeout(function() {
    $( "#slider-range-max" ).slider({
      range: "min",
      min: 0,
      max: 100,
      value: 100,
      slide: function( event, ui ) {
      //console.log(ui.value/100);
      this.volSet = ui.value/100;
      this.audio =  document.getElementById("mainAudio");
      this.audio.volume = this.volSet;


    }
    });
  }, 1000);






  }

  close()
  {
    $(".songplay-cont").removeClass("musicfixed");
    this.audio =  document.getElementById("mainAudio");
    this.audio.pause();
  //  this.audio.volume = 0;
    //location.reload();
  }

  next(slug)
  {
    this.audioService.play(slug);
  }

  prev(slug)
  {
    this.audioService.play(slug);
  }

  pauseAudio() {
  this.audio =  document.getElementById("mainAudio");
  this.audio.pause();
  }

  pausePlay(){
    this.audio =  document.getElementById("mainAudio");
    this.audio.play();
  }





}

import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
import * as $ from "jquery";
declare var videojs: any;

@Component({
  selector: 'app-movietrailor',
  templateUrl: './movietrailor.component.html',
  styleUrls: ['./movietrailor.component.scss']
})
export class MovietrailorComponent implements OnInit {
  videoJSplayer: any;
  OwlOptions : 'any';
  OwlOptionssix;

  public baseUrl = environment.base_url;
  public showVideos:any;
  public type = 0;
  public playVid:any;


  constructor(private httpClient: HttpClient,private route: ActivatedRoute,private spinner: NgxSpinnerService,private router:Router) {
    this.spinner.show();
  }

  ngOnInit() {
    this.spinner.hide();

    // $(".topsongs-slidediv-box").click(function(){
    //   $(".modal-cont").addClass("modalshow");
    // })
    // $(".modalcross").click(function(){
    //   $(".modal-cont").removeClass("modalshow");
    // })

    // setTimeout(() => {
    //   this.videoJSplayer = videojs(document.getElementById('video_player_id3'), {}, function () {
    //     this.play();
    //   });
    //
    // }, 1000);


    this.OwlOptionssix = {
      loop: true,
      mouseDrag: true,
      touchDrag: true,
      pullDrag: false,
      dots: false,
      navSpeed: 700,
      responsive: {
        0: {
          items: 1
        },
        400: {
          items: 2
        },
        740: {
          items: 3
        },
        940: {
          items: 4
        }
      },
      nav: false
    }

    this.type = this.route.snapshot.data['page'];
    this.loadVideoPage(this.type);



  }

  // ngOnDestroy() {
  //   setTimeout(() => {
  //     this.videoJSplayer.dispose();
  //   }, 500);
  // }

  loadVideoPage(type)
  {

    this.spinner.show();

    this.httpClient.get(this.baseUrl+"api/videos/"+type)
      .subscribe((data)=> {
        console.log('start');
        console.log(data);
          console.log('end');
        this.showVideos = data;
        this.spinner.hide();
      });
  }


  videoInit() {
    this.videoJSplayer = videojs(document.getElementById('video_player_id3'), {}, function () {
      this.play();
    });
  }

  playVideo(slug)
  {
    this.spinner.show();
    this.httpClient.get(this.baseUrl+"api/play-video?slug="+slug)
      .subscribe((data)=> {
        console.log(data);
        this.spinner.hide();
        this.playVid = data;
        $(".modal-cont").addClass("modalshow");


        var video = document.querySelector('#video_player_id3');
        var player = videojs(video, {}, ()=>{});
        player.src({
          src: this.playVid.video_link,
          type: 'application/x-mpegURL'
        });


      });



  //  $(".modal-cont").addClass("modalshow");
  //  this.videoInit();
  }

  close()
  {
    $(".modal-cont").removeClass("modalshow");
    var video = document.querySelector('#video_player_id3');
    var player = videojs(video, {}, ()=>{});
    player.pause();
    //this.router.navigate(["/"]);
  }

}

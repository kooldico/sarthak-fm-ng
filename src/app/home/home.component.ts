import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";

import * as $ from "jquery";
declare var videojs: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  videoJSplayer: any;
  OwlOptions : 'any';

  public baseUrl = environment.base_url;
  public showHomes:any;
  public playVid:any;
  public showBans:any;
  public myPlayer:any;

  OwlOptionsone;
  OwlOptionstwo;
  OwlOptionsthree;
  OwlOptionsnine;
  OwlOptionsten;
  constructor(private httpClient: HttpClient,private route: ActivatedRoute,private spinner: NgxSpinnerService) {

    this.spinner.show();
    this.myPlayer = document.querySelector('#video_player_id4');



   }

  ngOnInit() {

    this.spinner.hide();

    this.OwlOptionsone = {
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

    this.OwlOptionstwo = {
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
    this.OwlOptionsthree = {
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

    this.OwlOptionsnine = {
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
          items: 1
        },
        740: {
          items: 1
        },
        940: {
          items: 1
        }
      },
      nav: false
    }

    this.OwlOptionsten = {
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






    // $(".v_modal").click(function(){
    //   $(".modal-cont").addClass("modalshow");
    // })
    // $(".modalcross").click(function(){
    //   $(".modal-cont").removeClass("modalshow");
    // })






    setTimeout(() => {
      this.videoJSplayer = videojs(document.getElementById('video_player_id'), {}, function () {
        this.play();
      });
      // this.videoJSplayer = videojs(document.getElementById('video_player_id4'), {}, function () {
      //   this.play();
      // });

    }, 1000);

    this.loadHomePage();
    this.homeBanner();

  }
  ngOnDestroy() {
    setTimeout(() => {
      this.videoJSplayer.dispose();
    }, 500);
  }

  homeBanner()
  {
    this.httpClient.get(this.baseUrl+"api/home-banner")
      .subscribe((data)=> {
        console.log(data);
        this.showBans = data;
      });
  }


  loadHomePage()
  {
    this.httpClient.get(this.baseUrl+"api/web/1")
      .subscribe((data)=> {
        console.log(data);
        this.showHomes = data;
      });
  }

  play(slug)
  {

    this.spinner.show();
    this.httpClient.get(this.baseUrl+"api/play-video?slug="+slug)
      .subscribe((data)=> {
        console.log(data);
        this.spinner.hide();
        this.playVid = data;
        $(".modal-cont").addClass("modalshow");


        this.myPlayer = document.querySelector('#video_player_id4');
        var player = videojs(this.myPlayer, {}, ()=>{});
        player.src({
          src: this.playVid.video_link,
          type: 'application/x-mpegURL'
        });


      });


  }

  close()
  {
    $(".modal-cont").removeClass("modalshow");
    //location.reload();
    this.myPlayer = document.querySelector('#video_player_id4');
    var player = videojs(this.myPlayer, {}, ()=>{});
    player.pause();
  }



}

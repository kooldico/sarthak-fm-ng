import { Component, OnInit } from '@angular/core';
//import { $ } from 'protractor';
import * as $ from "jquery";
declare var videojs: any;

@Component({
  selector: 'app-topsongs',
  templateUrl: './topsongs.component.html',
  styleUrls: ['./topsongs.component.scss']
})
export class TopsongsComponent implements OnInit {
  videoJSplayer: any;
  OwlOptions : 'any';

  OwlOptionsseven;
  constructor() { }

  ngOnInit() {

    $(".slidediv-box").click(function(){
      $(".modal-cont").addClass("modalshow");
    })
    $(".modalcross").click(function(){
      $(".modal-cont").removeClass("modalshow");
    })

    setTimeout(() => {
      this.videoJSplayer = videojs(document.getElementById('video_player_id2'), {}, function () {
        this.play();
      });
      
    }, 1000);

    this.OwlOptionsseven = {
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


  }

  ngOnDestroy() {
    setTimeout(() => {
      this.videoJSplayer.dispose();
    }, 500);
  }
  videoInit() {
    this.videoJSplayer = videojs(document.getElementById('video_player_id2'), {}, function () {
      this.play();
    });
  }

}

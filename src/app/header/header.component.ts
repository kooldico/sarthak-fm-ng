import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import {  Router } from '@angular/router';
import { AudioPlayerService} from '.././service/audio-player.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    public baseUrl = environment.base_url;
    public showJockeys:any;
    public socialLinks:any;

  constructor(private httpClient: HttpClient,public router:Router,private audioService:AudioPlayerService ) { }

  ngOnInit() {

    this.loadRjMenu();
    this.socialLink();

    $(window).scroll(function(){
      if( $(window).scrollTop() > 100 ){
        $(".header-cont").addClass("header-cont-color");
        $(".whitelogo").hide();
        $(".redlogo").show();
      }else{
        $(".header-cont").removeClass("header-cont-color");
        $(".whitelogo").show();
        $(".redlogo").hide();
      }
    })

    $(".resposnive-btn").click(function(){
      $(".resposive-menu-cont").addClass("resposive-menu-cont-fixed");

    })
    $(".cross").click(function(){
      $(".resposive-menu-cont").removeClass("resposive-menu-cont-fixed");
    })
    $(".cross_link").click(function(){
      $(".resposive-menu-cont").removeClass("resposive-menu-cont-fixed");
    })






  }

  loadRjMenu()
  {
    //

    this.httpClient.get(this.baseUrl+"api/get-all-rj")
      .subscribe((data)=> {
        console.log(data);
        this.showJockeys = data;
      });


  }

  playFm()
  {
      // $(".fmmaindiv").addClass("fmshow");
      // var audio = document.createElement('audio');
      // audio.src = 'https://sarthakfm.out.airtime.pro/sarthakfm_a';
      // audio.play();
      var slug = 'fm-link';
      this.audioService.play(slug);
  }

  socialLink()
  {
    this.httpClient.get(this.baseUrl+"api/social-link")
      .subscribe((data)=> {
        console.log(data);
        this.socialLinks = data;
      });
  }



}

import { Component, OnInit, ViewChild } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
import { AudioPlayerService} from '.././service/audio-player.service';
import * as $ from 'jquery';
declare var videojs: any;
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  OwlOptions : any;
  OwlOptionssearch;
  OwlOptionstwo;
  OwlOptionsfour;
  OwlOptionsfive;
  OwlOptionssix;

    public baseUrl = environment.base_url;
    public searchData:any;
    public getShows:any;
    public getJockeys:any;
    public getSong:any;
    public getVideo:any;
    public allData:any;

    public showFlg = 0;
    public rjFlg = 0;
    public musicFlg = 0;
    public videoFlg = 0;

  constructor(private httpClient: HttpClient,private route: ActivatedRoute,private spinner: NgxSpinnerService,private router:Router,private audioService:AudioPlayerService) {
    this.spinner.show();

    this.searchData = {value:''};
  }

  ngOnInit() {

    this.spinner.hide();

    // this.OwlOptionssearch = {
    //   loop: false,
    //   mouseDrag: true,
    //   touchDrag: true,
    //   pullDrag: false,
    //   dots: false,
    //   navSpeed: 700,
    //   responsive: {
    //     0: {
    //       items: 2
    //     },
    //     400: {
    //       items: 2
    //     },
    //     740: {
    //       items: 3
    //     },
    //     940: {
    //       items: 5
    //     }
    //   },
    //   nav: true
    // }
    //
    //
    // this.OwlOptionssix = {
    //   loop: false,
    //   mouseDrag: true,
    //   touchDrag: true,
    //   pullDrag: false,
    //   dots: false,
    //   navSpeed: 700,
    //   responsive: {
    //     0: {
    //       items: 2
    //     },
    //     400: {
    //       items: 2
    //     },
    //     740: {
    //       items: 2
    //     },
    //     940: {
    //       items: 5
    //     }
    //   },
    //   nav: true
    // }
    //
    // this.OwlOptionsfour = {
    //   loop: false,
    //   mouseDrag: true,
    //   touchDrag: true,
    //   pullDrag: false,
    //   dots: false,
    //   navSpeed: 700,
    //   responsive: {
    //     0: {
    //       items: 2
    //     },
    //     400: {
    //       items: 2
    //     },
    //     740: {
    //       items: 3
    //     },
    //     940: {
    //       items: 5
    //     }
    //   },
    //   nav: true
    // }




    $(".searchclick").click(function(){
      $(".search-bg").addClass("searchshow");
      $('body').addClass("body-scroll");
    })
    $(".search-cross").click(function(){
      $(".search-bg").removeClass("searchshow");
      $('body').removeClass("body-scroll");
    })




  }


  search(searchVal)
  {

    this.spinner.show();

    this.httpClient.get(this.baseUrl+"api/all-search/"+searchVal)
      .subscribe((data)=> {

        this.allData = data;

        this.getShows = this.allData.show;
        this.getJockeys = this.allData.rj;
        this.getSong = this.allData.song;
        this.getVideo = this.allData.video;

        if(this.getShows!=null)
        {
          this.showFlg = 1;
          this.OwlOptionstwo = {
            loop: false,
            mouseDrag: true,
            touchDrag: true,
            pullDrag: false,
            dots: false,
            navSpeed: 700,
            responsive: {
              0: {
                items: 2
              },
              400: {
                items: 2
              },
              740: {
                items: 2
              },
              940: {
                items: 4
              }
            },
            nav: true
          }

        }

        if(this.getJockeys!=null)
        {

          this.rjFlg = 1;

          this.OwlOptionsfive = {
            loop: false,
            mouseDrag: true,
            touchDrag: true,
            pullDrag: false,
            dots: false,
            navSpeed: 700,
            responsive: {
              0: {
                items: 2
              },
              400: {
                items: 2
              },
              740: {
                items: 2
              },
              940: {
                items: 5
              }
            },
            nav: true
          }


        }

        if(this.getSong!=null)
        {

          this.musicFlg = 1;

          this.OwlOptionssix = {
            loop: false,
            mouseDrag: true,
            touchDrag: true,
            pullDrag: false,
            dots: false,
            navSpeed: 700,
            responsive: {
              0: {
                items: 2
              },
              400: {
                items: 2
              },
              740: {
                items: 2
              },
              940: {
                items: 5
              }
            },
            nav: true
          }
        }


        this.spinner.hide();
      });
  }

playSg(slug)
{
  this.audioService.play(slug);
  $(".search-bg").removeClass("searchshow");
  $('body').removeClass("body-scroll");
}



}

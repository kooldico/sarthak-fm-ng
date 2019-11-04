import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
//import { $ } from 'protractor';
import * as $ from 'jquery';

@Component({
  selector: 'app-livefm',
  templateUrl: './livefm.component.html',
  styleUrls: ['./livefm.component.scss']
})
export class LivefmComponent implements OnInit {

  constructor(private httpClient: HttpClient,private route: ActivatedRoute,private spinner: NgxSpinnerService,private router:Router) { }

  ngOnInit() {

    $(".clicklive").click(function(){
      $(".clicklive").toggleClass("playdisplay");
    })

    // $(".closefm").click(function(){
    //   $(".fmmaindiv").removeClass("fmshow");
    // })

    // $(".fmclick").click(function(){
    //   $(".fmmaindiv").addClass("fmshow");
    // })



  }

  close()
  {
      $(".fmmaindiv").removeClass("fmshow");

      location.reload();

  }





}

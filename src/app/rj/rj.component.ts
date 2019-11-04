import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-rj',
  templateUrl: './rj.component.html',
  styleUrls: ['./rj.component.scss']
})
export class RJComponent implements OnInit {
  OwlOptions : 'any';
  OwlOptionsfive;

  public baseUrl = environment.base_url;
  public slug = '';
  public showData:any;
  public showOtherRj:any;
  public slideFlag = 0;

  constructor(private httpClient: HttpClient,private route: ActivatedRoute,private spinner: NgxSpinnerService) {

      this.spinner.show();

    //  this.showData = [];
    //  this.showOtherRj = [];

   }

  ngOnInit() {
    this.spinner.hide();

    this.slug = this.route.snapshot.params.slug;
    this.loadJockey(this.slug);
    this.loadOtherJockey(this.slug);



  }

  loadJockey(slug)
  {

    this.spinner.show();
    this.httpClient.get(this.baseUrl+"api/show-rj/"+slug)
      .subscribe((data)=> {
        console.log(data);
        this.showData = data;
        this.spinner.hide();
      });
  }

  loadOtherJockey(slug)
  {
    this.spinner.show();
    this.httpClient.get(this.baseUrl+"api/get-other-rj/"+slug)
      .subscribe((data)=> {
        console.log(data);
        this.showOtherRj = data;
        this.slideFlag = 1;

        this.OwlOptionsfive = {
          loop: true,
          rewind: true,
          mouseDrag: true,
          touchDrag: true,
          pullDrag: false,
          dots: false,
          navSpeed: 700,
          autoplay:true,
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
          nav: true
        }


        this.spinner.hide();
      });
  }

}

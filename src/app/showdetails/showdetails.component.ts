import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-showdetails',
  templateUrl: './showdetails.component.html',
  styleUrls: ['./showdetails.component.scss']
})
export class ShowdetailsComponent implements OnInit {
  OwlOptions : 'any';
  OwlOptionsfour;
  public slug = null;

  public baseUrl = environment.base_url;
  public showData:any;
  public showOtherData:any
  public slideFlag = 0;

  constructor(private httpClient: HttpClient,private route: ActivatedRoute,private spinner: NgxSpinnerService) {

    this.spinner.show();

  }

  ngOnInit() {
    this.spinner.hide();
    this.slug = this.route.snapshot.params.slug;

    this.getShowDetails();
    this.loadOtherShow(this.slug);



  }

  getShowDetails()
  {

    this.httpClient.get(this.baseUrl+"api/get-show/"+this.slug)
      .subscribe((data)=> {
        console.log(data);
        this.showData = data;
      });

  }

  loadOtherShow(slug)
  {

    this.httpClient.get(this.baseUrl+'api/other-show/'+slug)
    .subscribe(
      (data:any[])=>{
        console.log(data[0].title);

        this.showOtherData = data;
        this.slideFlag = 1;

        this.OwlOptionsfour = {
          loop: true,
          rewind: true,
          mouseDrag: true,
          touchDrag: true,
          pullDrag: false,
          dots: false,
          navSpeed: 300,
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
          nav: false
        }


      }
    )
  }

  changeRt(slug)
  {
    this.slug = slug;

    this.getShowDetails();
  }



}

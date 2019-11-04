import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.scss']
})
export class PrivacyComponent implements OnInit {

  public baseUrl = environment.base_url;
  public type = '';
  public cms:any;

  constructor(private httpClient: HttpClient,private route: ActivatedRoute,private spinner: NgxSpinnerService) { }

  ngOnInit() {

    this.type = this.route.snapshot.data['page'];

    this.getCms();


  }

  getCms()
  {
    this.httpClient.get(this.baseUrl+"api/get-cms/"+this.type)
      .subscribe((data)=> {
        console.log(data);
        this.cms = data;
      });
  }

}

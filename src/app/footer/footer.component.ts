import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public baseUrl = environment.base_url;
  public socialLinks:any;

  constructor(private httpClient: HttpClient,public router:Router) { }

  ngOnInit() {

    this.socialLink();
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

import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.scss']
})
export class ShowsComponent implements OnInit {

  public baseUrl = environment.base_url;
  public type = 0;
  public showData:any;

  constructor(private httpClient: HttpClient,private route: ActivatedRoute) { }

  ngOnInit() {

    this.type = this.route.snapshot.data['page'];

    this.loadShow();

  }

  loadShow()
  {

    this.httpClient.get(this.baseUrl+'/api/get-all-show/'+this.type)
    .subscribe(
      (data:any[])=>{
        console.log(data[0].title);

        this.showData = data;
      }
    )
  }

}

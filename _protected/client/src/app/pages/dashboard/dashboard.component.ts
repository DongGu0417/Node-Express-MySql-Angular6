import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(public http: HttpClient) {}


  ngOnInit() {

  }

  fireClientError() {
    // throw new Error('Client Error. Shit happens :)');
    // it is not defined, ups
    return 'it.happens';
  }

  fireServerError() {
    this.http
            .get('https://jsonplaceholder.typicode.com/1')
            .subscribe();
  }


  public ping() {
    this.http.get('http://localhost:4040/api/v1/loan/categories')
      .subscribe(
        data => console.log(data),
        err => console.log(err)
      );
  }

}

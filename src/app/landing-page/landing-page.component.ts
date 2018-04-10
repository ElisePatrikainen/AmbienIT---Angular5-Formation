import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api-service'; 


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  model: string
  loggedIn: boolean = false
  chuckFact: string
  constructor( public apiService : ApiService ) {
   }

  ngOnInit() {
    this.getFactFromService()
  }

  getFactFromService() {
    this.apiService.getChuckFact().subscribe(
      data => this.chuckFact = data.value
    )
  }

}

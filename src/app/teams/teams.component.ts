import { HttpService } from './../http.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  constructor(private httpService: HttpService) { }

  ngOnInit() {
  }

  getCos() {
    this.httpService.get().subscribe(cos => {
      console.log(cos)
    });
  }

}

import { HttpService } from './../http.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  public players: Players[];

  constructor(private httpService: HttpService) { }

  ngOnInit() {
  }

  getCos() {
    this.httpService.get().subscribe(cos => {
      this.players = cos as Players[];
      console.log(cos)
    }, error => console.error(error))
  }
  wyswietl() {
    console.log(this.players[0].ID)
  }

}

export interface Players {
  ID?: string;
  LastName?: string;
  FirstName?: string;
  JerseyNumber?: string;
  Position?: string;
  Height?: string;
  Weight?: string;
  BirthDate?: string;
  Age?: string;
  BirthCity?: string;
  BirthCountry?: string;
  IsRookie?: string;
}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Playerentry, Rosterplayers, Roster, Teamentry, TeamStending, Games, GameScore } from './models';


const _headers = new HttpHeaders();
const headers = _headers.append('Authorization', 'Basic ' + btoa('Szerszen1' + ':' + 'szerszen1'));



 @Injectable()
export class HttpService {

  constructor(private http: HttpClient) {}

  getRoster(team: string): Observable<Playerentry[]> {
    return this.http.get<Roster>(
      ' https://api.mysportsfeeds.com/v1.2/pull/nba/current/roster_players.json?fordate=20180604&team=' + team,
     {headers}).map(response => response.rosterplayers.playerentry as Playerentry[]);
  }

  getDivisionTeamStandings(nr: number): Observable<Teamentry[]> {
    return this.http.get<TeamStending>(
      ' https://api.mysportsfeeds.com/v1.2/pull/nba/current/division_team_standings.json ',
     {headers}).map(response => response.divisionteamstandings.division[nr].teamentry as Teamentry[]);
  }

  getScoreboard(date: string): Observable<GameScore[]> {
    return this.http.get<Games>(
      '  https://api.mysportsfeeds.com/v1.2/pull/nba/current/scoreboard.json?fordate=' + date,
     {headers}).map(response => response.scoreboard.gameScore as GameScore[]);
  }

}

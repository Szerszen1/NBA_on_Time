import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Authorization': 'Szerszen1:szerszen1' })
};

@Injectable()
export class HttpService {

  constructor(private http: HttpClient) {}

  get() {
    return this.http.get('https://api.mysportsfeeds.com/v1.2/pull/nba/current/cumulative_player_stats.json', httpOptions)
  }

}

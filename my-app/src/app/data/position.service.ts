import { Injectable } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { HttpClient } from "@angular/common/http";
import { Positions} from './positions';
import { Observable , of } from 'rxjs';

@Injectable()
export class PositionServiceService {
  private URL="https://stormy-earth-26721.herokuapp.com";
  
  constructor(private http: HttpClient) { }

  getPositions(): Observable<Positions[]> {
    return this.http.get<Positions[]>(`${this.URL}/positions`);
  }

  savePosition(position : Positions): Observable<any> {
    return this.http.put<any>(this.URL + "/position/" + position._id, position);
  }

  getPosition(id): Observable<Positions[]>{
    return this.http.get<Positions[]>(this.URL + "/position/" + id);
  }
}

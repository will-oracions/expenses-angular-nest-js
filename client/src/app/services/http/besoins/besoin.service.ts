import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BesoinModel } from '@Models/besoins/besoin.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BesoinService {
  private rootUrl = `${environment.api}/besoins`;

  constructor(private http: HttpClient) {}

  GetLazy(): Observable<BesoinModel[]> {
    return this.http.get<BesoinModel[]>(this.rootUrl);
  }

  GetById(id: string): Observable<BesoinModel> {
    return this.http.get<BesoinModel>(`${this.rootUrl}/${id}`);
  }

  edit(id: string, changes: Partial<BesoinModel>): Observable<BesoinModel> {
    return this.http.put<BesoinModel>(`${this.rootUrl}/${id}`, changes);
  }

  delete(): Observable<BesoinModel[]> {
    return this.http.delete<BesoinModel[]>(this.rootUrl);
  }
}

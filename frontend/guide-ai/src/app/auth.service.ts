import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiBaseUrl = environment.apiBaseUrl;

  private token: string = sessionStorage.getItem('token') || '';

  constructor(private http: HttpClient) {}

  userRegister(user: any): Observable<any> {
    return this.http.post<any>(`${this.apiBaseUrl}/influencers/register`, user);
  }

  userLogin(credentials: any): Observable<any> {
    return this.http.post<any>(
      `${this.apiBaseUrl}/influencers/login`,
      credentials
    );
  }

  logout(): Observable<any> {
    sessionStorage.removeItem('token');
    return new Observable<any>();
  }

  getInfluencer(): Observable<any> {
    return this.http.get<any>(`${this.apiBaseUrl}/influencers/get-influencer`, {
      headers: {
        Authorization: `${this.token}`,
      },
    });
  }
}

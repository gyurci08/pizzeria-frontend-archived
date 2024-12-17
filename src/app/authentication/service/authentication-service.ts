import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import {Observable, tap} from 'rxjs';
import {AuthResponse} from '../entity/auth-response';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/authenticate`, { username, password }).pipe(
      tap((response) => {
        localStorage.setItem('token', response.token);
      })
    );
  }

  logout(): void {
    const token = localStorage.getItem('token');
    this.http.post(`${this.apiUrl}/logout`, { token }).pipe(
      tap(() => {
        localStorage.removeItem('token');
      })
    );
  }


  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
}
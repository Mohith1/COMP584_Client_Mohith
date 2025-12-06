import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Login } from './login';
import { LoginRequest } from './login-request';
import { LoginResponse } from './login-response';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(loginRequest: LoginRequest): Observable<LoginResponse> {
    // Implement login logic here
    return this.http.post<LoginResponse>(environment.apiUrl + 'api/Admin', loginRequest)
    .pipe(tap(response => {
      // Handle the response, e.g., store the token
      if(response.success) {
        localStorage.setItem('authToken', response.token);
      }
      console.log('Login response:', response);
    }));  
  }
}
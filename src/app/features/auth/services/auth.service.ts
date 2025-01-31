import { Injectable } from '@angular/core';
import { LoginRequest } from '../models/login-request.model';
import { Observable } from 'rxjs';
import { LoginResponse } from '../models/login-response.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  login(request:LoginRequest):Observable<LoginResponse>{
    return this.http.post<LoginResponse>(`https://localhost:7169/api/auth/login`,{
      email:request.email,
      password:request.password
    })
  }
}

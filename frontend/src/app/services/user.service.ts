import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly APIURL = "http://localhost/desafio_sync360/api/usuario";

  constructor(private httpClient:HttpClient) { }

  create(userData: FormData){
    return this.httpClient.post(this.APIURL,userData);
  }
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../types/User.type';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly APIURL = "http://localhost/desafio_sync360/api/usuario";

  constructor(private httpClient:HttpClient) { }

  create(userData: FormData){
    return this.httpClient.post(this.APIURL,userData);
  }

  getAll(){
    return this.httpClient.get<User[]>(this.APIURL);
  }

  calcAge(birthdate: Date): number{
    const today = new Date();
    const birth = new Date(birthdate);
    let age = today.getFullYear() - birth.getFullYear();
    const mes = today.getMonth() - birth.getMonth();
    if (mes < 0 || (mes === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    return age;
  }
}

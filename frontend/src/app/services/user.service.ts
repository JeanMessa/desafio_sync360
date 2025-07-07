import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly APIURL = "http://localhost/desafio_sync360/api/usuario";

  constructor(private httpClient:HttpClient) { }

  create(userData: FormData){

    console.log('Tipo de userData:', typeof userData);
    console.log('É uma instância de FormData?', userData instanceof FormData);

    // Iterar sobre o FormData para ver o que ele contém
    console.log('Conteúdo do FormData:');

    return this.httpClient.post(this.APIURL,userData);
  }
}

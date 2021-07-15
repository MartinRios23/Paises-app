import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/paises.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  private api_url = 'https://restcountries.eu/rest/v2';

  constructor(private http:HttpClient) { }

  buscarPais(termino:string):Observable<Country[]>{

    const url = `${this.api_url}/name/${termino}`;
    return this.http.get<Country[]>(url);

  }
}

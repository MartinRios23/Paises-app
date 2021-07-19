import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/paises.interface';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PaisesService {
  private api_url = 'https://restcountries.eu/rest/v2';
  fields:string = 'name;capital;flag;alpha2Code;population'
  constructor(private http: HttpClient) {}

  /**
   * @param termino
   * @returns Array of Countrys (For country name)
   */
  buscarPais(termino: string): Observable<Country[]> {
    const url = `${this.api_url}/name/${termino}?fields=${this.fields}`;
    return this.http.get<Country[]>(url);
  }

  /**
   *
   * @param termino
   * @returns Array of countrys (For capital)
   */
  buscarCapital(termino: string): Observable<Country[]> {
    const url_capital = `${this.api_url}/capital/${termino}?fields=${this.fields}`;
    return this.http.get<Country[]>(url_capital);
  }

  /**
   *
   * @param id
   * @returns Country for ID
   */
  getPaisporCodigo(id: string): Observable<Country> {
    const url = `${this.api_url}/alpha/${id}`;
    return this.http.get<Country>(url);
  }

  /**
   *
   * @param region
   * @returns Array of countrys for Region
   */
  buscarPorRegion(region: string): Observable<Country[]> {
    const url = `${this.api_url}/region/${region}?fields=${this.fields}`;
    return this.http.get<Country[]>(url);
  }
}

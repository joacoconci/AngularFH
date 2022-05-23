import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Country } from '../interfaces/pais.interface';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
export class PaisService {
  private appiUrl: string = 'https://restcountries.com/v3.1';

get httpParams(){
  return  new  HttpParams()
  .set('fields','name,capital,cca3,flags,population');
}


  constructor(private http: HttpClient) {}
  buscarPais(termino: String): Observable<Country[]> {
    const url = `${this.appiUrl}/name/${termino} `;
    return this.http.get<Country[]>(url);
  }
  buscarCapital(termino:string):Observable<Country[]>{
    const url= `${this.appiUrl}/capital/${termino}`;
    return this.http.get<Country[]>(url)
  }
  getPaisPorAlpha(id :string):Observable<Country>{
    const url= `${this.appiUrl}/alpha/${id}`;
    return this.http.get<Country>(url)
  }

  getRegion(region:string):Observable<Country[]>{
   
    const url=`${this.appiUrl}/region/${region}`;
return this.http.get<Country[]>(url,{params:this.httpParams}).pipe(
  tap(console.log)
)
}
  }

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Heroe } from '../pages/interfaces/heroes.interface';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

private baseUrl: string = environment.baseUrl

  constructor(private http:HttpClient) { }

  getHeroes():Observable<Heroe[]>{
  return  this.http.get<Heroe[]>( `${this.baseUrl}/heroes`)
   }

   getHeroePorId(id:string):Observable<Heroe>{
    return  this.http.get<Heroe>( `${this.baseUrl}/heroes/${id}`)

   }
   //uso get para obtener el heroe
   getSugerencias(termino:string):Observable<Heroe[]>{
     return this.http.get<Heroe[]>(`${this.baseUrl}/heroes?q=${termino}&_limit=6` )
   }

   //agrego un hereo con post
    agregarHeroe(heroe:Heroe):Observable<Heroe>{
      return this.http.post<Heroe>(`${this.baseUrl}/heroes`,heroe)
    }

    //actualizo la informacion del hereo con el put
    actualizarHeroe(heroe:Heroe):Observable<Heroe>{
      return this.http.put<Heroe>(`${this.baseUrl}/heroes/${heroe.id}`,heroe)
    }


    //borro el hereo con el evento delete
    borrarHeroe(id:string):Observable<any>{
      return this.http.delete<any>(`${this.baseUrl}/heroes/${id}`)
    }


}

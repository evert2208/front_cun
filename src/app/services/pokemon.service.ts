import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, Observable, of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private baseUrl: string='https://pokeapi.co/api/v2/pokemon';

  public cargando: boolean= false;
  constructor(private http: HttpClient) { }

//obtiene los pokemones por limite
  getPokemons(limit: number): Observable<any[]> {
    if(this.cargando){
      return of([]);
    }

    this.cargando=true;
    return this.http.get<any>(`${this.baseUrl}?limit=${limit}`).pipe(
      map(response => response.results),
      mergeMap((results: any[]) =>
        forkJoin(results.map(result => this.http.get(result.url)))
      ),
      tap(()=>{
        this.cargando=false;
      })
    );
  }

  //Obtiene un pokemon por id
  getPokemon(id:number): Observable<any[]>{
    if(this.cargando){
      return of([]);
    }
    this.cargando=true;
    return this.http.get<any>(`${this.baseUrl}/${id}`).pipe(
      tap(()=>{
        this.cargando=false;
      }),
    );
  }


}

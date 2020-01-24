import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from "rxjs";
import {Pokemon} from "./Pokemon";
@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private baseUrl = 'https://pokeapi.co/api/v2';
  private pokeUrl = this.baseUrl + '/pokemon';  // URL to web api
  constructor( private http: HttpClient) {

  }
  getPokemons():Observable<any>{
    return this.http.get<Pokemon[]>(this.pokeUrl);
  }
}

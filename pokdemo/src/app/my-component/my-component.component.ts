import { Component, OnInit } from '@angular/core';
import {Pokemon} from "../Pokemon";
import {PokemonService} from "../pokemon.service";
import {Stat} from "../Stat";

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {
  title: 'PokD Anh';
  name: any;
  id: string ='';

  pokemons : Pokemon[];
  choice: Pokemon;
  searchValue: string;
  constructor( private _pokeService:PokemonService) {
  //this.name = 'Yves';
   // this.pokemons = [new  Pokemon('PICKACHIU'), new Pokemon('RAICHU'), new Pokemon('SUN'), new Pokemon('Meotwo'), new Pokemon('Moon')]
  }

  addPokemon(name:string){
    if(name.length > 0){
      this.pokemons.push(new Pokemon(this.id +1, name));
    }
  }

  ngOnInit() {
    console.log('start')
    this._pokeService.getPokemons().subscribe(
      data => {
        this.pokemons = data.results;
        console.log(data);
      }
    );
  }

  codeToExecute() {
    this._pokeService.getPokemons(this.choice).subscribe(
      data => {
       // const stats = Stat[];

      }
    )
  }
}

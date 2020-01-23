import { Component, OnInit } from '@angular/core';
import {Pokemon} from "../pokemon";

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
  constructor() {
    this.name = 'Yves';
    this.pokemons = [new  Pokemon('PICKACHIU'), new Pokemon('RAICHU'), new Pokemon('SUN'), new Pokemon('Meotwo'), new Pokemon('Moon')]
  }

  ngOnInit() {
  }

}

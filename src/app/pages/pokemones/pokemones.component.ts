import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon.service';


@Component({
  selector: 'app-pokemones',
  templateUrl: './pokemones.component.html',
  styleUrls: ['./pokemones.component.css']
})
export class PokemonesComponent implements OnInit{
  pokemons: any[]=[];
  cargando=true;
  titulo: string = '';
  constructor(private pokeService: PokemonService,
              private route: ActivatedRoute,
              private router: Router
  ){}
  ngOnInit(): void {

    //saca el id de la ruta y revisa si existe
    this.route.paramMap.subscribe(params => {
      const id = params.get('id')!;
      if (id) {
        this.titulo='Pokemon - Detalle'
        this.getPokemon(+id);
      } else {
        this.titulo='Pokemones'
       this.getPokemons(30);
      }
    });

  }

  //Obtiene un pokemon por id
getPokemon(id: number){
    this.pokeService.getPokemon(id).subscribe(resp=> {
      this.pokemons=resp;
    })
  }

  //Obtiene los pokemones por limite
  getPokemons(limit: number){
    this.pokeService.getPokemons(limit).subscribe(resp=> {
      this.pokemons=resp;

    })
  }
}

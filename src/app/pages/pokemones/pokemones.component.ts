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
  constructor(private pokeService: PokemonService,
              private route: ActivatedRoute,
              private router: Router
  ){}
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id')!;
      if (id) {
        console.log(id);
        this.getPokemon(+id);
      } else {
       this.getPokemons(30);
      }
    });

  }

getPokemon(id: number){
    this.pokeService.getPokemon(id).subscribe(resp=> {
      this.pokemons=resp;
      console.log(this.pokemons, resp)
    })
  }

  getPokemons(limit: number){
    this.pokeService.getPokemons(limit).subscribe(resp=> {
      this.pokemons=resp;

    })
  }
}

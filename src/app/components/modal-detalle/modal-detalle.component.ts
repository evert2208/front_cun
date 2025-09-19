import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon.service';

declare var bootstrap: any;

@Component({
  selector: 'app-modal-detalle',
  templateUrl: './modal-detalle.component.html',
  styleUrls: ['./modal-detalle.component.css']
})
export class ModalDetalleComponent implements OnInit{
  pokemon: any;

   constructor(private route: ActivatedRoute,
              private pokeService: PokemonService,
              private router: Router
   ){}
  ngOnInit(): void {
     this.route.paramMap.subscribe(params => {
      const id = params.get('id')!;
      this.getPokemon(+id)

      setTimeout(() => {
          this.openModal();
        });
    });
  }



  openModal() {
    const modalElement = document.getElementById('pokeModal');
    if (modalElement) {
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    }
  }

   getPokemon(id: number){
    this.pokeService.getPokemon(id).subscribe(resp=> {
      this.pokemon=resp;
      // console.log(resp)
    })
  }

   cerrarModal() {
   const modalElement = document.getElementById('pokeModal');
  if (modalElement) {
    const modal = bootstrap.Modal.getInstance(modalElement);
    modal?.hide();
  }
  this.router.navigate(['/']);
  }
}

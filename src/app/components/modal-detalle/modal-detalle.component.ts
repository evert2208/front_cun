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

    //saca el id de la ruta
     this.route.paramMap.subscribe(params => {
      const id = params.get('id')!;
      this.getPokemon(+id)

      //abre el modal tiempo despues de generar el componente y conseugir el id
      setTimeout(() => {
          this.openModal();
        });
    });
  }



  //abre el modal detalle
  openModal() {
    const modalElement = document.getElementById('pokeModal');
    if (modalElement) {
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    }
  }

  //Obtiene un pokemon por id
   getPokemon(id: number){
    this.pokeService.getPokemon(id).subscribe(resp=> {
      this.pokemon=resp;
    })
  }

  //cierra el modal detalle
   cerrarModal() {
   const modalElement = document.getElementById('pokeModal');
  if (modalElement) {
    const modal = bootstrap.Modal.getInstance(modalElement);
    modal?.hide();
  }
  this.router.navigate(['/']);
  }
}

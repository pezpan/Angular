import { Component, OnInit } from '@angular/core';
// Hacemos este import para obtener el id
import { ActivatedRoute} from '@angular/router';
import { HeroesService} from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {

  heroe:any = {};

  constructor(private activatedRoute:ActivatedRoute,
              private _heroesService:HeroesService) {
    // Vamos a coger el parametro que viene de la pagina anterior
    // Nos subscribimos al observer para obtenerlo cuando llegue
    this.activatedRoute.params.subscribe( params =>{
      // El nombre del parametro (id) sera el mismo que el que hayamos definido en app.routes
      this.heroe = this._heroesService.getHeroe(params['id']);
    })
  }

}

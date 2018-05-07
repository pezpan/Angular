import { Component, OnInit } from '@angular/core';
import {HeroesService, Heroe} from '../../services/heroes.service';
// Necesitamos importar el router para redireccionar con el id del heroe
import {Router} from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes:Heroe[] = [];

  constructor( private _heroesService:HeroesService,
                private router:Router) {  
  }

  ngOnInit() {
    this.heroes = this._heroesService.getHeroes();
  }

  verHeroe(idx:number){
    // Indicamos a donde tiene que ir cuando se ejecute esta funcion
    // Navegamos a otra pagina, lo indicamos con un array pasando el id del heroe
    this.router.navigate(['/heroe', idx]);
  }

}

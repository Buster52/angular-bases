import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroes: string[] = ['Spideran', 'Ironman', 'Hulk', 'Thor', 'Black Widow'];

  deletedHero: string = '';

  deleteHero() {
    this.deletedHero = this.heroes.shift() || '';
  }
}

import { Component } from '@angular/core';
import { PaisesService } from '../../services/paises.service';
import { Country } from '../../interfaces/paises.interface';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [],
})
export class PorCapitalComponent {
  termino: string = '';
  hayError: boolean = false;
  capitales: Country[] = [];

  /**
   * @description Recibo el arreglo de tipo Country(con capitales) y lo igualo con el arreglo creado al principio
   * para mostrarlo en pantalla
   *
   * @terms Recibe como término el contenido del input
   */
  buscar(terminoBusqueda: string) {
    this.hayError = false;
    this.termino = terminoBusqueda;

    this.paisService.buscarCapital(terminoBusqueda).subscribe(
      (capitales) => {
        this.capitales = capitales;
      },
      (err) => {
        this.hayError = true;
        this.capitales = [];
      }
    );
  }
  constructor(private paisService: PaisesService) {}
}

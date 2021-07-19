import { Component } from '@angular/core';
import { PaisesService } from '../../services/paises.service';
import { Country } from '../../interfaces/paises.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [`
    li a{
        cursor:pointer;
        color:green;
        text-decoration: none;
     }`],
})
export class PorPaisComponent {

  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];
  paisesSugeridos: Country[] = [];
  mostrarSugerencias: boolean = false;


  /**
   * @description Recibo el arreglo de tipo Country y lo igualo con el arreglo creado al principio
   * para mostrarlo en pantalla
   *
   * @terms Recibe como término el contenido del input
   */
  buscar(terminoBusqueda: string) {
    this.mostrarSugerencias = false;
    this.hayError = false;
    this.termino = terminoBusqueda;

    this.paisService.buscarPais(terminoBusqueda).subscribe(
      (paises) => {
        console.log(paises);
        this.paises = paises;
      },
      (err) => {
        this.hayError = true;
        this.paises = [];
      }
    );
  }

  sugerencias(evento: any) {
    this.hayError = false;
    this.termino = evento;
    this.mostrarSugerencias = true;
    this.paisService.buscarPais(evento)
      .subscribe(
        paises => { this.paisesSugeridos = paises.splice(0, 5); },
        (err) => { this.paisesSugeridos = [] })

  }

  buscarSugerido(termino: string) {
    this.buscar(termino);

  }

  constructor(private paisService: PaisesService) { }
}

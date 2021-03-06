import { Component } from '@angular/core';
import { Country } from '../../interfaces/paises.interface';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `
      button {
        margin-right: 5px;
      }
      .activo {
        background-color: orange;
        color: white;
      }
    `,
  ],
})
export class PorRegionComponent {
  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';
  tablaRegiones: Country[] = [];

  constructor(private paisesService: PaisesService) { }

  activarRegion(region: string) {
    if(region === this.regionActiva) {return;}
    this.regionActiva = region;
    this.tablaRegiones = [];

    this.paisesService.buscarPorRegion(region)
    .subscribe(regiones => {
      this.tablaRegiones = regiones;
    });

  }
  //La sintaxis se leeria asi: Si la region es igual a al rgion activa, aplica la primera clase. Sino, la otra
  asignarClaseCss(region: string): string {
    return (region === this.regionActiva) ? 'btn btn-primary' : 'btn btn-outline-primary'
  }

}

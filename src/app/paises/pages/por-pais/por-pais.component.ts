import { Component} from '@angular/core';
import { PaisesService } from '../../services/paises.service';
import { Country } from '../../interfaces/paises.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent{
  termino:string = ''
  hayError:boolean = false;
  paises:Country[] = [];

  /**
   * @description Recibo el arreglo de tipo Country y lo igualo con el arreglo creado al principio 
   * para mostrarlo en pantalla
   */
  buscar(){
    this.hayError = false;
    this.paisService.buscarPais(this.termino)
          .subscribe((paises) => {
            console.log(paises)
            this.paises = paises;
          }, (err) =>{
            this.hayError = true;
            this.paises = [];
          });
        }
  constructor(private paisService:PaisesService) { }
}

import { Component, Input} from '@angular/core';
import { Country } from '../../interfaces/paises.interface';

@Component({
  selector: 'app-paises-tabla',
  templateUrl: './paises-tabla.component.html',
  styles: [
  ]
})
export class PaisesTablaComponent{

  @Input() paises:Country[] = [];

  constructor() { }
}

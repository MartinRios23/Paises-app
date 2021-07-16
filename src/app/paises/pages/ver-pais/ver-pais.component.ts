import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisesService } from '../../services/paises.service';
import { Country } from '../../interfaces/paises.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [],
})
export class VerPaisComponent implements OnInit {

  pais!:Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisesService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      console.log(params.id);

      this.paisService.getPaisporCodigo(params.id).subscribe((pais) => {
        console.log(pais);
        this.pais = pais;
      });
    });
  }
}

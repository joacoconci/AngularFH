import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { switchMap, tap } from 'rxjs/operators';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [],
})
export class VerPaisComponent implements OnInit {
  
  public pais: any = {};

  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.paisService.getPaisPorAlpha(id)),tap())
      .subscribe(
        (pais: any) => {
          this.pais = pais[0]
          console.log('pais', this.pais)
        }, err => console.log(err) 
      )

    //ESTE CODIGO COMENTADO HACE LO MISMO QUE EL DE ARRIBA PERO NO ESTA DESESTRUCTURADO
    // this.activatedRoute.params.subscribe(({ id }) => {
    //   console.log(id);

    //   this.paisService.getPaisPorAlpha(id).subscribe((pais) => {
    //     console.log(pais);
    //   });
    // });
  }
}

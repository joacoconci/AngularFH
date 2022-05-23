import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, Validator, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [],
})
export class DinamicosComponent implements OnInit {
  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    favoritos: this.fb.array(
      [
        ['Metal Gear', Validators.required],
        ['Death Strandign', Validators.required],
      ],
      Validators.required
    ),
  });

nuevoFavorito:  FormControl=this.fb.control('',Validators.required);


get favoritosArr(){
  return this.miFormulario.get('favoritos') as FormArray;
}

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  campoValido(campo: string) {
    return (
      this.miFormulario.controls[campo].errors &&
      this.miFormulario.controls[campo].touched
    );
  }

agregarFavoritos(){
  if(this.nuevoFavorito.invalid){return;}
  this.favoritosArr.push(new FormControl(this.nuevoFavorito.value));

  this.nuevoFavorito.reset();
}

borrar(i:number){
 this.favoritosArr.removeAt(i);
}

  guardar() {
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }
    console.log(this.miFormulario.value);
  }
}

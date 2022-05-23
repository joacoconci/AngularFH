import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';
import { ValidarTokenGuard } from '../../guards/validar-token.guard';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [
    `
       {
        margin: 15px;
      }
    `,
  ],
})
export class DashboardComponent {
  get usuario() {
    return this.AuthService.usuario;
  }
  constructor(private router: Router, private AuthService: AuthService) {}

  logout() {
    this.router.navigateByUrl('/auth/login');

    /*llamo a la funcion del authService para
     borrar el JWT al cerrar la sesion*/
    this.AuthService.logout();
  }
}

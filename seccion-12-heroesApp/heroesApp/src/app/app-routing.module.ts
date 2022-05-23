import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { AuthModule } from './auth/auth.module';
import { AuthGuard } from './auth/guards/auth.guard';

// aca se definen las rutas
const routes: Routes = [
  {
    path: 'auth',
    // se usa children para llamar a las rutas hijas,
    //  el .then devuelve una promesa que carga el modulo
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
    
    },
  {
    path: 'heroes',
    loadChildren: () =>
      import('./heroes/heroes.module').then((m) => m.HeroesModule),
      canLoad:[AuthGuard],
      canActivate:[AuthGuard]
    },

  { path: '404', component: ErrorPageComponent },
  {
    path: '**',
    //component: ErrorPageComponent },
    redirectTo: '404',
  },
];

@NgModule({
  declarations: [],
  imports: [
    //se usa el forRoot por que son rutas principales
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

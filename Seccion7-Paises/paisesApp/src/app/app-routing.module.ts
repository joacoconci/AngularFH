import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PorPaisComponent } from './pais/pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pais/pages/por-region/por-region.component';
import { PorCapitalComponent } from './pais/pages/por-capital/por-capital.component';
import { SharedModule } from './shared/shared.module';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { VerPaisComponent } from './pais/pages/ver-pais/ver-pais.component';


//creacion de rutas linkeadas
const routes: Routes = [
  {
    path: '',
    component: PorPaisComponent,
    pathMatch: 'full',
  },
  {
    path: 'region',
    component: PorRegionComponent,
  },
  {
    path: 'capital',
    component: PorCapitalComponent,
  },
  {
    path: 'pais/:id',
    component: VerPaisComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [
      RouterModule.forRoot(routes),
      SharedModule
      
  ],
  exports: [
      RouterModule
  ],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SucursalesComponent } from './pages/sucursales/sucursales.component'
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { InicioComponent } from './pages/inicio/inicio.component';


const routes: Routes = [

  {
    path: '',
    component: InicioComponent,
    children: [
      // {  path: '', component: ProductosComponent },
      {  path: '', redirectTo: 'productos', pathMatch: 'full' },
      {  path: 'productos', component: ProductosComponent },
      {  path: 'usuarios', component: UsuariosComponent },
      {  path: 'sucursales', component: SucursalesComponent },
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }

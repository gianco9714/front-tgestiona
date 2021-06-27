import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiModule } from '../ui/ui.module';

import { SidenavComponent } from './components/sidenav/sidenav.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { SucursalesComponent } from './pages/sucursales/sucursales.component'
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { ProductosComponent } from './pages/productos/productos.component';

import { CoreRoutingModule } from './core-routing.module';
import { EditarProductoComponent } from './components/editar-producto/editar-producto.component';
import { AgregarProductoComponent } from './components/agregar-producto/agregar-producto.component';
import { EditarSucursalComponent } from './components/editar-sucursal/editar-sucursal.component';
import { AgregarSucursalComponent } from './components/agregar-sucursal/agregar-sucursal.component';
import { EditarUsuarioComponent } from './components/editar-usuario/editar-usuario.component';
import { AgregarUsuarioComponent } from './components/agregar-usuario/agregar-usuario.component';


@NgModule({
  declarations: [
    SidenavComponent,
    InicioComponent,
    SucursalesComponent,
    UsuariosComponent,
    ProductosComponent,
    AgregarProductoComponent,
    EditarProductoComponent,
    AgregarUsuarioComponent,
    EditarUsuarioComponent,
    AgregarSucursalComponent,
    EditarSucursalComponent,

  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    UiModule
  ]
})
export class CoreModule { }

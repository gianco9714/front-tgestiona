import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AgregarSucursalComponent } from '../../components/agregar-sucursal/agregar-sucursal.component';
import { EditarSucursalComponent } from '../../components/editar-sucursal/editar-sucursal.component';
import {UserService} from '../../services/user.service';
import {SubsidiaryService} from '../../services/subsidiary.service';

@Component({
  selector: 'app-sucursales',
  templateUrl: './sucursales.component.html',
  styleUrls: ['./sucursales.component.scss']
})
export class SucursalesComponent {

  displayedColumns: string[] = ['codigo', 'nombre', 'acciones'];
  sucursales = [];

  constructor( public dialog: MatDialog,
               private service: SubsidiaryService) {this.listarSucursales()}


  openDialogAgregar() {
    const dialogRef = this.dialog.open(AgregarSucursalComponent);

    dialogRef.afterClosed().subscribe(result => {
      this.listarSucursales();
    });
  }
  openDialogEditar(codigoSucursal: string) {
    localStorage.setItem('codigo', codigoSucursal);
    const dialogRef = this.dialog.open(EditarSucursalComponent);

    dialogRef.afterClosed().subscribe(result => {
      this.listarSucursales();
    });
  }
  // tslint:disable-next-line:typedef
  listarSucursales(){
    this.service.getSubsidiarysList().subscribe(response => {
      this.sucursales = response;
    });
  }
  // tslint:disable-next-line:typedef
  borrarSucursal(id: string){
    this.service.deleteSubsidiary(id).subscribe(data => {
      this.listarSucursales();
    });
  }

}

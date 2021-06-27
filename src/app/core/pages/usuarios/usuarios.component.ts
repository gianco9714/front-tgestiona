import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AgregarUsuarioComponent } from '../../components/agregar-usuario/agregar-usuario.component';
import { EditarUsuarioComponent } from '../../components/editar-usuario/editar-usuario.component';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent{



  displayedColumns: string[] = ['codigo', 'nombre', 'user', 'password', 'sucursal', 'acciones'];
  usuarios = [];

  constructor( public dialog: MatDialog,
               private service: UserService) {this.listarUsuarios(); }


  openDialogAgregar() {
    const dialogRef = this.dialog.open(AgregarUsuarioComponent);

    dialogRef.afterClosed().subscribe(result => {
      this.listarUsuarios();
    });
  }
  openDialogEditar(codigoSucursal: string) {
    localStorage.setItem('codigo', codigoSucursal);
    const dialogRef = this.dialog.open(EditarUsuarioComponent);

    dialogRef.afterClosed().subscribe(result => {
      this.listarUsuarios();
    });
  }
  // tslint:disable-next-line:typedef
  listarUsuarios(){
    this.service.getUsersList().subscribe(response => {
      this.usuarios = response;
    });
  }
  // tslint:disable-next-line:typedef
  borrarUsuarios(id: string){
    this.service.deleteUsers(id).subscribe(data => {
      this.listarUsuarios();
    });
  }


}


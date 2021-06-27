import { Component, OnInit } from '@angular/core';
import {User} from '../../model/user';
import {UserService} from '../../services/user.service';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.scss']
})
export class EditarUsuarioComponent{

  usuario: User = new User();
  codigo: string;
  nombreUsuarioInput: string;
  usuarioUsuarioInput: string;
  passwordUsuarioInput: string;
  codSucUsuarioInput: string;


  constructor(private service: UserService,
              public dialogRef: MatDialogRef<EditarUsuarioComponent>) { this.codigo = localStorage.getItem('codigo'); }


  // tslint:disable-next-line:typedef
  editarUsuario(){
    this.usuario.codSucursal = this.codSucUsuarioInput;
    this.usuario.nombre = this.nombreUsuarioInput;
    this.usuario.password = this.passwordUsuarioInput;
    this.usuario.user = this.usuarioUsuarioInput;
    this.service.updateUser(this.codigo, this.usuario).subscribe(data => {
    }, (error) => {},
      () => {this.dialogRef.close();
      });
  }
}

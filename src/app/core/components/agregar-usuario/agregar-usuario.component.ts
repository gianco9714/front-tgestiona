import { Component, OnInit } from '@angular/core';
import {Subsidiary} from '../../model/subsidiary';
import {UserService} from '../../services/user.service';
import {User} from '../../model/user';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-agregar-usuario',
  templateUrl: './agregar-usuario.component.html',
  styleUrls: ['./agregar-usuario.component.scss']
})
export class AgregarUsuarioComponent {

  usuario: User = new User();
  codigoUsuarioInput: string;
  nombreUsuarioInput: string;
  usuarioUsuarioInput: string;
  passwordUsuarioInput: string;
  codSucUsuarioInput: string;


  constructor(private service: UserService,
              public dialogRef: MatDialogRef<AgregarUsuarioComponent>) { }

  // tslint:disable-next-line:typedef
  crearUsuario(){
    this.usuario.codUsuario = this.codigoUsuarioInput;
    this.usuario.codSucursal = this.codSucUsuarioInput;
    this.usuario.nombre = this.nombreUsuarioInput;
    this.usuario.password = this.passwordUsuarioInput;
    this.usuario.user = this.usuarioUsuarioInput;
    this.service.createUser(this.usuario).subscribe(data => {

    }, (error) => {},
      () => {this.dialogRef.close();
      });
  }
}

import { Component, OnInit } from '@angular/core';
import {SubsidiaryService} from '../../services/subsidiary.service';
import {Subsidiary} from '../../model/subsidiary';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-agregar-sucursal',
  templateUrl: './agregar-sucursal.component.html',
  styleUrls: ['./agregar-sucursal.component.scss']
})
export class AgregarSucursalComponent {

  subsidiaria: Subsidiary = new Subsidiary();
  codigoSucursalInput: string;
  nombreSucursalInput: string;

  constructor(private service: SubsidiaryService,
              public dialogRef: MatDialogRef<AgregarSucursalComponent>) { }

  // tslint:disable-next-line:typedef
  crearSucursal(){
    this.subsidiaria.codSucursal = this.codigoSucursalInput;
    this.subsidiaria.nombre = this.nombreSucursalInput;
    this.service.createSubsidiary(this.subsidiaria).subscribe(data => {
    }, (error) => {},
      () => {this.dialogRef.close();
      });
  }


}

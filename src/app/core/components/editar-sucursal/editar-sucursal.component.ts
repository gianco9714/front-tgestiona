import { Component, OnInit } from '@angular/core';
import {Product} from '../../model/product';
import {ProductService} from '../../services/product.service';
import {Subsidiary} from '../../model/subsidiary';
import {SubsidiaryService} from '../../services/subsidiary.service';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-editar-sucursal',
  templateUrl: './editar-sucursal.component.html',
  styleUrls: ['./editar-sucursal.component.scss']
})
export class EditarSucursalComponent{

  subsidiaria: Subsidiary = new Subsidiary();
  codigo: string;
  nombreSucursalInput: string;

  constructor(private service: SubsidiaryService,
              public dialogRef: MatDialogRef<EditarSucursalComponent>) {this.codigo = localStorage.getItem('codigo'); }

  // tslint:disable-next-line:typedef
  editarSucursal(){
    // tslint:disable-next-line:radix
    this.subsidiaria.nombre = this.nombreSucursalInput;
    this.service.updateSubsidiary(this.codigo, this.subsidiaria).subscribe(data => {
    }, (error) => {},
    () => {this.dialogRef.close();
    });
  }
}

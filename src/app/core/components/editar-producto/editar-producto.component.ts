import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/product.service';
import {Product} from '../../model/product';
import {Router} from '@angular/router';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-editar',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.scss']
})
export class EditarProductoComponent {

  producto: Product = new Product();
  codigo: string;
  nombreProductoInput: string;
  precioProductoInput: string;

  constructor(private service: ProductService,
              public dialogRef: MatDialogRef<EditarProductoComponent>) {this.codigo = localStorage.getItem('codigo'); }

  // tslint:disable-next-line:typedef
  editarProducto(){
    // tslint:disable-next-line:radix
    this.producto.precio = parseInt(this.precioProductoInput);
    this.producto.nombre = this.nombreProductoInput;
    this.service.updateProduct(this.codigo, this.producto).subscribe(data => {
    }, (error) => {},
      () => {this.dialogRef.close();
      });
  }
}

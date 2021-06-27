import { Component, OnInit } from '@angular/core';
import {Product} from '../../model/product';
import {ProductService} from '../../services/product.service';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.scss']
})
export class AgregarProductoComponent{

  producto: Product = new Product();
  nombreProductoInput: string;
  codigoProductoInput: string;
  precioProductoInput: string;

  constructor(private service: ProductService,
              public dialogRef: MatDialogRef<AgregarProductoComponent>) { }

  // tslint:disable-next-line:typedef
  crearProducto(){
    this.producto.codProducto = this.codigoProductoInput;
    // tslint:disable-next-line:radix
    this.producto.precio = parseInt(this.precioProductoInput);
    this.producto.nombre = this.nombreProductoInput;
    this.service.createProduct(this.producto).subscribe(data => {
    }, (error) => {},
      () => {this.dialogRef.close();
    }
    );
  }

}

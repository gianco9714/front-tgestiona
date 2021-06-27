import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AgregarProductoComponent } from '../../components/agregar-producto/agregar-producto.component';
import { EditarProductoComponent } from '../../components/editar-producto/editar-producto.component';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent {



  displayedColumns: string[] = ['codigo', 'nombre', 'precio', 'acciones'];
  productos = [];

  constructor( public dialog: MatDialog,
               private service: ProductService) {this.listarProductos();}


  // tslint:disable-next-line:typedef
  openDialogAgregar() {
    const dialogRef = this.dialog.open(AgregarProductoComponent);

    dialogRef.afterClosed().subscribe(result => {
      this.listarProductos();
    });
  }
  // tslint:disable-next-line:typedef
  openDialogEditar(codigoProducto: string) {
    localStorage.setItem('codigo', codigoProducto);
    // @ts-ignore
    const dialogRef = this.dialog.open(EditarProductoComponent);

    dialogRef.afterClosed().subscribe(result => {
      this.listarProductos();
    });
  }
  // tslint:disable-next-line:typedef
  listarProductos(){
    this.service.getProductoList().subscribe(response => {
      this.productos = response;
    });
  }
  // tslint:disable-next-line:typedef
  borrarProductos(id: string){
    this.service.deleteProduct(id).subscribe(data => {
      this.listarProductos();
    });
  }

}

import { Component, Input } from '@angular/core';
import { ProductoService } from '../producto.service';
import { Producto } from './producto.model';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {
  @Input() productos: Producto[];

  producto: Producto = new Producto();

  constructor(private productoService: ProductoService) {
    this.productos = [];
  }
  guardarProducto() {
    if (this.producto.codigo) {
      this.productoService.modificarProducto(this.producto);
    } else {
      this.productoService.agregarProducto(this.producto);
    }
    this.producto = new Producto();
  }

  editarProducto(producto: Producto) {
    this.producto = { ...producto };
  }

  borrarProducto(codigo: string) {
    this.productoService.borrarProducto(codigo);
  }
}

import { Injectable } from '@angular/core';
import { Producto } from './productos/producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private productos: Producto[] = [];

  agregarProducto(producto: Producto) {
    this.productos.push(producto);
  }

  borrarProducto(codigo: string) {
    this.productos = this.productos.filter(producto => producto.codigo !== codigo);
  }

  modificarProducto(producto: Producto) {
    const index = this.productos.findIndex(p => p.codigo === producto.codigo);
    if (index !== -1) {
      this.productos[index] = producto;
    }
  }

  obtenerProductos() {
    return this.productos;
  }
}

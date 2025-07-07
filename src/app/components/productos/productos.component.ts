import { Component, OnInit, inject } from '@angular/core';
import { Producto } from '../../models/producto.model';
import { ProductosJsonService } from '../../services/productos-json.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  productos: Producto[] = [];
  private productosService = inject(ProductosJsonService);

  ngOnInit(): void {
    this.productosService.getProductos().subscribe((data) => {
      this.productos = data;
    });
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get('http://localhost:8080/productos');
  }

  addProduct(product: any) {
    return this.http.post('http://localhost:8080/productos', product);
  }

  deleteProduct(id: number) {
    return this.http.delete(`http://localhost:8080/productos/${id}`);
  }

  getProductoId(id: number) {
    return this.http.get(`http://localhost:8080/productos/${id}`);
  }

  updateProduct(id: number, product: any) {
    return this.http.put(`http://localhost:8080/productos/${id}`, product);
  }

  getCategorias() {
    return this.http.get('http://localhost:8080/categorias');
  }

  getCategoriaId(id: number) {
    return this.http.get(`http://localhost:8080/categorias/${id}`);
  }

  updateCategoria(id: number, categoria: any) {
    return this.http.put(`http://localhost:8080/categorias/${id}`, categoria);
  }

  deleteCategoria(id: number) {
    return this.http.delete(`http://localhost:8080/categorias/${id}`);
  }

  getSubcategorias() {
    return this.http.get('http://localhost:8080/subcategorias');
  }

  getSubcategoriaId(id: number) {
    return this.http.get(`http://localhost:8080/subcategorias/${id}`);
  }

  updateSubcategoria(id: number, subcategoria: any) {
    return this.http.put(`http://localhost:8080/subcategorias/${id}`, subcategoria);
  }

  deleteSubcategoria(id: number) {
    return this.http.delete(`http://localhost:8080/subcategorias/${id}`);
  }

}

import { DataSource } from '@angular/cdk/collections';

import { Product } from '../../models/product.model';
import { BehaviorSubject, Observable } from 'rxjs';

export class DataSourceProduct extends DataSource<Product> {
  data = new BehaviorSubject<Product[]>([]);
  originalData: Product[] = [];

  override connect(): Observable<Product[]> {
    return this.data;
  }

  init(products: Product[]) {
    this.originalData = products;
    this.data.next(products);
  }

  getTotal() {
    const products = this.data.getValue();
    return products
      .map((item) => item.price)
      .reduce((price, total) => price + total);
  }

  update(id: Product['id'], changes: Partial<Product>) {
    const products = this.data.getValue();
    const productIndex = products.findIndex((item) => item.id === id);
    if (productIndex !== -1) {
      products[productIndex] = {
        ...products[productIndex],
        ...changes,
      };
      this.data.next(products);
    }
  }

  find(query: string) {
    const filteredProducts = this.originalData.filter(
      (item) =>
        item.title.toLocaleLowerCase().includes(query.toLocaleLowerCase()) ||
        item.id.toString().toLocaleLowerCase().includes(query.toLocaleLowerCase()) ||
        item.price.toString().toLocaleLowerCase().includes(query.toLocaleLowerCase())

    );
    this.data.next(filteredProducts);
  }

  override disconnect() {}
}

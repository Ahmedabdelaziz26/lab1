import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { IProduct } from '../Models/iproduct';
import { ICategory } from '../Models/icategory';
import { environment } from 'src/environments/environment.development';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
export class ProductsApiService {
  constructor(private httpClint: HttpClient) { }

  getAllProds(): Observable<IProduct[]> {
    // return this.httpClint.get<IProduct[]>('http://localhost:3000/products');
    return this.httpClint.get<IProduct[]>(`${environment.BaseApiURL}/products`);
  }

  getAllCatgs(): Observable<ICategory[]> {
    // return this.httpClint.get<ICategory[]>('http://localhost:3000/categories');
    return this.httpClint.get<IProduct[]>(
      `${environment.BaseApiURL}/categories`
    );
  }

  // Category to filter
  performFilterFun(filterValue: number): Observable<IProduct[]> {
    return this.httpClint.get<IProduct[]>(
      `${environment.BaseApiURL}/?CategoryID=${filterValue}`
    );
  }

  // Price to filter
  performFilterFunPr(filterValue: number): Observable<IProduct[]> {
    return this.httpClint.get<IProduct[]>(
      `${environment.BaseApiURL}/?Price=${filterValue}`
    );
  }

  // search for price to filter
  performFilterVal(filterValue: number): Observable<IProduct[]> {
    return this.httpClint.get<IProduct[]>(
      `${environment.BaseApiURL}/?Price=${filterValue}`
    );
  }

  getPrdByID(productId: number): Observable<IProduct> {
    return this.httpClint.get<IProduct>(
      `${environment.BaseApiURL}/products/${productId}`
    );
  }
  getPrdIDSList(): Observable<number[]> {
    // return this.httpClint.get<IProduct[]>(`${environment.BaseApiURL}/products`).pipe(map(products => products.map(product => product.id)))

    // The pipe function provides a way to chain these operators together to create a data processing pipeline for your observables.
    return this.httpClint.get<IProduct[]>(`${environment.BaseApiURL}/products`)
      .pipe(map((prd) => prd.map(prd => prd.id)));
  }
}

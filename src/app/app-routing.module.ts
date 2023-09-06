import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductParentComponent } from './Components/product-parent/product-parent.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { ProductsComponent } from './Components/products/products.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { SingleProductComponent } from './Components/single-product/single-product.component';

const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Home', component: ProductParentComponent, title: 'Home Page' },
  { path: 'Products', component: ProductsComponent, title: 'Products Details' },
  { path: 'aboutus', component: AboutUsComponent, title: 'About Us page' },
  { path: 'single/:productID', component: SingleProductComponent, title: 'Single Product' },
  { path: '**', component:NotFoundComponent , title: 'Not Found Page' }, //wild card path => not found page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

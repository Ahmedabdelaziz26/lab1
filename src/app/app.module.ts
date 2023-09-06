import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { ProductsComponent } from './Components/products/products.component';
import { FooterComponent } from './Components/footer/footer.component';
import { AsidComponent } from './Components/asid/asid.component';
import { FormsModule } from '@angular/forms';
import { DiscountPipe } from './Pipes/discount.pipe';
import { ProductCardDirective } from './Directives/product-card.directive';
import { CreditCardFormatPipe } from './Pipes/credit-card-format.pipe';
import { ProductParentComponent } from './Components/product-parent/product-parent.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { SingleProductComponent } from './Components/single-product/single-product.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    FooterComponent,
    AsidComponent,
    DiscountPipe,
    ProductCardDirective,
    CreditCardFormatPipe,
    ProductParentComponent,
    AboutUsComponent,
    NotFoundComponent,
    SingleProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/Models/iproduct';
import { ProductsService } from 'src/app/Services/products.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss'],
})
export class SingleProductComponent implements OnInit {
  singleProduct?: IProduct;
  prdID: number = 0;

  productsIDSList: number[] = [];
  currentPrdIndex: number = 0;

  constructor(
    private prodService: ProductsService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private location: Location
  ) {}
  ngOnInit(): void {
    // this.prdID = this.activatedRoute.snapshot.paramMap.get('productID')
    //   ? Number(this.activatedRoute.snapshot.paramMap.get('productID'))
    //   : 0;
    // // console.log(this.prdID);

    // this.singleProduct = this.prodService.getPrdByID(this.prdID);
    // console.log(this.singleProduct);

    // to track any change on the ID in URL
    // this.activatedRoute.paramMap.subscribe((paramMap) => {
    
this.activatedRoute.paramMap.subscribe(paramMap => {
  this.prdID = paramMap.get('productID')? Number(paramMap.get('productID')): 0;
  console.log(this.prdID);

  var pro = this.prodService.getPrdByID(this.prdID);
  console.log(pro);
  if (pro) {
    this.singleProduct = pro;
  } else {
    this.location.back();   
    // this.location.go('/Home')
  }

  this.productsIDSList = this.prodService.getPrdIDSList();
  console.log(this.productsIDSList);
});
  }

  prevPage() {
    this.currentPrdIndex = this.productsIDSList.indexOf(this.prdID);
    this.router.navigate([
      '/single',
      this.productsIDSList[--this.currentPrdIndex],
    ]);
  }
  nextPage() {
    this.currentPrdIndex = this.productsIDSList.indexOf(this.prdID);
    this.router.navigate([
      '/single',
      this.productsIDSList[++this.currentPrdIndex],
    ]);
  }
}

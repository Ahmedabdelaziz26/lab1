import { Component } from '@angular/core';
import { ICategory } from 'src/app/Models/icategory';
import { IProduct } from 'src/app/Models/iproduct';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-product-parent',
  templateUrl: './product-parent.component.html',
  styleUrls: ['./product-parent.component.scss'],
})
export class ProductParentComponent {
  listFilter: string = '';
  selectedCategoryId: string = '';
  selectedCategoryIdPrice: string = '';
  // productsList?: IProduct[];
  cart: IProduct[] = [];
  // categoryList: ICategory[];
  items: number = 0;

  constructor(private prodService: ProductsService) {
    // this.productsList = [
    //   {
    //     ID: 1,
    //     Name: 'SAMSUNG Note S22 Ultra',
    //     Quantity: 3,
    //     Price: 22500,
    //     Img: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR0bgooGl7xcP8sdg07Eb8P4i2YPipKx52miBm3jqGni3H8Ib6Haq_mYDNbjXQ7Cm8oCOyqgzTeAcUdkFilihBvSUol3AplYc42SgcAovzEWHlfQ0RdatN-CQ&usqp=CAc',
    //     CategoryID: 1,
    //     CreatedDate: new Date('2023-08-12'),
    //   },
    //   {
    //     ID: 2,
    //     Name: 'SAMSUNG Note S23 Ultra',
    //     Quantity: 1,
    //     Price: 34999,
    //     Img: 'https://m.media-amazon.com/images/I/71Sa3dqTqzL._AC_UY327_FMwebp_QL65_.jpg',
    //     CategoryID: 1,
    //     CreatedDate: new Date('2021-08-05'),
    //   },
    //   {
    //     ID: 3,
    //     Name: 'Apple iPhone 12 Pro Max',
    //     Quantity: 2,
    //     Price: 20000,
    //     Img: 'data:image/jpeg;base64,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',
    //     CategoryID: 2,
    //     CreatedDate: new Date('2022-12-25'),
    //   },
    //   {
    //     ID: 4,
    //     Name: 'Apple iPhone 13 Pro',
    //     Quantity: 3,
    //     Price: 43000,
    //     Img: 'https://m.media-amazon.com/images/I/610xvgzVUDL._AC_UL600_FMwebp_QL65_.jpg',
    //     CategoryID: 2,
    //     CreatedDate: new Date('2023-02-25'),
    //   },
    //   {
    //     ID: 5,
    //     Name: 'Xiaomi Redmi Note 12',
    //     Quantity: 0,
    //     Price: 15000,
    //     Img: 'https://m.media-amazon.com/images/I/61X2GfAMHsL._AC_UY327_FMwebp_QL65_.jpg',
    //     CategoryID: 3,
    //     CreatedDate: new Date('2023-06-10'),
    //   },
    //   {
    //     ID: 6,
    //     Name: 'Xiaomi Poco X5 PRO',
    //     Quantity: 10,
    //     Price: 9000,
    //     Img: 'https://m.media-amazon.com/images/I/51qXb8txLIL._AC_UY327_FMwebp_QL65_.jpg',
    //     CategoryID: 3,
    //     CreatedDate: new Date('2023-07-01'),
    //   },
    // ];
    // this.categoryList = [
    //   { ID: 0, Name: 'All' },
    //   { ID: 1, Name: 'SAMSUNG' },
    //   { ID: 2, Name: 'Apple' },
    //   { ID: 3, Name: 'Xiaomi' },
    // ];
  }
  productsList: IProduct[] = this.prodService.getAllProds();
  categoryList: ICategory[] = this.prodService.getAllCatgs();

  // add items to cart and check if it exists it increments the quantity else it create a new row
  fun(product: IProduct) {
    console.log(product);

    const MatchProduct = this.cart.find((item) => item.id === product.id);
    // console.log(MatchProduct);

    // console.log(product.selectedQuantity);

    if (MatchProduct) {
      // if (product.selectedQuantity) {
      //   console.log('product.selectedQuantity exists');

      // }
      if (product.selectedQuantity == 0) {
        MatchProduct.Quantity += 1;
      } else {
        MatchProduct.Quantity += product.selectedQuantity ?? 1; /// ?? 1 cus it may = undefiend
      }
    } else {
      if (product.selectedQuantity == 0) {
        this.cart.push({ ...product, Quantity: 1 });
      } else {
        this.cart.push({ ...product, Quantity: product.selectedQuantity ?? 1 });
      }
      // product.Quantity = 1;
    }
    this.items = this.cart.length;
  }

  sum() {
    // var x = [...this.cart]
    var sum = 0;
    for (const item of this.cart) {
      sum += item.Price * item.Quantity;
    }
    // console.log(sum);
    return sum;
  }
  
  removeFromCart(x: IProduct) {
    console.log(x);
    
    var itemIndex = this.cart.findIndex((item) => item.id === x.id);
    console.log(this.prodService.getAllProds()[itemIndex]);
    this.cart.splice(itemIndex, 1);

      var listIndex = this.prodService
        .getAllProds()
        .findIndex((item) => item.id === x.id);

      // Increase the quantity of the product back in the productsList
      this.productsList[listIndex].Quantity += x.Quantity;
      
  }
}

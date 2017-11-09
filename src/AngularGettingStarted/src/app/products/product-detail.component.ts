import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iproduct } from './product';
import { ProductService } from './product.service';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
    pageTitle: string = 'Product Detail';
    product: Iproduct;
    errorMessage: string;

    constructor(private _route: ActivatedRoute, private _router: Router, private _productService: ProductService) { }

    ngOnInit() {
        let id = +this._route.snapshot.paramMap.get('id')
        this.pageTitle += `: ${id}`;
        this._productService.getProduct(id).subscribe(product => this.product = product, error => this.errorMessage = <any>error);


        //    {
        //    "productId": id,
        //    "productName": "Leaf Rake",
        //    "productCode": "GDN-0011",
        //    "releaseDate": "March 19, 2016",
        //    "description": "Leaf rake with 48-inch wooden handle.",
        //    "price": 19.95,
        //    "starRating": 3.2,
        //    "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
        //}
    }

    onBack(): void {
        this._router.navigate(['/products']);
    }

}

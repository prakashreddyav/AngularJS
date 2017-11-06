import { Component, OnInit } from '@angular/core';
import { Iproduct } from './product';
import { ProductService } from './product.service'

@Component({
    templateUrl: './product-list.component.html',
    styleUrls:['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    pageTitle: string = 'ProductList';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    _listFilter: string;
    errorMessage: string;

    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }
    

    constructor(private _productService: ProductService) {
    }

    filteredProducts: Iproduct[];
    products: Iproduct[];

    performFilter(filterby: string): Iproduct[] {
        filterby = filterby.toLowerCase();
        return this.products.filter((product: Iproduct) =>
            product.productName.toLowerCase().indexOf(filterby) !== -1);
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        this._productService.getProducts()
            .subscribe(products => {
                this.products = products;
                this.filteredProducts = this.products;
            },
            error => this.errorMessage=<any>error);
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Product List:' + message;
    }
}
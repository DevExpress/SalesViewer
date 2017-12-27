import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit {
    product: any;
    productId: number;
    range: Array<Date>;

    productChanged(product: any): void {
        this.product = product;
        this.productId = product.id;
    }
    rangeChanged(event: any): void {
        this.range = event.value;
    }
    constructor() { }

    ngOnInit() {
    }
}

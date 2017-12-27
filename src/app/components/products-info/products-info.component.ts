import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
    selector: 'app-products-info',
    templateUrl: './products-info.component.html',
    styleUrls: ['./products-info.component.scss']
})
export class ProductsInfoComponent implements OnInit, OnChanges {
    @Input() product: any;

    plant: string;
    projectManager: string;
    supportManager: string;

    private replaceLineEnd(input: string) {
        return input.replace(/\|/g, '<br>');
    }

    constructor() { }

    ngOnInit() {
    }

    ngOnChanges() {
        if(this.product) {
            this.plant = this.replaceLineEnd(this.product.plant);
            this.projectManager = this.replaceLineEnd(this.product.pManager);
            this.supportManager = this.replaceLineEnd(this.product.sManager);
        }
    }
}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription }   from 'rxjs/Subscription';
import * as Color from 'color';
import { ThemeService } from '../../services/theme.service';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit, OnDestroy {
    subscription: Subscription;

    product: any;
    productId: number;
    range: Array<Date>;

    shutterColor: string;

    productChanged(product: any): void {
        this.product = product;
        this.productId = product.id;
    }

    rangeChanged(event: any): void {
        this.range = event.value;
    }

    private applyThemeConstants = () => this.shutterColor = this.themeService.blendColor(
        Color(this.themeService.getThemeItem("backgroundColor")),
        Color("rgba(150, 150, 150, 0.1)") // gray-line background
    ).toString();

    constructor(private themeService: ThemeService) { }

    ngOnInit() {
        this.subscription = this.themeService.themeChanged.subscribe(this.applyThemeConstants);
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}

import { Component, OnInit, OnChanges, OnDestroy, Input } from '@angular/core';
import { Subscription }   from 'rxjs/Subscription';
import { DataService } from '../../services/data.service';
import { ThemeService } from '../../services/theme.service';

@Component({
    selector: 'app-products-chart',
    templateUrl: './products-chart.component.html',
    styleUrls: ['./products-chart.component.scss'],
    providers: [DataService]
})
export class ProductsChartComponent implements OnInit, OnChanges, OnDestroy {
    @Input() category: string;
    @Input() range: Array<Date>;
    @Input() productId: number;

    subscription: Subscription;
    dataSource: Array<any>;
    pieChartCenterColor: string;

    customizeTooltip = (pointInfo: any): any => {
        return {
            text: '<span style="font-size: 14px; color: #808080;">' + pointInfo.argument + '</span><br />'
                + '<span>$' + (pointInfo.originalValue / 1000000).toFixed(2) + 'M</span>'
        };
    }

    private applyThemeConstants = () => this.pieChartCenterColor = this.themeService.getThemeItem("primaryTitleColor");

    constructor(private dataService: DataService, private themeService: ThemeService) { }

    ngOnInit() {
        this.subscription = this.themeService.themeChanged.subscribe(this.applyThemeConstants);
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    ngOnChanges() {
        if(this.category && this.productId && this.range) {
            this.dataService.getData(this.category + 's', {
                type: 'product',
                productId: this.productId,
                startDate: this.range[0],
                endDate: this.range[1]
            }).subscribe(data => { this.dataSource = data; });
        }
    }

}

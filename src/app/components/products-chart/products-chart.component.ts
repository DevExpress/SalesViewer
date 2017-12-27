import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
    selector: 'app-products-chart',
    templateUrl: './products-chart.component.html',
    styleUrls: ['./products-chart.component.scss'],
    providers: [DataService]
})
export class ProductsChartComponent implements OnInit, OnChanges {
    @Input() category: string;
    @Input() range: Array<Date>;
    @Input() productId: number;

    dataSource: Array<any>;

    customizeTooltip = (pointInfo: any): any => {
        return {
            text: '<span style="font-size: 14px; color: #808080;">' + pointInfo.argument + '</span><br />'
                + '<span>$' + (pointInfo.originalValue / 1000000).toFixed(2) + 'M</span>'
        };
    }
    constructor(private dataService: DataService) { }

    ngOnInit() {
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

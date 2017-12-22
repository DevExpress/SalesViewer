import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DataService } from '../../services/data.service';
import { LegendService } from '../../services/legend.service';

@Component({
    selector: 'app-sales-by-range',
    templateUrl: './sales-by-range.component.html',
    styleUrls: ['./sales-by-range.component.scss'],
    providers: [DataService, LegendService]
})

export class SalesByRangeComponent implements OnInit {
    @Input() category: string;

    year: number;
    pieDataSource: Array<any>;
    barDataSource: Array<any>;

    private getServiceName(): string {
        return this.category.toLowerCase() + 's';
    }

    customizeLabel(arg: any) {
        return arg.percentText;
    }

    customizeTooltip = (barInfo: any) => {
        let color = this.legendService.getColor(this.category, barInfo.argument);
        // TODO is it better way to make tooltip?
        return { text: '<span style="font-size: 14px; color:#808080">' + barInfo.argument + '</span><br />'
            + '<span style="color: ' + color + ';">$' + (barInfo.originalValue / 1000000).toFixed(2) + 'M</span>' };
    }

    rangeChanged(event: any): void {
        let changedValue = event.value;
        let start = changedValue[0];
        let end = changedValue[1];

        this.dataService.getData(this.getServiceName(), {
            startDate: start,
            endDate: end
        }).subscribe(data => {
            this.pieDataSource = data;
            this.barDataSource = data;
            this.year = start.getFullYear();
        });
    }

    constructor(private dataService: DataService, private legendService: LegendService) { }

    ngOnInit() {
    }
}

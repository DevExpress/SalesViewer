import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';

@Component({
    selector: 'app-parameters',
    templateUrl: './parameters.component.html',
    styleUrls: ['./parameters.component.scss']
})
export class ParametersComponent implements OnInit, OnChanges {
    @Input() parameters: any;
    @Input() day: boolean;
    filteredParameters: Array<any>;

    constructor() { }

    ngOnInit() {
    }

    ngOnChanges(changes: SimpleChanges) {
        if(changes && changes.parameters && changes.parameters.currentValue) {
            let data = changes.parameters.currentValue;
            if(this.day) {
                this.filteredParameters = [
                    { name: 'Today', data: data['TodaySales'] },
                    { name: 'Yesterday', data: data['YesterdaySales'] },
                    { name: 'Last Week', data: data['LastWeekSales'] }
                ];
            } else {
                this.filteredParameters = [
                    { name: 'This Month', data: data['ThisMonthUnits'] },
                    { name: 'Last Month', data: data['LastMonthUnits'] },
                    { name: 'YTD', data: data['YtdUnits'] }
                ];
            }
        }
    }
}

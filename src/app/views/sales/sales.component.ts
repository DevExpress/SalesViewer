import { Component, OnInit } from '@angular/core';
import 'devextreme/data/odata/store';
import DataSource from 'devextreme/data/data_source';
import { DataService } from '../../services/data.service';
import { DatePipe, DecimalPipe } from '@angular/common';

@Component({
    selector: 'app-sales',
    templateUrl: './sales.component.html',
    styleUrls: ['./sales.component.scss'],
    providers: [DataService, DatePipe, DecimalPipe]
})

export class SalesComponent implements OnInit {
    dataSource: DataSource;
    private range: Array<Date>;

    constructor(private dataService: DataService, private datePipe: DatePipe, private decimalPipe: DecimalPipe) { }

    customizeTooltip = (pointInfo: any): any => {
        return { text: this.decimalPipe.transform(pointInfo.originalValue, '1.0-0') + '%' };
    }

    onRangeChanged(event: any): void {
        this.range = event.value;
        this.dataSource.load();
    }

    ngOnInit() {
        let start = new Date();
        let end = new Date();
        start.setDate(1);
        start.setMonth(0);
        end.setDate(30);
        end.setMonth(11);
        this.range = [ start, end ];
        this.dataSource = new DataSource({
            store: {
                type: 'odata',
                url: this.dataService.odataUrl,
                beforeSend: request => {
                    let format = 'yyyy-MM-dd';
                    request.params.startDate = this.datePipe.transform(this.range[0], format);
                    request.params.endDate = this.datePipe.transform(this.range[1], format);
                }
            }
        });
    }
}

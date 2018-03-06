import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription }   from 'rxjs/Subscription';
import 'devextreme/data/odata/store';
import DataSource from 'devextreme/data/data_source';
import { DataService } from '../../services/data.service';
import { DatePipe, DecimalPipe } from '@angular/common';
import { ThemeService } from '../../services/theme.service';

@Component({
    selector: 'app-sales',
    templateUrl: './sales.component.html',
    styleUrls: ['./sales.component.scss'],
    providers: [DataService, DatePipe, DecimalPipe]
})

export class SalesComponent implements OnInit, OnDestroy {
    subscription: Subscription;
    dataSource: DataSource;
    private range: Array<Date>;
    
    bulletColor: string;
    shutterColor: string;

    customizeTooltip = (pointInfo: any): any => {
        return { text: this.decimalPipe.transform(pointInfo.originalValue, '1.0-0') + '%' };
    }

    onRangeChanged(event: any): void {
        this.range = event.value;
        this.dataSource.load();
    }

    private applyThemeConstants = () => {
        this.bulletColor = this.themeService.getThemeItem("bullet", "color");
        this.shutterColor = this.themeService.getThemeItem("backgroundColor");
    }

    constructor(private dataService: DataService, private datePipe: DatePipe, private decimalPipe: DecimalPipe, private themeService: ThemeService) { }
    

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

        this.subscription = this.themeService.themeChanged.subscribe(this.applyThemeConstants);
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}

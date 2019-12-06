import { Component, OnInit, OnDestroy, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import * as Color from 'color';
import { DataService } from '../../services/data.service';
import { ThemeService } from '../../services/theme.service';

@Component({
    selector: 'app-sales-by-range',
    templateUrl: './sales-by-range.component.html',
    styleUrls: ['./sales-by-range.component.scss'],
    providers: [DataService]
})

export class SalesByRangeComponent implements OnInit, OnDestroy {
    @Input() category: string;
    subscription: Subscription;

    year: number;
    pieDataSource: Array<any>;
    barDataSource: Array<any>;

    shutterColor: string;
    pieChartCenterColor: string;

    private getServiceName(): string {
        return this.category.toLowerCase() + 's';
    }

    customizeLabel(arg: any) {
        return arg.percentText;
    }

    customizeTooltip = (barInfo: any) => {
        let color = this.themeService.getColor(this.category, barInfo.argument);
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

    private applyThemeConstants = () => {
        this.pieChartCenterColor = this.themeService.getThemeItem("primaryTitleColor");
        this.shutterColor = this.themeService.blendColor(
            Color(this.themeService.getThemeItem("backgroundColor")),
            Color("rgba(150, 150, 150, 0.1)") // gray-line background
        ).toString();
    }

    constructor(private dataService: DataService, private themeService: ThemeService) { }

    ngOnInit() {
        this.subscription = this.themeService.themeChanged.subscribe(this.applyThemeConstants);
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription }   from 'rxjs/Subscription';
import { DataService } from '../../services/data.service';
import * as worldMapData from 'devextreme/dist/js/vectormap-data/world.js';
import { ThemeService } from '../../services/theme.service';

@Component({
    selector: 'app-customers',
    templateUrl: './customers.component.html',
    styleUrls: ['./customers.component.scss'],
    providers: [DataService]
})
export class CustomersComponent implements OnInit, OnDestroy {
    subscription: Subscription;
    world: any = worldMapData.world;
    citySales: Array<any>;

    customerId: number;
    range: Array<Date>;

    productsSales: Array<any>;

    bubbleColor: string;
    shutterColor: string;

    update(): void {
        if(this.range && this.customerId) {
            this.dataService.getData('products', {
                type: 'company',
                companyId: this.customerId,
                startDate: this.range[0],
                endDate: this.range[1]
            }).subscribe(data => {
                this.productsSales = data;
            });

            this.dataService.getData('cities', {
                companyId: this.customerId,
                startDate: this.range[0],
                endDate: this.range[1]
            }).subscribe(data => {
                this.citySales = [];
                for(let i = 0; i < 10; i++) {
                    this.citySales.push({
                        coordinates: [ data[i].Coordinates[1], data[i].Coordinates[0] ],
                        attributes: { name: data[i].City, sales: data[i].Sales }
                    });
                }
            });
        }
    }

    customizeMapTooltip = (pointInfo: any): any => {
        if(pointInfo.layer.type === 'area') {
            return;
        } else  {
            return { text: '<span style="font-size: 14px; color: #808080">' + pointInfo.attribute('name') + '</span><br />'
            + '<span>$' + (pointInfo.attribute('sales') / 1000000).toFixed(2) + 'M</span>' };
        }
    }

    customizeLegendText = (pointInfo: any): any => {
        let roundedValue = Math.ceil(this.productsSales[pointInfo.seriesIndex].Sales / 10000);
        return pointInfo.seriesName + ' / $' + roundedValue / 100 + 'M';
    }

    rangeChanged(event: any): void {
        this.range = event.value;
        this.update();
    }

    customerChanged(event: any): void {
        this.customerId = event.selectedRowKeys[0];
        this.update();
    }

    private applyThemeConstants = () => {
        this.bubbleColor = this.themeService.getAccentColor();
        this.shutterColor = this.themeService.getThemeItem("backgroundColor");
    }

    constructor(private dataService: DataService, private themeService: ThemeService) { }

    ngOnInit() {
        this.subscription = this.themeService.themeChanged.subscribe(this.applyThemeConstants);
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}

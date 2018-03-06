import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ThemeService } from './services/theme.service';

import {
    DxMenuModule,
    DxRangeSelectorModule,
    DxPopupModule,
    DxChartModule,
    DxPieChartModule,
    DxVectorMapModule,
    DxDataGridModule,
    DxBulletModule,
    DxButtonModule
} from 'devextreme-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { DashboardSectorsComponent } from './views/dashboard/sectors/sectors.component';
import { DashboardProductsComponent } from './views/dashboard/products/products.component';
import { DashboardChannelsComponent } from './views/dashboard/channels/channels.component';
import { ProductsComponent } from './views/products/products.component';
import { SalesComponent } from './views/sales/sales.component';
import { CustomersComponent } from './views/customers/customers.component';
import { RangeSelectorComponent } from './components/rangeselector/rangeselector.component';
import { HelpPopupComponent } from './components/help-popup/help-popup.component';
import { SalesByRangeComponent } from './components/sales-by-range/sales-by-range.component';
import { DateSwitcherComponent } from './components/date-switcher/date-switcher.component';
import { ComparingBarsComponent } from './components/comparing-bars/comparing-bars.component';
import { ParametersComponent } from './components/parameters/parameters.component';
import { CaptionComponent } from './components/caption/caption.component';
import { CriteriaComponent } from './components/criteria/criteria.component';
import { LegendComponent } from './components/legend/legend.component';
import { DailyChannelsComponent } from './components/daily-channels/daily-channels.component';
import { CustomersGridComponent } from './components/customers-grid/customers-grid.component';
import { ProductsGridComponent } from './components/products-grid/products-grid.component';
import { ProductsChartComponent } from './components/products-chart/products-chart.component';
import { ProductsInfoComponent } from './components/products-info/products-info.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        DashboardSectorsComponent,
        DashboardProductsComponent,
        DashboardChannelsComponent,
        ProductsComponent,
        SalesComponent,
        CustomersComponent,
        RangeSelectorComponent,
        HelpPopupComponent,
        SalesByRangeComponent,
        DateSwitcherComponent,
        ComparingBarsComponent,
        ParametersComponent,
        CaptionComponent,
        CriteriaComponent,
        LegendComponent,
        DailyChannelsComponent,
        CustomersGridComponent,
        ProductsGridComponent,
        ProductsChartComponent,
        ProductsInfoComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,

        DxMenuModule,
        DxRangeSelectorModule,
        DxPopupModule,
        DxChartModule,
        DxPieChartModule,
        DxVectorMapModule,
        DxDataGridModule,
        DxBulletModule,
        DxButtonModule
    ],
    providers: [ThemeService],
    bootstrap: [AppComponent]
})
export class AppModule { }

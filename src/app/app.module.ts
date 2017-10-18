import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DxMenuModule } from 'devextreme-angular';

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
        CustomersComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,

        DxMenuModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

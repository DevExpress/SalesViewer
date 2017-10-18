import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardProductsComponent } from './views/dashboard/products/products.component';
import { DashboardSectorsComponent } from './views/dashboard/sectors/sectors.component';
import { DashboardChannelsComponent } from './views/dashboard/channels/channels.component';
import { ProductsComponent } from './views/products/products.component';
import { SalesComponent } from './views/sales/sales.component';
import { CustomersComponent } from './views/customers/customers.component';

const routes: Routes = [
    {
        path: 'dashboard',
        data: { title: 'Dashboard' },
        children: [
            {
                path: 'products',
                component: DashboardProductsComponent,
                data: { title: 'Revenue by Product' },
            },
            {
                path: 'sectors',
                component: DashboardSectorsComponent,
                data: { title: 'Revenue by Sector' }
            },
            {
                path: 'channels',
                component: DashboardChannelsComponent,
                data: { title: 'Revenue by Channels' }
            },
        ]
    },
    {
        path: 'products',
        component: ProductsComponent,
        data: { title: 'Products' }
    },
    {
        path: 'sales',
        component: SalesComponent,
        data: { title: 'Sales' }
    },
    {
        path: 'customers',
        component: CustomersComponent,
        data: { title: 'Customers' }
    },
    {
        path: '',
        redirectTo: '/dashboard/products',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

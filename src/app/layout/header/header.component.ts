import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Routes } from '@angular/router';
import { RoutesService } from '../../services/routes.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    providers: [RoutesService]
})
export class HeaderComponent implements OnInit {
    menuRoutes: Routes;

    constructor(private routesService: RoutesService) {
        this.menuRoutes = routesService.getRoutes();
    }

    ngOnInit() { }
}

import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Routes, Router } from '@angular/router';
import { RoutesService } from '../../services/routes.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    providers: [RoutesService]
})
export class HeaderComponent implements OnInit {
    menuRoutes: Routes;

    selectedChild(routeItem: any): string {
        if(!routeItem.children) {
            return;
        }
        for(let routeChildren of routeItem.children) {
            if(routeChildren.data.link === this.router.url) {
                return ': ' + routeChildren.data.title;
            }
        }
    }

    constructor(private routesService: RoutesService, private router: Router) {
        this.menuRoutes = routesService.getRoutes();
    }

    ngOnInit() { }
}

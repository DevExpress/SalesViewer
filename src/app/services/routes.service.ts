import { Injectable } from '@angular/core';
import { Routes, Router, Route } from '@angular/router';

@Injectable()
export class RoutesService {

    getRoutes(): Routes {
        function updateRoutingInfo(routes: Routes, path: string) {
            routes.forEach(route => {
                if(!route.data) { return; }
                const fullLink = [path, route.path].join('/');
                route.data.link = fullLink;
                if(route.children) {
                    updateRoutingInfo(route.children, fullLink);
                }
            });
        }

        updateRoutingInfo(this.router.config, '');

        return this.router.config;
    }

    constructor(private router: Router) { }
}

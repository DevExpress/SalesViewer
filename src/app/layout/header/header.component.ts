import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Routes, Router } from '@angular/router';
import { RoutesService } from '../../services/routes.service';
import { ThemeService } from '../../services/theme.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    providers: [RoutesService]
})
export class HeaderComponent implements OnInit {
    menuRoutes: Routes;
    currentTheme = window.localStorage["salesViewerTheme"] || "carmine";
    menuThemes = [{
        text: "",
        icon: "assets/images/color-scheme-" + this.currentTheme + ".svg",
        items: [
            { text: "Carmine", value: "carmine", icon: "assets/images/color-scheme-carmine.svg" },
            { text: "Dark Moon", value: "darkmoon", icon: "assets/images/color-scheme-darkmoon.svg" },
            { text: "Green Mist", value: "greenmist", icon: "assets/images/color-scheme-greenmist.svg" },
            { text: "Dark Violet", value: "darkviolet", icon: "assets/images/color-scheme-darkviolet.svg" },
            { text: "Soft Blue", value: "softblue", icon: "assets/images/color-scheme-softblue.svg" }
        ]
    }];

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

    changeTheme(e: any) {
        if(e.itemData.value) {
            this.currentTheme = e.itemData.value;
            this.menuThemes[0].icon = e.itemData.icon;
            this.themeService.applyTheme(this.currentTheme);
        }
    }

    constructor(private routesService: RoutesService, private router: Router, private themeService: ThemeService) {
        this.menuRoutes = routesService.getRoutes();
    }

    ngOnInit() { }
}

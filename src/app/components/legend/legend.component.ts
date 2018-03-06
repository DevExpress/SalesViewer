import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ThemeService } from '../../services/theme.service';

@Component({
    selector: 'app-legend',
    templateUrl: './legend.component.html',
    styleUrls: ['./legend.component.scss']
})
export class LegendComponent implements OnInit, OnDestroy {
    subscription: Subscription;
    items: Array<any>;

    private applyThemeConstants = () => this.items = this.themeService.getLegendItems('channel');

    constructor(private themeService: ThemeService) { }

    ngOnInit() {
        this.subscription = this.themeService.themeChanged.subscribe(this.applyThemeConstants);
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}

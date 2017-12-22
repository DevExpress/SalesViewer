import { Component, OnInit } from '@angular/core';
import { LegendService } from '../../services/legend.service';

@Component({
    selector: 'app-legend',
    templateUrl: './legend.component.html',
    styleUrls: ['./legend.component.scss'],
    providers: [LegendService]
})
export class LegendComponent implements OnInit {
    items: Array<any>;

    constructor(private legendService: LegendService) { }

    ngOnInit() {
        this.items = this.legendService.getLegendItems('channel');
    }

}

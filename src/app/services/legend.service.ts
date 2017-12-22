import { Injectable } from '@angular/core';
import { getPalette } from 'devextreme/viz/palette';

@Injectable()
export class LegendService {
    private criteria(category: string): Array<string> {
        let categoryItems: any = {
            'sector': ['Banking', 'Energy', 'Health', 'Insurance', 'Manufacturing', 'Telecom'],
            'product': ['Eco Max', 'Eco Supreme', 'EnviroCare', 'EnviroCare Max', 'SolarMax', 'SolarOne'],
            'channel': ['Consultants', 'Direct', 'Resellers', 'Retail', 'VARs']
        };
        return categoryItems[category.toLowerCase()];
    }

    private getCriteriaIndex(category: string, criteria: string) {
        return this.criteria(category).indexOf(criteria);
    }

    getColor(category: string, criteria: string) {
        const palette: Array<string> = getPalette('Carmine')['simpleSet'];
        return palette[this.getCriteriaIndex(category, criteria)];
    }

    getLegendItems(category: string): Array<any> {
        return this.criteria(category).map(function(criteria) {
            return {
                color: this.getColor(category, criteria),
                name: criteria
            };
        }, this);
    }

    constructor() { }

}

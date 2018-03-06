import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { getPalette } from 'devextreme/viz/palette';
import { currentTheme, getTheme, refreshTheme } from 'devextreme/viz/themes';
import * as Color from 'color';

@Injectable()
export class ThemeService {
    themeChanged = new BehaviorSubject(null);

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
        const palette: Array<string> = getPalette(this.getThemeItem('defaultPalette'))['simpleSet'];
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

    getThemeItem(...keys: Array<string>): any {
        const theme = getTheme(currentTheme());
        let item = theme;
        for(let key in keys)
            item = item[keys[key]];
        return item;
    }

    blendColor(backgroundColor: Color, overColor: Color): Color {
        return Color.rgb(
            Math.floor(backgroundColor.red() + (overColor.red() - backgroundColor.red()) * overColor.alpha()),
            Math.floor(backgroundColor.green() + (overColor.green() - backgroundColor.green()) * overColor.alpha()),
            Math.floor(backgroundColor.blue() + (overColor.blue() - backgroundColor.blue()) * overColor.alpha())
        );
    }

    applyTheme(theme?: string) {
        let themeMarker = "dx.theme.",
            storageKey = "salesViewerTheme";
        theme = theme || window.localStorage[storageKey] || "carmine";
        
        
        for(let index in document.styleSheets) {
            let styleSheet = document.styleSheets[index],
                href = styleSheet.href;
            if(href) {
                let themeMarkerPosition = href.indexOf(themeMarker);
                if(themeMarkerPosition >= 0) {
                    let startPosition = themeMarkerPosition + themeMarker.length,
                        endPosition = href.indexOf(".", startPosition),
                        fileNamePart = href.substring(startPosition, endPosition);
                    styleSheet.disabled = fileNamePart != theme;
                }
            }
        }
        
        window.localStorage[storageKey] = theme;
        currentTheme('generic.' + theme);
        refreshTheme();
        this.themeChanged.next(theme);
    }

    constructor() { }

}

import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
    selector: 'app-rangeselector',
    templateUrl: './rangeselector.component.html',
    styleUrls: ['./rangeselector.component.scss'],
    providers: [DataService]
})
export class RangeSelectorComponent implements OnInit {
    @Output() onChange: EventEmitter<any> = new EventEmitter();
    @Input() shutterColor = '#fff';

    currentYear: number;
    thisYear: number = new Date().getFullYear();
    dataSource: Array<Object>;

    private correctOffset(offset: number): boolean {
        let neededYear = this.currentYear + offset;
        return neededYear <= this.thisYear && neededYear >= this.thisYear - 2;
    }

    change(event: any): void {
        Promise.resolve().then(() => this.onChange.emit(event));
    }
    
    changeYear(offset: number): void {

        if(!this.correctOffset(offset)) {
            return;
        }

        this.currentYear += offset;

        this.dataService.getData('sales', {
            startDate: new Date(this.currentYear, 0, 1),
            endDate: new Date(this.currentYear, 11, 31)
        }).subscribe(data => this.dataSource = data);
    }

    constructor(private dataService: DataService) { }

    ngOnInit() {
        this.currentYear = new Date().getFullYear();
        this.changeYear(0);
    }
}

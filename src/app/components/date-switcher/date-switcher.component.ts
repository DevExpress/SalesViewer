import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

const DAY_TYPE = 'day';

@Component({
    selector: 'app-date-switcher',
    templateUrl: './date-switcher.component.html',
    styleUrls: ['./date-switcher.component.scss']
})
export class DateSwitcherComponent implements OnInit {
    @Input() type: string = DAY_TYPE;
    @Input() date: Date = new Date();
    @Output() onChange: EventEmitter<any> = new EventEmitter();

    currentDate: Date;
    endDate: Date;

    private applyChanges() {
        this.onChange.emit(this.date);
    }

    update(offset: number): void {
        let newDate = new Date(this.date);
        if(this.type === DAY_TYPE) {
            newDate.setDate(this.date.getDate() + offset);
        } else {
            newDate.setMonth(this.date.getMonth() + offset);
        }
        if(newDate > this.currentDate || newDate < this.endDate) {
            return;
        }

        this.date = newDate;
        this.applyChanges();
    }

    constructor() { }

    ngOnInit() {
        this.date.setHours(0, 0, 0, 0);
        if(this.type !== DAY_TYPE) {
            this.date.setDate(1);
        }
        this.currentDate = this.date;
        this.endDate = new Date(this.currentDate.getFullYear() - 2, 0, 1);
        this.applyChanges();
    }

}

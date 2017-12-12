import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from '../../services/data.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-rangeselector',
  templateUrl: './rangeselector.component.html',
  styleUrls: ['./rangeselector.component.scss'],
  providers: [DataService]
})
export class RangeSelectorComponent implements OnInit {
    @Output() onChange: EventEmitter<any> = new EventEmitter();

    currentYear: number;
    thisYear: number = new Date().getFullYear();
    dataSource: Array<Object>;

    change(event: any): void {
        this.onChange.emit(event);
    }

    changeYear(offset: number): void {

        function correctOffset(off: number): boolean {
            let neededYear = this.currentYear + off;
            return neededYear <= this.thisYear && neededYear >= this.thisYear - 2;
        }

        if(!correctOffset.call(this, offset)) {
            return;
        }

        this.currentYear += offset;

        const from = new Date(this.currentYear, 0, 1);
        const to = new Date(this.currentYear, 11, 31);

        let datePipe = new DatePipe('en-US');

        this.dataService.getData('sales', {
            startDate: datePipe.transform(from, 'yyyy-MM-dd'),
            endDate: datePipe.transform(to, 'yyyy-MM-dd')
        }).subscribe(data => {
            if(data && data.length) {
                this.dataSource = data.slice(0, -1);
            }
        });
    }

    constructor(private dataService: DataService) { }

    ngOnInit() {
        this.currentYear = new Date().getFullYear();
        this.changeYear(0);
    }
}

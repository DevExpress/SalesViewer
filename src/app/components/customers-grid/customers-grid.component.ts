import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import 'devextreme/data/array_store';
import DataSource from 'devextreme/data/data_source';
import { DataService } from '../../services/data.service';

@Component({
    selector: 'app-customers-grid',
    templateUrl: './customers-grid.component.html',
    styleUrls: ['./customers-grid.component.scss'],
    providers: [DataService]
})
export class CustomersGridComponent implements OnInit {
    @Output() onChange: EventEmitter<any> = new EventEmitter();

    gridDataSource: DataSource;
    selectedRows: Array<number>;

    customerChanged(event: any): void {
        this.onChange.emit(event);
    }

    constructor(private dataService: DataService) { }

    ngOnInit() {
        this.dataService.getData('companies', {}).subscribe(data => {
            this.gridDataSource = new DataSource({ store: { type: 'array', key: 'id', data: data }});
            this.selectedRows = [1];
        });
    }

}

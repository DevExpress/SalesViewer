import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import 'devextreme/data/array_store';
import DataSource from 'devextreme/data/data_source';
import { DataService } from '../../services/data.service';

@Component({
    selector: 'app-products-grid',
    templateUrl: './products-grid.component.html',
    styleUrls: ['./products-grid.component.scss'],
    providers: [DataService]
})
export class ProductsGridComponent implements OnInit {
    gridDataSource: DataSource;
    selectedRows: Array<any> = [];
    @Output() onChange: EventEmitter<any> = new EventEmitter();

    selectionChanged(): void {
        this.onChange.emit(this.selectedRows[0]);
    }
    constructor(private dataService: DataService) { }

    ngOnInit() {
        this.dataService.getData('goods', {}).subscribe(data => {
            this.gridDataSource = new DataSource({ store: { type: 'array', data: data }});
            this.selectedRows = [data[0]];
        });
    }

}

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { DatePipe } from '@angular/common';

@Injectable()
export class DataService {

    apiUrl = 'https://js.devexpress.com/Demos/SalesViewer/api/';
    odataUrl = 'https://js.devexpress.com/Demos/SalesViewer/odata/DaySaleDtoes';

    getData(category: string, data: any) {
        let params = new HttpParams();
        let datePipe = new DatePipe('en-US');
        for(let property in data) {
            if (data.hasOwnProperty(property)) {
                if(data[property] instanceof Date) {
                    let format = 'yyyy-MM-dd';
                    if(property === 'now') {
                        format += ' HH:00';
                    }
                    data[property] = datePipe.transform(data[property], format);
                }
                params = params.append(property, data[property]);
            }
        }

        return this.http.get<Array<any>>(this.apiUrl + category, { params: params });
    }

    constructor(private http: HttpClient) { }

}

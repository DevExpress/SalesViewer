import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class DataService {

    apiUrl = 'https://js.devexpress.com/Demos/SalesViewer/api/';

    getData(category: string, data: Object) {
        let params = new HttpParams();
        for(let property in data) {
            if(data.hasOwnProperty(property)) {
                params = params.append(property, data[property]);
            }
        }

        return this.http.get<Array<Object>>(this.apiUrl + category, { params: params });
    }

    constructor(private http: HttpClient) { }

}

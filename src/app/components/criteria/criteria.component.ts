import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-criteria',
  templateUrl: './criteria.component.html',
  styleUrls: ['./criteria.component.scss']
})
export class CriteriaComponent implements OnInit {
    @Input() criteria: string;
    constructor() { }

    ngOnInit() {
    }
}

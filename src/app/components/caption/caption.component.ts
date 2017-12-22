import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-caption',
  templateUrl: './caption.component.html',
  styleUrls: ['./caption.component.scss']
})
export class CaptionComponent implements OnInit {
    @Input() caption: string;
    @Input() legend = false;
    constructor() { }

    ngOnInit() {
    }

}

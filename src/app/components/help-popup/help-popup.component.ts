import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-help-popup',
    templateUrl: './help-popup.component.html',
    styleUrls: ['./help-popup.component.scss']
})
export class HelpPopupComponent implements OnInit {

    visible = false;
    template: string;

    show(): void {
        this.template = this.router.url;
        this.visible = true;
    }

    download(): void {
        window.open('https://js.devexpress.com/Download/', '_blank');
    }

    constructor(private router: Router) { }

    ngOnInit() {}

}

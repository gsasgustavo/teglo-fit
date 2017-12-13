import { Component, OnInit } from '@angular/core';

import '../assets/css/style.css';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
    title: string;

    constructor() {
        this.title='Teglo Fit';
    }

    ngOnInit(): void {
    }
}
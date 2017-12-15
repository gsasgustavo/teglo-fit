import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from "../../services/auth.service";

@Component({
    templateUrl: 'page-not-found.component.html'
})
export class PageNotFoundComponent implements OnInit {
    
    constructor(
        private authService: AuthService,
        private route: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit() { }

}
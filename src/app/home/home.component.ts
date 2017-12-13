import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from "../services/auth.service";

@Component({
    templateUrl: 'home.component.html'
})
export class HomeComponent implements OnInit {
    user=null;

    constructor(
        private authService: AuthService,
        private route: ActivatedRoute,
        private router: Router
	) { }

    ngOnInit() { }
}

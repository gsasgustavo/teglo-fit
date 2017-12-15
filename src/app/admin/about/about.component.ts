import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from "../../services/auth.service";

@Component({
    templateUrl: 'about.component.html'
})
export class AboutComponent implements OnInit {
    
    constructor(
        private authService: AuthService,
        private route: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit() { }

}
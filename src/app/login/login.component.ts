import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
 
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'
})
 
export class LoginComponent implements OnInit {
    loading=false;
    username: string;
    password: string;
    error='';
 
    constructor(
        private router: Router,
        private authService: AuthService) { }
 
    ngOnInit() {
        this.authService.logout();
    }
 
    login() {
        this.loading=true;
        this.authService.login(this.username, this.password)
            .subscribe(result => {
                if (result===true) {
                    this.router.navigate(['/home']);
                } else {
                    this.error='Nome de Usuário ou Senha de Acesso incorretos...';
                    this.loading=false;
                }
            });
    }
}
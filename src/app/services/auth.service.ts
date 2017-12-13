import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
 
@Injectable()
export class AuthService {
    public token: string;
    private url='http://sistema-eventos-back.herokuapp.com/api-token-auth/';
    private headers=new Headers({ 'Content-Type': 'application/json' });
    private options=new RequestOptions({ headers: this.headers });
    error=null;
    user=null;
 
    constructor(
        private http: Http
    ) {
        let currentUser=JSON.parse(localStorage.getItem('currentUser'));
        this.token=currentUser && currentUser.token;
    }

    login(username: string, password: string): Observable<boolean> {
        let body=JSON.stringify({ username: username, password: password });
        return this.http.post(this.url, body, this.options)
        .map((response: Response) => {
            let a=console.log(body);
            let token=response.json() && response.json().token;
            if (token) {
                this.token=token;
                localStorage.setItem('currentUser', JSON.stringify({ username: username, password: password }));
                return true;
            } else {
                return false;
            }
        });
    }
 
    logout(): void {
        this.token=null;
        localStorage.removeItem('currentUser');
    }
}
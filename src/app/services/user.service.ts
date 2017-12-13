import { Injectable } from '@angular/core';
import { Http, RequestOptions,Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../user/user.model';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';


@Injectable()
export class UserService {
    private headers = null;
    private options = null;

    constructor(private http: Http) { 
        this.headers = new Headers({'Content-Type': 'application/json'});
        this.options = new RequestOptions({ headers: this.headers }); 
    }

    all(): Observable<any[]> {
        return this.http.get('http://localhost:3000/usuarios')
            .map(response => response.json());
    }
	find(id: number): Observable<User> {
        return this.all().map(usuarios => usuarios.find(usuario => usuario.id === id));
    }
	update(
        id: number,
        nome: string,
        sobrenome: string,
        contato: string,
        username: string,
        password:string
    ) {
        const usuario = {
            id: id,
            nome: nome,
            sobrenome: sobrenome,
            contato: contato,
            username: username,
            password: password
        };
        return this.http.put('http://localhost:3000/usuarios/' + id, JSON.stringify(usuario), this.options)
            .map(response => response.json())
            .catch((error:any) => Observable.throw(error.json().error || 'Erro ao conectar ao servidor.'));
    }
}
import { Injectable } from '@angular/core';
import { Http, RequestOptions,Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Pesagens } from '../pesagens/pesagens.model';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';


@Injectable()
export class PesagensService {
    private headers = null;
    private options = null;

    constructor(private http: Http) { 
        this.headers = new Headers({'Content-Type': 'application/json'});
        this.options = new RequestOptions({ headers: this.headers }); 
    }

    all(): Observable<any[]> {
        return this.http.get('http://localhost:3000/pesagens')
            .map(response => response.json());
    }
	find(id: number): Observable<Pesagens> {
        return this.all().map(pesagens => pesagens.find(pesagem => pesagem.id === id));
    }
	delete(id: number) {
        return this.http.delete('http://localhost:3000/pesagens/' + id, this.options)
            .map(response => response.json())
            .catch((error:any) => Observable.throw(error.json().error || 'Erro ao conectar ao servidor.'));
    }
}
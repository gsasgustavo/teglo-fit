import { Injectable } from '@angular/core';
import { Http, RequestOptions,Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Pesagens } from '../admin/pesagens/pesagens.model';
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
        return this.http.get('https://teglo-fit.herokuapp.com/peso/')
            .map(response => response.json());
    }
	find(id: number): Observable<Pesagens> {
        return this.all().map(pesagens => pesagens.find(pesagem => pesagem.id === id));
    }
	delete(id: number) {
        return this.http.delete('https://teglo-fit.herokuapp.com/peso/' + id, this.options)
            .map(response => response.json())
            .catch((error:any) => Observable.throw(error.json().error || 'Erro ao conectar ao servidor.'));
    }
}
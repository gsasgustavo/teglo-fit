import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { PesagensService } from '../services/pesagens.service';
import { Pesagens } from './pesagens.model';

@Component({
    templateUrl: 'pesagens.component.html',
	providers: [PesagensService]
})

export class PesagensComponent implements OnInit {
	pesagens: Pesagens[];
	pesAnt: number;
    constructor(
		private pesagensService: PesagensService,
        private router: Router) {
		this.pesAnt=0;
	}

    ngOnInit() {
		this.pesagensService.all().
            subscribe(pesagens => this.pesagens = pesagens);
	}
	
	verificarProgressao(result:boolean){
		if(this.pesagens[this.pesagens.length -1].peso > this.pesagens[this.pesagens.length-2].peso) {
			result=true;
			return result;
		}
		result=false;
		return result;
	}
	
	excluirPesagem(pesagem:Pesagens){
		this.pesagensService.delete(pesagem.id).subscribe(
			pesagem => console.log(pesagem),
			erro => console.log(erro));
		this.pesagens.splice(this.pesagens.indexOf(pesagem), 1);
	}
}
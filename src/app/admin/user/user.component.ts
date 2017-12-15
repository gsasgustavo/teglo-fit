import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { User } from './user.model';
import { UserService } from '../../services/user.service';

@Component({
    templateUrl: 'user.component.html',
	providers: [UserService]
})

export class UserComponent implements OnInit {

    constructor(
		private userService: UserService,
		private router: Router
	) {	}
	
	id:number=0;
	idUm:number=1;
	user:User = new User(this.id,'','','','','');
	
	preencherUsuario(): void {
		this.user = new User(this.id,'','','','','');
    }
	
    ngOnInit() {
		this.userService.find(this.idUm)
			.subscribe(user => this.user=user);
	}
	
	onSubmit() {
	this.userService.update(
		this.user.id,
		this.user.nome,
		this.user.sobrenome,
		this.user.contato,
		this.user.username,
		this.user.password)
            .subscribe(
                user => console.log(user),
                erro => console.log(erro));
	}
}

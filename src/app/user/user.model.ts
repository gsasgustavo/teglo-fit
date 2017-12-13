export class User {
    public id: number;
	public nome: string;
	public sobrenome: string;
	public contato: string;
    public username: string;
    public password: string;
	
    constructor(
        id: number,
        nome:string,
        sobrenome:string,
        contato:string,
        username: string,
        password: string
    ) {
        this.id=id;
		this.nome=nome;
		this.sobrenome=sobrenome;
		this.contato=contato;
		this.username=username;
		this.password=password;
    }
}
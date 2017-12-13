export class Pesagens {
    public id: number;
    public peso: number;
    public data: string;

    constructor(
        id: number,
        peso: number,
        data: string
    ) {
        this.id=id;
        this.peso=peso;
        this.data=data;
    }
}
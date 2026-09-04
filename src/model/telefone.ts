export default class Telefone {
    public telefone: string
    public ddd: string

    constructor(ddd, telefone) {
        this.ddd = ddd
        this.telefone = telefone
    }
    public getDdd() {
        return this.ddd
    }
    public getNumero() {
        return this.telefone
    }
}
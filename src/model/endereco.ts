export default class Endereco {
    public estado: string
    public cidade: string
    public rua: string
    public numero: string

    constructor(rua, numero, cidade, estado) {
        this.rua = rua
        this.numero = numero
        this.cidade = cidade
        this.estado = estado
    }
    
    public getEstado() {
        return this.estado
    }
    public getEstadoMax() {
        return this.estado.toUpperCase()
    }
    public getEstadoMin() {
        return this.estado.toLowerCase()
    }
    public getCidade() {
        return this.cidade
    }
    public getCidadeMax() {
        return this.cidade.toUpperCase()
    }
    public getCidadeMin() {
        return this.cidade.toLowerCase()
    }
    public getRua() {
        return this.rua
    }
    public getRuaMax() {
        return this.rua.toUpperCase()
    }
    public getRuaMin() {
        return this.rua.toLowerCase()

    }
    public getNumero() {
        return this.numero
    }
}
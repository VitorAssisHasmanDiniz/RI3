import Endereco from "./endereco"
import Telefone from "./telefone"

export default class Cliente {
    private cpf: string
    public nome: string
    public telefones: Set<Telefone>
    public endereco: Endereco

    constructor(nome: string, telefones: Set<Telefone>, cpf: string, endereco: Endereco) {
        this.nome = nome
        this.telefones = telefones
        this.cpf = cpf
        this.endereco = endereco
    }

    public getCpf() {
        return this.cpf
    }

    public getNome() {
        return this.nome
    }

    public getNomeMax() {
        return this.nome.toUpperCase()
    }

    public getNomeMin() {
        return this.nome.toLowerCase()
    }

    public getTelefone() {
        return Array.from(this.telefones)
            .map(telefone => `ddd: ${telefone.getDdd()} numero: ${telefone.getNumero()}`)
            .join("\n")
    }

    public getEndereco() {
        return `Estado: ${this.endereco.getEstado()} cidade: ${this.endereco.getCidade()} rua: ${this.endereco.getRua()} numero: ${this.endereco.getNumero()}`
    }

    public getEnderecoMax() {
        return `Estado: ${this.endereco.getEstadoMax()} cidade: ${this.endereco.getCidadeMax()} rua: ${this.endereco.getRuaMax()} numero: ${this.endereco.getNumero()}`
    }

    public getEnderecoMin() {
        return `Estado: ${this.endereco.getEstadoMax()} cidade: ${this.endereco.getCidadeMax()} rua: ${this.endereco.getRuaMax()} numero: ${this.endereco.getNumero()}`
    }
}
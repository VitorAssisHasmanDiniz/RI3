import Cliente from "./cliente"
import Endereco from "./endereco"
import Telefone from "./telefone"

export default class Empresa {
    private cnpj: string
    public endereco: Endereco
    public nomeFantasia: string
    public razaoSocial: string
    public clientes: Set<Cliente>
    public telefones: Set<Telefone>

    constructor(cnpj: string, endereco: Endereco, nomeFantasia: string, razaoSocial: string, clientes: Set<Cliente>, telefones: Set<Telefone>) {
        this.cnpj = cnpj
        this.endereco = endereco
        this.nomeFantasia = nomeFantasia
        this.razaoSocial = razaoSocial
        this.clientes = clientes
        this.telefones = telefones
    }
    public getCnpj() {
        return this.cnpj
    }

    public getEndereco() {
        return `Estado: ${this.endereco.getEstado()} cidade: ${this.endereco.getCidade()} rua: ${this.endereco.getRua()} numero: ${this.endereco.getNumero()}`
    }

    public getNomeFantasia() {
        return this.nomeFantasia
    }

    public getNomeFantasiaMax() {
        return this.nomeFantasia.toUpperCase()
    }

    public getNomeFantasiaMin() {
        return this.nomeFantasia.toLowerCase()
    }

    public getRazaoSocial() {
        return this.razaoSocial
    }

    public getRazaoSocialMax() {
        return this.razaoSocial.toUpperCase()
    }

    public getRazaoSocialMin() {
        return this.razaoSocial.toLowerCase()
    }

    public getClientes() {
        return Array.from(this.clientes)
            .map(cliente => `Nome: ${cliente.getNomeMax()}
${cliente.getEndereco()}
${cliente.getTelefone()}`)
            .join("\n")
    }

    public getTelefone() {
        return Array.from(this.telefones)
            .map(telefone => `ddd: ${telefone.getDdd()} numero: ${telefone.getNumero()}`)
            .join("\n")
    }

    public detalhe() {
        return `Razão Social: ${this.razaoSocial}
Nome fantasia: ${this.nomeFantasia}
-------------
${this.getClientes()}`
    }
}
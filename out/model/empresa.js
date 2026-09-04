"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Empresa {
    cnpj;
    endereco;
    nomeFantasia;
    razaoSocial;
    clientes;
    telefones;
    constructor(cnpj, endereco, nomeFantasia, razaoSocial, clientes, telefones) {
        this.cnpj = cnpj;
        this.endereco = endereco;
        this.nomeFantasia = nomeFantasia;
        this.razaoSocial = razaoSocial;
        this.clientes = clientes;
        this.telefones = telefones;
    }
    getCnpj() {
        return this.cnpj;
    }
    getEndereco() {
        return `Estado: ${this.endereco.getEstado()} cidade: ${this.endereco.getCidade()} rua: ${this.endereco.getRua()} numero: ${this.endereco.getNumero()}`;
    }
    getNomeFantasia() {
        return this.nomeFantasia;
    }
    getNomeFantasiaMax() {
        return this.nomeFantasia.toUpperCase();
    }
    getNomeFantasiaMin() {
        return this.nomeFantasia.toLowerCase();
    }
    getRazaoSocial() {
        return this.razaoSocial;
    }
    getRazaoSocialMax() {
        return this.razaoSocial.toUpperCase();
    }
    getRazaoSocialMin() {
        return this.razaoSocial.toLowerCase();
    }
    getClientes() {
        return Array.from(this.clientes)
            .map(cliente => `Nome: ${cliente.getNomeMax()}
${cliente.getEndereco()}
${cliente.getTelefone()}`)
            .join("\n");
    }
    getTelefone() {
        return Array.from(this.telefones)
            .map(telefone => `ddd: ${telefone.getDdd()} numero: ${telefone.getNumero()}`)
            .join("\n");
    }
    detalhe() {
        return `Razão Social: ${this.razaoSocial}
Nome fantasia: ${this.nomeFantasia}
-------------
${this.getClientes()}`;
    }
}
exports.default = Empresa;

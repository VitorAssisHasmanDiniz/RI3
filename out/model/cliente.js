"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Cliente {
    cpf;
    nome;
    telefones;
    endereco;
    constructor(nome, telefones, cpf, endereco) {
        this.nome = nome;
        this.telefones = telefones;
        this.cpf = cpf;
        this.endereco = endereco;
    }
    getCpf() {
        return this.cpf;
    }
    getNome() {
        return this.nome;
    }
    getNomeMax() {
        return this.nome.toUpperCase();
    }
    getNomeMin() {
        return this.nome.toLowerCase();
    }
    getTelefone() {
        return Array.from(this.telefones)
            .map(telefone => `ddd: ${telefone.getDdd()} numero: ${telefone.getNumero()}`)
            .join("\n");
    }
    getEndereco() {
        return `Estado: ${this.endereco.getEstado()} cidade: ${this.endereco.getCidade()} rua: ${this.endereco.getRua()} numero: ${this.endereco.getNumero()}`;
    }
    getEnderecoMax() {
        return `Estado: ${this.endereco.getEstadoMax()} cidade: ${this.endereco.getCidadeMax()} rua: ${this.endereco.getRuaMax()} numero: ${this.endereco.getNumero()}`;
    }
    getEnderecoMin() {
        return `Estado: ${this.endereco.getEstadoMax()} cidade: ${this.endereco.getCidadeMax()} rua: ${this.endereco.getRuaMax()} numero: ${this.endereco.getNumero()}`;
    }
}
exports.default = Cliente;

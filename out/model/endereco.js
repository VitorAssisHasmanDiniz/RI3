"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Endereco {
    estado;
    cidade;
    rua;
    numero;
    constructor(rua, numero, cidade, estado) {
        this.rua = rua;
        this.numero = numero;
        this.cidade = cidade;
        this.estado = estado;
    }
    getEstado() {
        return this.estado;
    }
    getEstadoMax() {
        return this.estado.toUpperCase();
    }
    getEstadoMin() {
        return this.estado.toLowerCase();
    }
    getCidade() {
        return this.cidade;
    }
    getCidadeMax() {
        return this.cidade.toUpperCase();
    }
    getCidadeMin() {
        return this.cidade.toLowerCase();
    }
    getRua() {
        return this.rua;
    }
    getRuaMax() {
        return this.rua.toUpperCase();
    }
    getRuaMin() {
        return this.rua.toLowerCase();
    }
    getNumero() {
        return this.numero;
    }
}
exports.default = Endereco;

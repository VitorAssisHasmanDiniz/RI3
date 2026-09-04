"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Telefone {
    telefone;
    ddd;
    constructor(ddd, telefone) {
        this.ddd = ddd;
        this.telefone = telefone;
    }
    getDdd() {
        return this.ddd;
    }
    getNumero() {
        return this.telefone;
    }
}
exports.default = Telefone;

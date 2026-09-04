"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cliente_1 = __importDefault(require("../model/cliente"));
const empresa_1 = __importDefault(require("../model/empresa"));
const endereco_1 = __importDefault(require("../model/endereco"));
const telefone_1 = __importDefault(require("../model/telefone"));
const telefonesCliente1 = new Set([
    new telefone_1.default("11", "988887777"),
    new telefone_1.default("11", "977776666"),
    new telefone_1.default("11", "966665555")
]);
const enderecoCliente1 = new endereco_1.default("Rua das Flores", "123", "São Paulo", "SP");
const cliente1 = new cliente_1.default("Ana Souza", telefonesCliente1, "111.111.111-11", enderecoCliente1);
const telefonesCliente2 = new Set([
    new telefone_1.default("21", "988884444"),
    new telefone_1.default("21", "977773333"),
    new telefone_1.default("21", "966662222")
]);
const enderecoCliente2 = new endereco_1.default("Avenida Central", "456", "Rio de Janeiro", "RJ");
const cliente2 = new cliente_1.default("Bruno Lima", telefonesCliente2, "222.222.222-22", enderecoCliente2);
// ----- Cliente 3 -----
const telefonesCliente3 = new Set([
    new telefone_1.default("31", "988881111"),
    new telefone_1.default("31", "977770000"),
    new telefone_1.default("31", "966669999")
]);
const enderecoCliente3 = new endereco_1.default("Rua da Bahia", "789", "Belo Horizonte", "MG");
const cliente3 = new cliente_1.default("Carla Mendes", telefonesCliente3, "333.333.333-33", enderecoCliente3);
const clientesEmpresa = new Set([cliente1, cliente2, cliente3]);
const telefonesEmpresa = new Set([
    new telefone_1.default("11", "40028922"),
    new telefone_1.default("11", "40028933")
]);
const enderecoEmpresa = new endereco_1.default("Avenida Paulista", "1000", "São Paulo", "SP");
const empresa = new empresa_1.default("12.345.678/0001-90", enderecoEmpresa, "Tech Solutions", "Tech Solutions Ltda", clientesEmpresa, telefonesEmpresa);
console.log(empresa.detalhe());

import Cliente from "../model/cliente"
import Empresa from "../model/empresa"
import Endereco from "../model/endereco"
import Telefone from "../model/telefone"

const telefonesCliente1 = new Set<Telefone>([
    new Telefone("11", "988887777"),
    new Telefone("11", "977776666"),
    new Telefone("11", "966665555")
])

const enderecoCliente1 = new Endereco("Rua das Flores", "123", "São Paulo", "SP")

const cliente1 = new Cliente(
    "Ana Souza",
    telefonesCliente1,
    "111.111.111-11",
    enderecoCliente1
)

const telefonesCliente2 = new Set<Telefone>([
    new Telefone("21", "988884444"),
    new Telefone("21", "977773333"),
    new Telefone("21", "966662222")
])

const enderecoCliente2 = new Endereco("Avenida Central", "456", "Rio de Janeiro", "RJ")

const cliente2 = new Cliente(
    "Bruno Lima",
    telefonesCliente2,
    "222.222.222-22",
    enderecoCliente2
)

const telefonesCliente3 = new Set<Telefone>([
    new Telefone("31", "988881111"),
    new Telefone("31", "977770000"),
    new Telefone("31", "966669999")
])

const enderecoCliente3 = new Endereco("Rua da Bahia", "789", "Belo Horizonte", "MG")

const cliente3 = new Cliente(
    "Carla Mendes",
    telefonesCliente3,
    "333.333.333-33",
    enderecoCliente3
)

const clientesEmpresa = new Set<Cliente>([cliente1, cliente2, cliente3])

const telefonesEmpresa = new Set<Telefone>([
    new Telefone("11", "40028922"),
    new Telefone("11", "40028933")
])

const enderecoEmpresa = new Endereco("Avenida Paulista", "1000", "São Paulo", "SP")

const empresa = new Empresa(
    "12.345.678/0001-90",
    enderecoEmpresa,
    "Tech Solutions",
    "Tech Solutions Ltda",
    clientesEmpresa,
    telefonesEmpresa
)

console.log(empresa.detalhe())
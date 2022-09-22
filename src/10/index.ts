interface ItemInterface {
  nome: string;
  valorEmCentavos: number;
  quantidade?: number;
}

interface CarrinhoInterface {
  items: ItemInterface[];
}

interface ClientesInterface {
  nome: string;
  carrinho?: CarrinhoInterface;
}

let produtos: ItemInterface[] = [];

function limpaLista() {
  produtos = [];
}

const patricia: ClientesInterface = { nome: "Patricia" };
const carlos: ClientesInterface = { nome: "Carlos" };
const renato: ClientesInterface = { nome: "Renato" };
const jose: ClientesInterface = { nome: "José" };
const roberto: ClientesInterface = { nome: "Roberto" };

const tv: ItemInterface = { nome: "TV Samsung 4K", valorEmCentavos: 129900 };
const notebook: ItemInterface = {
  nome: "Notebook Dell",
  valorEmCentavos: 399990,
};
const mouse: ItemInterface = {
  nome: "Mouse MX Master 3",
  valorEmCentavos: 23000,
};
const teclado: ItemInterface = {
  nome: "Teclado Keychron K8",
  valorEmCentavos: 50000,
};
const caboUsb: ItemInterface = {
  nome: "Cabo USB 2 Metros",
  valorEmCentavos: 1990,
};

const carregador: ItemInterface = {
  nome: "Carregador portátil",
  valorEmCentavos: 4590,
};
const webcam: ItemInterface = {
  nome: "Webcam C920s",
  valorEmCentavos: 80000,
};
const monitor: ItemInterface = {
  nome: "Monitor LG 29 FHD",
  valorEmCentavos: 129900,
};

const addCarrinho = (
  cliente: ClientesInterface,
  produto: ItemInterface,
  quantidade: number
) => {
  produto.quantidade = quantidade;
  produtos.push(produto);
  const carrinho: CarrinhoInterface = { items: produtos };
  cliente.carrinho = carrinho;
};

addCarrinho(jose, tv, 1);
addCarrinho(jose, caboUsb, 2);
addCarrinho(jose, webcam, 1);
limpaLista();

addCarrinho(carlos, notebook, 2);
limpaLista();

addCarrinho(patricia, teclado, 1);
addCarrinho(patricia, caboUsb, 2);
addCarrinho(patricia, carregador, 1);
addCarrinho(patricia, mouse, 1);
addCarrinho(patricia, monitor, 1);
limpaLista();

addCarrinho(renato, webcam, 5);
limpaLista();

addCarrinho(roberto, webcam, 1);
addCarrinho(roberto, caboUsb, 2);
addCarrinho(roberto, monitor, 1);
limpaLista();

console.log(jose.nome, "\ncarrinho", jose.carrinho);
console.log(carlos.nome, "\ncarrinho", carlos.carrinho);
console.log(patricia.nome, "\ncarrinho", patricia.carrinho);
console.log(renato.nome, "\ncarrinho", renato.carrinho);
console.log(roberto.nome, "\ncarrinho", roberto.carrinho);

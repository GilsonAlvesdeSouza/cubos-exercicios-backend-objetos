interface CarrosInterface {
  marca: string;
  modelo: string;
  ano: number;
  cor: string;
  quantidade_portas: number;
  automatico: boolean;
}

const carros: CarrosInterface[] = [
  {
    marca: "Volkswagen",
    modelo: "Gol",
    ano: 2022,
    cor: "vermelho",
    quantidade_portas: 4,
    automatico: false,
  },
  {
    marca: "Fiat",
    modelo: "Uno",
    ano: 2019,
    cor: "Branco",
    quantidade_portas: 2,
    automatico: true,
  },
  {
    marca: "Chevrolet",
    modelo: "Monza",
    ano: 2011,
    cor: "vermelho",
    quantidade_portas: 4,
    automatico: true,
  },
];

console.log(carros);

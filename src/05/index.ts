interface AulaInterface {
  identificador: number;
  nome_da_aula: string;
}

interface CursoInterface {
  id: number;
  nome: string;
  aulas: AulaInterface[];
}

const aulas: AulaInterface[] = [
  {
    identificador: 2,
    nome_da_aula: "Variáveis",
  },
  {
    identificador: 3,
    nome_da_aula: "Condicionais",
  },
  {
    identificador: 4,
    nome_da_aula: "Arrays",
  },
];

const curso1 = {
  id: 1234,
  nome: "Lógica de programação",
  aulas: [
    {
      identificador: 1,
      nome_da_aula: "Introdução a programação",
    },
  ],
};

const cadastrarAulas = (curso: CursoInterface, aulas: AulaInterface[]) => {
  curso.aulas = [...curso.aulas, ...aulas];
};

cadastrarAulas(curso1, aulas);

console.log(curso1);

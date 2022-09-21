interface ParticipantesInterface {
  nome: string;
}

const participantes: ParticipantesInterface[] = [
  { nome: "João" },
  { nome: "Ana" },
  { nome: "Beatriz" },
  { nome: "Maria" },
  { nome: "Ana Clara" },
  { nome: "Joana" },
  { nome: "Augusto" },
  { nome: "Renan" },
  { nome: "Patricia" },
  { nome: "Carlos" },
  { nome: "Renato" },
  { nome: "José" },
  { nome: "Roberto" },
  { nome: "Sara" },
  { nome: "Junior" },
  { nome: "Pedro" },
  { nome: "Vitor" },
  { nome: "Antonio" },
];

const achar = "Carlos";

const verificaPosicao = (
  participantes: ParticipantesInterface[],
  achar: string
) => {
  for (const [index, value] of participantes.entries()) {
    if (value.nome === achar) {
      console.log(
        `Galera... o ${value.nome} está na posição ${index + 1} corre lá`
      );
      break;
    }
  }
};

verificaPosicao(participantes, achar);

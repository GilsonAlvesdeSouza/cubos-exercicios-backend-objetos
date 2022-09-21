interface CapitulosInterface {
  numero?: number;
  nome: string;
}
interface LivroInterface {
  nome: string;
  capitulos: CapitulosInterface[];
}

const livro: LivroInterface = {
  nome: "O poder do hábito",
  capitulos: [
    {
      nome: "O loop do hábito",
    },
    {
      nome: "O cérebro ansioso",
    },
    {
      nome: "A regra de ouro da mudança de hábito",
    },
    {
      nome: "Hábitos angulares, ou a balada de Paul O`neill",
    },
    {
      nome: "Starbucks e o hábito do sucesso",
    },
    {
      nome: "O poder de uma crise",
    },
    {
      nome: "Como a target sabe o que você quer antes que você saiba",
    },
    {
      nome: "A Saddleback Church e o boicote aos ónibus de Montgomery",
    },
    {
      nome: "A neorologia do livre-arbítrio",
    },
  ],
};

const adicionaPagina = (data: LivroInterface) => {
  for (const index in data.capitulos) {
    const i = parseInt(index);
    livro.capitulos[i].numero = i + 1;
  }
};

adicionaPagina(livro);

console.log(livro);

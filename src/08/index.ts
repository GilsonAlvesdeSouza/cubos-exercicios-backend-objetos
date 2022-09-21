interface UsuariosInterface8 {
  nome: string;
  pets: string[];
}

const usuarios8: UsuariosInterface8[] = [
  {
    nome: "João",
    pets: [],
  },
  {
    nome: "Ana",
    pets: ["Pingo", "Lulu"],
  },
  {
    nome: "Beatriz",
    pets: ["Lessie"],
  },
  {
    nome: "Carlos",
    pets: ["Farofa", "Salsicha", "Batata"],
  },
  {
    nome: "Antonio",
    pets: ["Naninha"],
  },
];

const verificaQuantidadePets = (usuarios: UsuariosInterface8[]) => {
  for (const usuario of usuarios) {
    if (usuario.pets.length === 0) {
      console.log(`Sou o ${usuario.nome} e não tenho pets`);
    } else if (usuario.pets.length > 0 && usuario.pets.length < 2) {
      console.log(`Sou o ${usuario.nome} e tenho ${usuario.pets.length} pet`);
    } else {
      console.log(`Sou o ${usuario.nome} e tenho ${usuario.pets.length} pets`);
    }
  }
};

verificaQuantidadePets(usuarios8);

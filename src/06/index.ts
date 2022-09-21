interface UsuariosInterface6 {
  nome: string;
  idade: number;
}

const jovens: UsuariosInterface6[] = [];
const adultos: UsuariosInterface6[] = [];

const usuarios6: UsuariosInterface6[] = [
  {
    nome: "João",
    idade: 25,
  },
  {
    nome: "Ana",
    idade: 18,
  },
  {
    nome: "Beatriz",
    idade: 15,
  },
  {
    nome: "Carlos",
    idade: 16,
  },
  {
    nome: "Antonio",
    idade: 32,
  },
];

const jovensAdultos = (usuarios: UsuariosInterface6[]) => {
  for (const usuario of usuarios) {
    usuario.idade < 18 ? jovens.push(usuario) : adultos.push(usuario);
  }
};

jovensAdultos(usuarios6);

console.log("jovens = ", jovens, "\nadultos = ", adultos);

interface UsuarioInterface04 {
  nome: string;
  idade: number;
  maior_idade?: boolean;
}

const usuarios = [
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

const maior_idade = 17;

const verificaMaiorIdade = (usuarios: UsuarioInterface04[]) => {
  const newUsuarios = [...usuarios];
  for (const [index, usuario] of usuarios.entries()) {
    usuario.idade > maior_idade
      ? (newUsuarios[index].maior_idade = true)
      : (newUsuarios[index].maior_idade = false);
  }
  return newUsuarios;
};

console.log(verificaMaiorIdade(usuarios));

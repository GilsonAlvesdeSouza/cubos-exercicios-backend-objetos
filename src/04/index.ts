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
  for (const [index, usuario] of usuarios.entries()) {
    usuario.idade > maior_idade
      ? (usuarios[index].maior_idade = true)
      : (usuarios[index].maior_idade = false);
  }
};

verificaMaiorIdade(usuarios);

console.log(usuarios);

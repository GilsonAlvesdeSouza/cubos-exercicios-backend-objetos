interface UsuarioInterface {
  nome: string;
  idade: number;
  profissao: string;
  cor_preferida: string;
}

const infoUsuario = ({
  nome,
  idade,
  profissao,
  cor_preferida,
}: UsuarioInterface): string => {
  return `Olá... Eu sou ${nome} e tenho ${idade} anos de idade. Sou ${profissao} e minha cor preferida é ${cor_preferida}!`;
};

console.log(
  infoUsuario({
    nome: "Gilson",
    idade: 41,
    profissao: "Desenvolvedor",
    cor_preferida: "preto",
  })
);

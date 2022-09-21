const enderco = {
  rua: "10",
  numero: 5,
  complemento: "Quadra 20 Lt 25",
  bairro: "Alameda",
  cep: "75084-855",
  cidade: "São Paulo",
  estado: "SP",
  pais: "Brasil",
};

interface TelefoneInterface {
  tipo: "cel" | "res" | "com";
  numeroTelefone: string;
}

const telefone: TelefoneInterface = {
  tipo: "cel",
  numeroTelefone: "(62) 99568-9638",
};

let usuario = {
  nome: "Gilson Alves",
  email: "gilsonalves@gmail.com",
  telefone,
  data_nascimento: "17/08/2000",
  enderco,
};

console.log(usuario);

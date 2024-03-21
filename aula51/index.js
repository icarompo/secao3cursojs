const pessoa = {
    nome: 'Icaro',
    sobrenome: 'Mesquita Ponce',
    idade: 20,
    endereco: {
        rua: 'Rua dos bobos',
        numero: 444
    }
};

//const nome = pessoa.nome; // Atribuição normal
const { nome = '', sobrenome} = pessoa; // Atribuição via desestruturação com valor padrão
const { idade, ...resto} = pessoa; // Atribuição via desestruturação com rest
const { endereco: { rua, numero } } = pessoa; // Atribuição via desestruturação aninhada 
console.log(nome, sobrenome);
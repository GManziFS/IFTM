import usersTable from "./table.js"

const maioresIdade = usersTable.filter(user => user.idade >= 18)

maioresIdade.forEach(user => {
    console.log(user.nome, user.idade)
})

const homens = usersTable.filter(user => user.sexo == "M")

homens.forEach(user => {
    console.log(user.nome)
})

const maiorSalario = usersTable.reduce((maior, user) => {
    return user.salario > maior.salario ? user : maior;
});

console.log(maiorSalario.nome, maiorSalario.idade, maiorSalario.sexo, maiorSalario.salario);

const M5000 = usersTable.some(user => user.sexo == "F" && user.salario > 5000)

console.log(M5000)

const soma = usersTable.reduce((total, user) => {
    return total + user.salario
}, 0)

const media = soma / usersTable.length

console.log(media)
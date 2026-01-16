let listar = document.getElementById("meubotao")
console.log(listar)

listar.addEventListener("click", () => {
    listarAlunos(alunosManha)

})
let mysection = document.getElementById("main")
let alunosManha = [
    { nome: "Moises", nota: 2 },
    { nome: "Ana", nota: 3 },
    { nome: "Maria", nota: 7 },
    { nome: "Pedro", nota: 10 }
]
function listarAlunos(lista) {
    mysection.innerHTML = ""

    lista.forEach(aluno => {
        mysection.innerHTML += `${aluno.nome} você tirou ${aluno.nota} no exame final!<br>`

    });
}

function avaliarNota(nota, media) {
    if (nota >= media) {
        return (`APROVADO!`)
    } else {
        return (`REPROVADO`)
    }
}

function notaFinal(lista) {
    const media = 7

    lista.forEach(aluno => {
        let resultado = avaliarNota(aluno.nota, media)
        console.log(`${aluno.nome} você tirou nota ${aluno.nota}, por tando você está ${resultado}`)

         

    });

}




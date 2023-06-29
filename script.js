const students = [
  {
    name: 'Péricles',
    n1: 4,
    n2: 7
  },
  {
    name: 'Bianca',
    n1: 5,
    n2: 9
  },
  {
    name: 'Heitor',
    n1: 10,
    n2: 10
  }
]

function media(n1, n2) {
  return ((n1 + n2) / 2)
}

for(let student of students) {
  if(media(student.n1, student.n2) >= 7){
    alert(`A média do(a) aluno(a) ${student.name} é: ${media(student.n1, student.n2)}
    Parabéns, ${student.name}! Você foi aprovado(a) no concurso!`)
  } else {
    alert(`A média do(a) aluno(a) ${student.name} é: ${media(student.n1, student.n2)}
    Não foi dessa vez, ${student.name}! Tente novamente!`)
  }
}
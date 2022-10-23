
/* calcule a media do aluno de acordo com as 3 notas:
 se tirou - 5 = reprovado
 se tirou entre 5 e 7 = recuperação
 se tirou acima de 7 = aprovado */

const nota1 = 5;
const nota2 = 7;
const nota3 = 5;
const media = (nota1 + nota2 + nota3)/3;

console.log('Sua media foi: '+media.toFixed(2))

if (media >7) {
    
   console.log('APROVADO PARABENS!');
}

else if (media <=7 && media>=5) {
    
    console.log('Voce ficou de recuperacao!');
}

else {
    
    console.log('Voce esta reprovado!');
}


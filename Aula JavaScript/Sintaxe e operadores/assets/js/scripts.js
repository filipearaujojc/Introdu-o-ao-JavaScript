function comparacao() {
    let n1 = Number(prompt('Insira o primeiro valor:'));
    let n2 = Number(prompt('Insira o segundo valor'));
    let n3 = n1 + n2;
    
    if (n1 === n2 && n3 > 10 && n3 < 20) {
        alert(`O número ${n1} é Igual a ${n2} e sua soma é maior do que 10, e menor do que 20`);
        novaOperacao();        
    } else if (n1 === n2 && n3 < 10 ) {
        alert(`O número ${n1} é Igual a ${n2} e sua soma é menor do que 10.`);
        novaOperacao();
    } else if (n1 === n2 && n3 > 20) {
        alert(`O número ${n1} é Igual a ${n2} e sua soma é maior do que 20.`);
        novaOperacao();
    } else if (n1 != n2 && n3 > 10 && n3 < 20) {
        alert(`O número ${n1} é diferente de ${n2} e sua soma é maior do que 10, e menor do que 20.`);
        novaOperacao();
    } else if (n1 != n2 && n3 < 10) {
        alert(`O número ${n1} é diferente de ${n2} e sua soma é menor do que 10`);
        novaOperacao();
    } else if (n1 != n2 && n3 > 20) {
        alert(`O número ${n1} é diferente de ${n2} e sua soma é maior do que 20.`);
        novaOperacao();
    } else {
        novaOperacao();
    }


    function novaOperacao() {
        let opcao = prompt('Deseja fazer uma nova operação?\n 1 - Sim\n 2 - Não');
        if  (opcao == 1) {
            comparacao();
        } else if (opcao == 2) {
            alert('Até mais!')
        } else {
            alert('Digite uma opção válida')
            novaOperacao();
        }
    }

}  
       
comparacao();
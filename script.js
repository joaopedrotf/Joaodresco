document.addEventListener('keypress', function(e){
    if(e.key==="Enter"){
        var btn=document.querySelector("#send");
        btn.click();
    }
})
function carregar() {
    var agora = new Date()/* A variavel agora recebe o parametro Date*/
    var hora = agora.getHours()/* A variavel hora recebe de agora o getHours() a hora do sistema*/
    var car = window.document.getElementById('car')
    if (hora >= 5 && hora < 12) {
        car.innerHTML = `<h2>Olá, bom dia!</h2>`
    } else if (hora >= 12 && hora < 18) {
        car.innerHTML = `<h2>Olá, boa tarde!</h2>`
    } else {
        car.innerHTML = `<h2>Olá, boa noite!</h2>`
    }
}
function logar() {
    var conta = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;
    if (conta.length == 6 && senha.length == 6) {
        location.href = "home.html";
    } else {
        alert('[ERRO] Verifique sua conta e senha!')
    }
}


function sacar() {
    var txt1 = window.document.getElementById("value") /*Pega o conteudo digitado na caixa de texto */
    var valor = Number(txt1.value) /*converte o texto para número e coloca na variavel */
    var n = valor.toLocaleString(`pt-br`, { style: `currency`, currency: `BRL` })/* formata o valor em reais para mostrar na tela de confirmação do valor */


    if (valor >= 10 && valor <= 2000) {
        var retorno = confirm(`Você deseja sacar ${n}`);
        if (retorno == true) {
            var res = window.document.querySelector('div#res')
            res.innerHTML = `<h3 id="tit"> Você sacou ${n}.</h3>`
            var duz = parseInt(valor / 200);
            var resto = (valor % 200)

            if (valor >= 200) {
                if(duz==1){
                    res.innerHTML += `<p id="resultado"> ${duz}  nota  <img id="nota" src="imagens/duzentos.jpg" alt="Nota de cem reais"></p>`
                }else{
                    res.innerHTML += `<p id="resultado"> ${duz}  notas  <img id="nota" src="imagens/duzentos.jpg" alt="Nota de cem reais"></p>`
                }
            }
            if (resto >= 100) {
                var cem = parseInt(resto / 100);
                var resto = (resto % 100)
                if(cem==1){
                    res.innerHTML += `<p id="resultado"> ${cem}  nota  <img id="nota" src="imagens/cem.jpg" alt="Nota de cinquenta reais"></p>`
                }else{
                    res.innerHTML += `<p id="resultado"> ${cem} notas <img id="nota" src="imagens/cem.jpg" alt="Nota de cinquenta reais"></p>`
                }  
            }
            if (resto >= 50) {
                var cin = parseInt(resto / 50);
                var resto = (resto % 50)
                if(cin==1){
                    res.innerHTML += `<p id="resultado"> ${cin}  nota  <img id="nota" src="imagens/cinquenta.jpg" alt="Nota de cinquenta reais"></p>`
                }else{
                    res.innerHTML += `<p id="resultado"> ${cin} notas <img id="nota" src="imagens/cinquenta.jpg" alt="Nota de cinquenta reais"></p>`
                }  
            }
            if (resto >= 20) {
                var vin = parseInt(resto / 20);
                var resto = (resto % 20)
                if(vin==1){
                    res.innerHTML += `<p id="resultado"> ${vin}  nota <img id="nota" src="imagens/vinte.jpg" alt="Nota de vinte reais"></p>`
                }else{
                    res.innerHTML += `<p id="resultado"> ${vin} notas <img id="nota" src="imagens/vinte.jpg" alt="Nota de vinte reais"></p>`
                }               
            }
            if (resto >= 10) {
                var dez = parseInt(resto / 10);
                var resto = (resto % 10)
                if(dez==1){
                    res.innerHTML += `<p id="resultado"> ${dez}  nota  <img id="nota" src="imagens/dez.jpg" alt="Nota de dez reais"></p>`
                }else{
                    res.innerHTML += `<p id="resultado"> ${dez} notas <img id="nota" src="imagens/dez.jpg" alt="Nota de dez reais"></p>`
                }       
            }
            if (resto >= 5) {
                var cinco = parseInt(resto / 5);
                var resto = (resto % 5)
                if(cinco==1){
                    res.innerHTML += `<p id="resultado"> ${cinco}  nota  <img id="nota" src="imagens/cinco.jpg" alt="Nota de cinco reais"></p>`
                }else{
                    res.innerHTML += `<p id="resultado"> ${cinco} notas <img id="nota" src="imagens/cinco.jpg" alt="Nota de cinco reais"></p>`
                }
            }
            if (resto >= 2) {
                var dois = parseInt(resto / 2);
                var resto = (resto % 2)
                if(dois==1){
                    res.innerHTML += `<p id="resultado"> ${dois}  nota  <img id="nota" src="imagens/dois.jpg" alt="Nota de dois reais"></p>`
                }else{
                    res.innerHTML += `<p id="resultado"> ${dois} notas <img id="nota" src="imagens/dois.jpg" alt="Nota de dois reais"></p>`
                }
                
                
            }
            if (resto == 1) {
                res.innerHTML += `<p id="resultado"> 1 moeda <img id="moeda" src="imagens/um.png" alt="Moeda de um real"></p>`
            }
            if (resto !=0 && resto!=1){
                res.innerHTML += `<p id="erro"> Valores menores que R$ 1,00 são desconsiderados automaticamente!</p>`
            }
            res.innerHTML += `\n\n<a href="home.html" id="link"><input type="button" value="Sacar Novamente" id="btn" onclick="home.html"></a>
            <a href="index.html" id="link"><input type="button" value="Sair" id="btn" onclick="index.html"></a>`

        } else {
            res.innerHTML += `<p id="erro"> Você cancelou a operação  </p>`
        }

    } else {
        alert("[ERRO}Verifique o valor digitado! Valor disponível para saque entre R$ 10,00 e R$ 2.000,00");
    }
}



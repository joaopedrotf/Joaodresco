# Joaodresco
  Tela de simulação de saques de um banco virtual
  
  
  Esse site foi desenvolvido na proposta de trabalho na materia de desenvolvimento web1 da professora Patricia Proença Para visualizar clique aqui https://joaopedrotf.github.io/Joaodresco/
  
  
 
IDENTIDADE VISUAL]
  Para a parte visual do site foi utilizado logo, cores e fontes oficiais da marca bradesco.

LOGIN
  A tela de login foi desenvolvida e preparada para entrar com número da conta e senha. Para validar a conta e senha o usuário deve digitar os seis dígitos da conta e os seis dígitos da senha. E já preparado para inserir no futuro o banco de dados e verificação das senhas de acordo com os cadastros.
Caso o usuário erre as pré-condições do login um erro é apresentado na tela.

SAUDAÇÃO]
  Foi desenvolvido um Script para verificar o horário atual e mudar a frase de saudação ao cliente de acordo com a hora do dia.

SAQUE
  Após realizar o login, abre a tela de saques onde o usuário insere o valor desejado, nas especificações do projeto o valor mínimo para saque é de R$10,00 e o máximo é de R$ 2.000,00.
  Caso seja inserido um valor diferente do aceito é apresentado um erro e o usuário pode voltar a escolher um valor novamente.
  Quando os valores digitados são corretos é mostrado uma caixa para o usuário confirmar o valor do saque, caso seja confirmada a operação, é mostrado as cédulas e suas quantidades, caso ele não confirme a operação é cancelada e terá ele terá que digitar o valor novamente
  A forma de resolver a situação proposta foi fatoração do valor digitado, funciona da seguinte forma, primeiro verifica se o valor digitado é maior, que o os valores das cédulas disponíveis, quando a resposta for positiva, o valor digitado é dividido pelo valor da cédula assim, o resultado inteiro da divisão é mostrado para o usuário juntamente com a imagem da cédula ou moeda. O resto do resultado da divisão é testado para ver se maior que as cédulas disponíveis, se caso for positivo o resto é novamente dividido pelo valor da cédula, fazendo esse processo até que o valor seja menor que R$ 1,00. Quando o valor do resto da divisão for menor que R$ 1,00 que é o menor valor disponível encerra o processo de saque e os valores são mostrados para o usuário.
  Após a validação dos valores é mostrado a quantidade de cada nota a ser sacado via script, nas definições do projeto foi colocado que poderia sacar todas as cédulas disponíveis e moedas de R$ 1,00.
  Juntamente com a tela do resultado do saque dois botões foram adicionados, um para que o usuário finalize a operação e volte a tela inicial de login, e o outro para que ele possa realiza um novo saque que redireciona para pagina que permite que ele faça a operação de saque novamente.

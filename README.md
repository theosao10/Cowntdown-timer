# Countdown Timer

Todos nós temos eventos importantes que esperamos na vida, aniversários, datas comemorativas e feriados, para citar alguns. Não seria legal ter um aplicativo que fizesse a contagem regressiva de meses, dias, horas, minutos e segundos para um evento? O Countdown Timer é exatamente esse aplicativo!

## Objetivo

O objetivo do Countdown Timer é fornecer uma exibição continuamente decrescente dos meses, dias, horas, minutos e segundos para um evento inserido pelo usuário.

## Restrições

- Use apenas funções de linguagem integradas para seus cálculos em vez de depender de uma biblioteca ou pacote como o MomentJS. Isso pressupõe, é claro, que a linguagem de sua escolha tenha funções adequadas de manipulação de data e hora integradas.
- Você não pode usar nenhum gerador de código, como o site Counting Down To. Você deve desenvolver sua própria implementação original.

## Histórias de Usuários

- O usuário pode ver uma caixa de entrada de evento contendo um campo de nome de evento, um campo de data, um horário opcional e um botão "Iniciar".
- O usuário pode definir o evento inserindo seu nome, a data em que está programado para ocorrer e um horário opcional do evento. Se o horário for omitido, presume-se que seja meia-noite na data do evento no fuso horário local.
- O usuário pode ver uma mensagem de aviso se o nome do evento estiver em branco.
- O usuário pode ver uma mensagem de aviso se a data ou hora do evento forem inseridas incorretamente.
- O usuário pode ver uma mensagem de aviso se o tempo até os dados do evento e o horário inseridos excederem a precisão do cronômetro de contagem regressiva.
- O usuário pode clicar no botão "Iniciar" para ver o cronômetro de contagem regressiva começar a exibir os dias, horas, minutos e segundos até que o evento ocorra.
- O usuário pode ver os elementos no cronômetro de contagem regressiva diminuírem automaticamente. Por exemplo, quando a contagem de segundos restantes chegar a 0, a contagem de minutos restantes diminuirá em 1 e os segundos começarão a contagem regressiva a partir de 59. Essa progressão deve ocorrer dos segundos até a posição dos dias restantes na exibição da contagem regressiva.
- O usuário pode clicar no botão "Parar" para parar o cronômetro de contagem regressiva.
- O usuário pode clicar no botão "Toggle Dark Theme" para alternar entre os temas claro e escuro.
- O usuário pode selecionar um feriado da lista e iniciar uma contagem regressiva para o feriado selecionado.

## Recursos Bônus

- O usuário pode salvar o evento para que ele persista em todas as sessões.
- O usuário pode ver um alerta quando o evento for alcançado.
- O usuário pode especificar mais de um evento.
- O usuário pode ver um cronômetro de contagem regressiva para cada evento que foi definido.

## Como executar

1. Abra o arquivo `index.html` em um navegador web moderno.
2. Insira o nome do evento, a data e a hora (opcional).
3. Clique em "Iniciar" para começar a contagem regressiva.
4. Clique em "Parar" para parar a contagem regressiva.
5. Clique em "Toggle Dark Theme" para alternar entre os temas claro e escuro.
6. Selecione um feriado da lista e clique em "Start Holiday Countdown" para iniciar a contagem regressiva para o feriado.

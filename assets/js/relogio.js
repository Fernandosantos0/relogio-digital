'use strict'

window.onload = () => {
    /* Declaração de variáveis e constantes */
    const cxRelogio = document.querySelector('#container-relogio');
    const visorRelogio = cxRelogio.querySelector('#relogio');
    const semana = cxRelogio.querySelector('#semana');
    const dataC = cxRelogio.querySelector('#data-completo');
    const dataS = cxRelogio.querySelector('#data-simplificada');
    const msg = cxRelogio.querySelector('#msg');

    // Função para retornar o dia da semana
    const getSemana = (day) => {
        const semanas = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];

        return semanas[day];
    };

    // Função para retornar o mês atual
    const getMes = (month) => {
        const meses = new Array('Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro');
        return meses[month];
    };

    const cumprimento = (hour) => {

        if(hour < 6) {
            return 'Boa madrugada!';
        }

        if(hour < 12) {
            return 'Bom dia!';
        }

        if(hour < 18) {
            return 'Boa tarde!';
        }

        if(hour < 24) {
            return 'Boa noite!';
        }
    };

    const formatarData = time => time < 10 ? `0${time}`: time;

    // Função auto-invocada
    (() => {
        setInterval(function() {
            const data = new Date();
            const dia = formatarData(data.getDate());
            const mes = formatarData(data.getMonth() + 1);
            const ano = data.getFullYear();
            const mesTxt = getMes(data.getMonth());
    

            // Mostrando o horário em tempo real
            visorRelogio.textContent = data.toLocaleTimeString('pt-br', {
                hour12: false,
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            });

            // Mostrando o dia da semana
            semana.textContent = getSemana(data.getDay());

            dataC.textContent = `${getSemana(data.getDay())}, ${dia} de ${mesTxt} de ${ano}`;

            dataS.textContent = `${dia}/${mes}/${ano}`;

            msg.textContent = cumprimento(data.getHours());

        }, 1000);
    })()
};
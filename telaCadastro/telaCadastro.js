//está permitindo colocar datas que não existem. 
$(document).ready(function() {
    // Preencher dias
    const diaSelect = $("#dia");
    for (let dia = 1; dia <= 31; dia++) {
        diaSelect.append(new Option(dia, dia));
    }

    // Preencher meses
    const mesSelect = $("#mes");
    const meses = [
        "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
        "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ];
    meses.forEach((mes, index) => {
        mesSelect.append(new Option(mes, index + 1));
    });

    // Preencher anos (exemplo de 1900 a 2023)
    const anoSelect = $("#ano");
    const anoAtual = new Date().getFullYear();
    for (let ano = anoAtual; ano >= 1900; ano--) {
        anoSelect.append(new Option(ano, ano));
    }

    // Atualizar dias conforme o mês selecionado
    function atualizarDias() {
        const mesSelecionado = parseInt(mesSelect.val());
        const anoSelecionado = parseInt(anoSelect.val());
        const diasNoMes = new Date(anoSelecionado, mesSelecionado, 0).getDate(); 
    }

    mesSelect.change(atualizarDias);
    anoSelect.change(atualizarDias);
});
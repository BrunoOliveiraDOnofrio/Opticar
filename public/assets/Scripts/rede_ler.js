const ctxRede_Ler = document.getElementById('redeChart-ler').getContext('2d');
const valor_ler = document.getElementById('id_valor-ler');

const dataRede_Ler = {
    value: 79,
    max: 100,
    label: "Taxa de Leitura"
};

const configRede_Ler = {
    type: 'doughnut',
    data: {
        labels: [dataRede_Ler.label],
        datasets: [{
            data: [dataRede_Ler.value, dataRede_Ler.max - dataRede_Ler.value],
            backgroundColor: ['#011F27', '#FFFCFC'],
            borderWidth: 5,
            borderColor: '#011F27'
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '75%',
        rotation: -90,
        circumference: 180,
        plugins: {
            legend: { display: false },
            tooltip: { enabled: false }
        }
    }
};

valor_ler.innerHTML= "<span>" + dataRede_Ler.value + "</span>" +" MB/s" + "<br>Taxa de Leitura";
new Chart(ctxRede_Ler, configRede_Ler);
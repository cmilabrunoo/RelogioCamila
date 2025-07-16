// Constantes
const MESES = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
];

const DIAS_SEMANA = [
    "Domingo", "Segunda", "Terça", "Quarta",
    "Quinta", "Sexta", "Sábado"
];

// Elementos
const elementos = {
    data: document.getElementById("data"),
    mes: document.getElementById("mes"),
    hora: document.getElementById("hora"),
    semana: document.getElementById("semana"),
    iniciar: document.getElementById("iniciar"),
    parar: document.getElementById("parar"),
    limpar: document.getElementById("limpar")
};

let intervalo;

// Função para formatar com dois dígitos
function formatarDoisDigitos(numero) {
    return numero < 10 ? `0${numero}` : numero;
}

// Atualizar relógio
function atualizarRelogio() {
    const agora = new Date();
    
    // Formatar data (DD/MM/AAAA)
    const dia = formatarDoisDigitos(agora.getDate());
    const mesNum = formatarDoisDigitos(agora.getMonth() + 1);
    const ano = agora.getFullYear();
    elementos.data.textContent = `${dia}/${mesNum}/${ano}`;
    
    // Mês por extenso
    elementos.mes.textContent = MESES[agora.getMonth()];
    
    // Hora (HH:MM:SS)
    const horas = formatarDoisDigitos(agora.getHours());
    const minutos = formatarDoisDigitos(agora.getMinutes());
    const segundos = formatarDoisDigitos(agora.getSeconds());
    elementos.hora.textContent = `${horas}:${minutos}:${segundos}`;
    
    // Dia da semana
    elementos.semana.textContent = DIAS_SEMANA[agora.getDay()];
}

// Iniciar relógio
function iniciarRelogio() {
    if (!intervalo) {
        atualizarRelogio();
        intervalo = setInterval(atualizarRelogio, 1000);
    }
}

// Parar relógio
function pararRelogio() {
    clearInterval(intervalo);
    intervalo = null;
}

// Limpar relógio
function limparRelogio() {
    pararRelogio();
    elementos.data.textContent = "--/--/----";
    elementos.mes.textContent = "-----------";
    elementos.hora.textContent = "--:--:--";
    elementos.semana.textContent = "-----------";
}

// Event listeners
elementos.iniciar.addEventListener('click', iniciarRelogio);
elementos.parar.addEventListener('click', pararRelogio);
elementos.limpar.addEventListener('click', limparRelogio);

// Iniciar automaticamente
iniciarRelogio();
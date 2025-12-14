// =================================================================================
// 1. CONSTANTES E SELETORES 
// =================================================================================

const convertButton = document.querySelector('.convert-button');
const currencySelectToConvert = document.querySelector('.currency-select-to-convert');
const currencySelectConverted = document.querySelector('.currency-select-converted');

// Elementos de Entrada/Saída
const inputCurrency = document.querySelector('.input-currency');
const currencyValueConvert = document.querySelector('.currency-value-to-convert');
const currencyValueToConverted = document.querySelector('.currency-value-converted');

// Elementos da Interface 
const curencyNameToConvert = document.getElementById('currency-name-to-convert');
const currencyName = document.getElementById('currency-name');
const currencyImageToConvert = document.getElementById('currency-image-to-convert');
const currencyImageConverted = document.getElementById('currency-image-converted');


// Endpoint da API 
const API_URL = 'https://api.exchangerate-api.com/v4/latest/';


// =================================================================================
// 2. ESTRUTURA DE DADOS 
// =================================================================================

const currencyData = {
  real: {
    name: 'Real Brasileiro',
    locale: 'pt-BR',
    code: 'BRL',
    image: './assets/real.png'
  },
  dolar: {
    name: 'Dólar Americano',
    locale: 'en-US',
    code: 'USD',
    image: './assets/dolar.png'
  },
  euro: {
    name: 'Euro',
    locale: 'de-DE',
    code: 'EUR',
    image: './assets/euro.png'
  },
  libra: {
    name: 'Libra Esterlina',
    locale: 'en-GB',
    code: 'GBP',
    image: './assets/libra.png'
  }
};

// =================================================================================
// 3. FUNÇÃO ASSÍNCRONA PARA BUSCAR TAXAS (Requisita as taxas em tempo real)
// =================================================================================

async function fetchExchangeRates(baseCurrencyCode) {
  try {
    const response = await fetch(`${API_URL}${baseCurrencyCode}`);
    if (!response.ok) {
      throw new Error(`Falha na API: Status ${response.status}`);
    }
    const data = await response.json();
    return data.rates;
  } catch (error) {
    console.error('Erro ao buscar taxas de câmbio:', error);
    // Exibe uma mensagem de erro no campo de conversão
    currencyValueToConverted.innerHTML = 'Falha na conexão com a API';
    return null;
  }
}


// =================================================================================
// 4. FUNÇÃO DE CONVERSÃO 
// =================================================================================

/**
 * @async
 * Realiza o cálculo da conversão, formatando a saída e buscando a taxa mais recente.
 * O processo é totalmente dinâmico, convertendo qualquer par de moedas selecionado.
 */
async function convertValues() {
  // 1. OBTÉM O VALOR BRUTO E TRATA A VÍRGULA
  let rawInputValue = inputCurrency.value;

  // CORREÇÃO: Substitui a vírgula (padrão brasileiro) por ponto (padrão JavaScript/inglês) 
  // para garantir que a conversão para Number() não retorne NaN.
  rawInputValue = rawInputValue.replace(',', '.');

  // Converte o valor tratado para número
  const inputCurrencyValue = Number(rawInputValue);

  // Adição de Verificação de Segurança: Sai da função se o valor for inválido
  if (isNaN(inputCurrencyValue) || inputCurrencyValue <= 0) {
    currencyValueConvert.innerHTML = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(0); // Exibe zero ou o valor padrão

    currencyValueToConverted.innerHTML = 'Insira um valor válido';
    return;
  }

  // Obtém o código da moeda de origem e destino
  const currencyFromKey = currencySelectToConvert.value;
  const currencyToKey = currencySelectConverted.value;

  const fromData = currencyData[currencyFromKey];
  const toData = currencyData[currencyToKey];

  // Exibe o valor de origem formatado
  currencyValueConvert.innerHTML = new Intl.NumberFormat(fromData.locale, {
    style: 'currency',
    currency: fromData.code
  }).format(inputCurrencyValue);


  // CHAMADA DINÂMICA: Requisita a API usando a moeda de origem como base
  const rates = await fetchExchangeRates(fromData.code);

  if (rates && rates[toData.code]) {
    // Encontra a taxa para a moeda de destino (ex: taxa do USD se a base for BRL)
    const rate = rates[toData.code];
    const convertedValue = inputCurrencyValue * rate;

    // Exibe o valor convertido formatado
    currencyValueToConverted.innerHTML = new Intl.NumberFormat(toData.locale, {
      style: 'currency',
      currency: toData.code
    }).format(convertedValue);

  } else {
    currencyValueToConverted.innerHTML = 'Erro: Taxa não disponível';
  }
}


// =================================================================================
// 5. FUNÇÃO PARA ATUALIZAR A INTERFACE (Trocando Nomes e Imagens)
// =================================================================================

function changeCurrency() {
  const currencyFromKey = currencySelectToConvert.value;
  const currencyToKey = currencySelectConverted.value;

  const fromData = currencyData[currencyFromKey];
  const toData = currencyData[currencyToKey];

  // Atualiza nome e imagem de origem
  curencyNameToConvert.innerHTML = fromData.name;
  currencyImageToConvert.src = fromData.image;

  // Atualiza nome e imagem de destino
  currencyName.innerHTML = toData.name;
  currencyImageConverted.src = toData.image;
}


// =================================================================================
// 6. EVENT LISTENERS
// =================================================================================

// Ao trocar a moeda de destino ou origem, atualiza a interface E refaz a conversão.
currencySelectConverted.addEventListener('change', () => {
  changeCurrency();
  convertValues();
});

currencySelectToConvert.addEventListener('change', () => {
  changeCurrency();
  convertValues();
});

// Ao clicar no botão, refaz a conversão.
convertButton.addEventListener('click', convertValues);

// Inicializa a interface visualmente quando a página carrega
document.addEventListener('DOMContentLoaded', () => {
  changeCurrency();
  // Podemos chamar convertValues() aqui se quiser um valor inicial ao carregar a página
});
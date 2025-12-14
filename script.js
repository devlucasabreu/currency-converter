const convertButton = document.querySelector('.convert-button');


const currencySelectToConvert = document.querySelector('.currency-select-to-convert');
const currencySelectConverted = document.querySelector('.currency-select-converted');

function convertValues() {

  const inputCurrency = document.querySelector('.input-currency').value;
  const currencyValueConvert = document.querySelector('.currency-value-to-convert');
  const currencyValueToConverted = document.querySelector('.currency-value-converted');

  const realToday = 1;
  const dolarToday = 5.2;
  const euroToday = 6.5;
  const bitcoinToday = 1;


  // Convertendo de:

  if (currencySelectToConvert.value == 'real') {
    currencyValueConvert.innerHTML = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(inputCurrency);

  }
  if (currencySelectToConvert.value == 'dolar') {
    currencyValueConvert.innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(inputCurrency);

  }
  if (currencySelectToConvert.value == 'euro') {
    currencyValueConvert.innerHTML = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(inputCurrency);

  }
  if (currencySelectToConvert.value == 'bitcoin') {
    currencyValueConvert.innerHTML = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'BTC' }).format(inputCurrency);
  }



  // Convertendo para:

  if (currencySelectConverted.value == 'real') {
    currencyValueToConverted.innerHTML = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(inputCurrency / realToday);

  }
  if (currencySelectConverted.value == 'dolar') {
    currencyValueToConverted.innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(inputCurrency / dolarToday);

  }
  if (currencySelectConverted.value == 'euro') {
    currencyValueToConverted.innerHTML = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(inputCurrency / euroToday);

  }
  if (currencySelectConverted.value == 'bitcoin') {

    currencyValueToConverted.innerHTML = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'BTC' }).format(inputCurrency / bitcoinToday);
  }

  currencyValueConvert;


}

function changeCurrency() {
  const curencyNameToConvert = document.getElementById('currency-name-to-convert');
  const currencyName = document.getElementById('currency-name');

  if (currencySelectToConvert.value == 'real') {
    curencyNameToConvert.innerHTML = 'Real Brasileiro';
  }
  if (currencySelectToConvert.value == 'dolar') {
    curencyNameToConvert.innerHTML = 'Dolar Americano';
  }
  if (currencySelectToConvert.value == 'euro') {
    curencyNameToConvert.innerHTML = 'Euro';
  }
  if (currencySelectToConvert.value == 'bitcoin') {
    curencyNameToConvert.innerHTML = 'Bitcoin';
  }


  // convertidos

  if (currencySelectConverted.value == 'real') {
    currencyName.innerHTML = 'Real Brasileiro';
  }
  if (currencySelectConverted.value == 'dolar') {
    currencyName.innerHTML = 'Dolar Americano';
  }
  if (currencySelectConverted.value == 'euro') {
    currencyName.innerHTML = 'Euro';
  }
  if (currencySelectConverted.value == 'bitcoin') {
    currencyName.innerHTML = 'Bitcoin';
  }


}

currencySelectConverted.addEventListener('change', changeCurrency);
currencySelectToConvert.addEventListener('change', changeCurrency);
convertButton.addEventListener('click', convertValues);


// ja configuramos a troca do nome e valores, falta a imagem. O select convertido esta funcionando porém o de converter ainda não. Estamos na aula Javascript pt.4 6:17
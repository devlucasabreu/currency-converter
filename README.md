# 💰 Currency Converter | Conversor de Moedas

<p align="center">
  <a href="https://devlucasabreu-currency-converter.netlify.app/"><strong>Acessar o Projeto Online</strong></a>
</p>

## Visão Geral do Projeto

Este projeto é um **Conversor de Moedas** moderno e responsivo, desenvolvido utilizando **HTML5**, **CSS3** e **JavaScript (Vanilla JS)**. Foi criado como um item de portfólio para demonstrar proficiência em desenvolvimento *front-end*, manipulação de DOM e **integração com APIs externas em tempo real**.

O aplicativo permite aos usuários converter valores entre as principais moedas globais (Real, Dólar, Euro, Libra), obtendo as taxas de câmbio mais recentes de um serviço externo.

## 🚀 Tecnologias e Arquitetura

* **HTML5 & CSS3:** Estrutura semântica e estilização responsiva (*mobile-first*).
* **JavaScript (ES6+):** Utilização de `async/await` para requisições assíncronas e **documentação JSDoc** nas funções.
* **API de Taxas de Câmbio:** Utiliza o endpoint gratuito do **ExchangeRate-API** para fornecer cotações dinâmicas.
* **Estrutura de Dados:** Implementação de um objeto de mapeamento (`currencyData`) para centralizar informações das moedas (código ISO, localidade), garantindo **escalabilidade** e manutenção limpa do código.

## ✨ Funcionalidades Principais

* **Conversão em Tempo Real:** As taxas de câmbio são buscadas dinamicamente na API a cada conversão.
* **Conversão Bidirecional (Dinâmica):** Converte qualquer moeda de origem para qualquer moeda de destino selecionada.
* **Atualização Imediata (UX):** A conversão é acionada automaticamente quando o usuário altera o valor no *input* ou a moeda selecionada (*change event*).
* **Design Responsivo:** O layout se adapta perfeitamente a dispositivos móveis e desktops, com correções para evitar barras de rolagem.
* **Tratamento de Erros:** Implementação de `try...catch` para gerenciar falhas de conexão à API.

## 🛠️ Como Executar Localmente

Siga estas instruções para configurar e rodar o projeto em sua máquina:

1.  **Clone o Repositório:**
    ```bash
    git clone https://github.com/devlucasabreu/currency-converter.git
    cd currency-converter
    ```
2.  **Abra o Arquivo:**
    * Abra o arquivo `index.html` no seu navegador.
    * **Recomendado:** Use um servidor local (ex: Live Server do VS Code) para garantir o correto funcionamento das requisições `fetch` da API.

## 🔑 Detalhes da API

O projeto utiliza o endpoint público do ExchangeRate-API. Não é necessário cadastro ou chave de API, facilitando a execução imediata do projeto de portfólio.

* **Endpoint (exemplo):** `https://api.exchangerate-api.com/v4/latest/USD`

## ✒️ Autor e Contato

**Lucas Abreu**

* **GitHub:** [devlucasabreu](https://github.com/devlucasabreu)
* **LinkedIn:** [Lucas Miguel Abreu](https://www.linkedin.com/in/lucas-miguel-abreu/)
* **E-mail:** [devlucasmiguelabreu@gmail.com](mailto:devlucasmiguelabreu@gmail.com)

## 🤝 Contribuições

Contribuições e sugestões são sempre bem-vindas. Sinta-se à vontade para abrir uma *Issue* ou enviar um *Pull Request*.

## 📝 Licença

Este projeto está sob a **Licença MIT**.

---


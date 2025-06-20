**PROVA**

PARTE 1:
# Testes E2E - Saucedemo com Cypress

Este projeto contém testes automatizados end-to-end para o site [Saucedemo](https://www.saucedemo.com), utilizando **Cypress** como framework de testes.

## 🔍 O que está sendo testado

- ✅ Login com credenciais válidas e adição de item ao carrinho.  
- ❌ Login com credenciais inválidas, validando a mensagem de erro.  
- ✅ Fluxo completo de compra, desde login até a finalização do pedido.

## 📦 Pré-requisitos

- Node.js instalado
- 
## 📥 Instalação

bash
npm install cypress mochawesome

para executar os testes e gerar o relatório
npx cypress run --reporter mochawesome

O relatório gerado para prova está dentro de mochawesome-report/PROVA


PARTE 2:
# Testes com API DummyJSON
Este projeto realiza testes simples em endpoints da API DummyJSON, simulando operações comuns como login, busca de produtos e usuários, usando o Postman.

🔧 Como rodar
Baixe o Postman.

Importe o arquivo Prova.postman_collection.json no Postman.

Execute os seguintes endpoints:

Get_Produto: Busca um produto pelo ID.

Get_Users: Lista de usuários.

Post_Login: Login válido.

Post_Login_Invalido: Teste de login inválido (esperado status 400 - teste negativo).


Para rodar o relatório:
npm install -g newman

npm install -g newman-reporter-htmlextra

newman run Prova.postman_collection.json -r htmlextra


O relatório newman gerado para prova está dentro de postman_tests/newman/Prova... e o arquivo de testes de prova pode ser encontrado em postman_tests

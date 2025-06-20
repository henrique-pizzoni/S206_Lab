**PROVA**

**PARTE 1**
🌐 Testes E2E – Site SauceDemo com Cypress
Testes automatizados de ponta a ponta simulando diferentes interações reais no site saucedemo.com.

O que é testado:

Login com sucesso e adição ao carrinho.

Login com senha inválida.

Fluxo completo de compra (checkout até finalização).

Pré-requisitos:

Node.js instalado

Cypress instalado com:
npm install cypress --save-dev

Como executar:

Crie o arquivo de teste (ex: saucedemo.cy.js) dentro de cypress/e2e/.

Para abrir o Cypress:
npx cypress open
→ Selecione o teste na interface.

Para rodar no terminal (modo headless):
npx cypress run --spec "cypress/e2e/saucedemo.cy.js"

Estou utilizando o Mochawesome como reporter para os testes E2E com Cypress. Os reportes da prova estão disponíveis na pasta de referência do mochawesome


**PARTE 2**
📦 Testes de API com Postman e Newman
Este projeto executa testes em endpoints da API DummyJSON, simulando operações comuns como login, busca de produtos e usuários. Os testes foram criados no Postman e podem ser executados tanto via interface quanto por terminal com Newman.

🔧 Como executar no Postman
Baixe o Postman: https://www.postman.com/downloads/

Importe o arquivo Prova.postman_collection.json.

Execute os endpoints disponíveis:

Get_Produto: Busca produto por ID.

Get_Users: Lista todos os usuários.

Post_Login: Login válido.

Post_Login_Invalido: Login inválido (espera erro 400).

▶️ Executar com Newman (linha de comando)
Instale o Newman (se ainda não tiver):
npm install -g newman

Rode a collection com:
newman run Prova.postman_collection.json

🧪 Gerar relatório HTML com Newman + htmlextra
Instale o reporter:
npm install -g newman-reporter-htmlextra

Execute com:
newman run Prova.postman_collection.json -r htmlextra

O relatório será gerado automaticamente na pasta newman/.

Para mudar o nome ou o caminho do arquivo HTML gerado:
newman run Prova.postman_collection.json -r htmlextra --reporter-htmlextra-export ./relatorio/index.html

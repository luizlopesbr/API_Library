# API Typescript (POO) + Node + PostgreSQL

## 🎯 Objetivo
Estudar a construção de uma API REST utilizando Typescript com POO no ambiente do Node.js para a criação de um controle de empréstimos de livros em uma biblioteca. A persistência é feita utilizando PostgreSQL (localmente).

## 📌 Sobre o Projeto
A ideia da API é permite fazer o CRUD de um livro, assim como, efetuar operações de empréstimo e devolução.

## 🏗 Arquitetura
+ **Back-End:** Node
+ **Linguagem:** Typescript
+ **Banco de Dados:** PostgreSQL
+ **Frameworks:** Express 

Estrutura da API:
**src/**
+ **config** - configuração com o DB.
+ **controllers** - lida com as requisições e respostas.
+ **middlewares** - efetua algumas validações, antes de chegar no controller.
+ **models** - modelo de dados no DB.
+ **repositories** -recebe solicitações diretamente dos services e efetua o acesso ao DB.
+ **routers** - lida com as rotas da aplicação.
+ **services** - regras de negócio, processa dados, valida lógica.
+ **app.ts** - Configuração da aplicação Express.
+ **server.ts** - Inicialização do servidor.

## 📚 Bibliotecas Utilizadas
1. express Função: O Express é um framework para Node.js que facilita a criação de servidores web e APIs RESTful. Ele fornece uma série de ferramentas e recursos para gerenciamento de rotas, middlewares, e sessões, tornando a construção de aplicações mais simples e rápida.

2. helmet Função: Helmet é um middleware para Express que ajuda a proteger a aplicação contra algumas vulnerabilidades de segurança, configurando cabeçalhos HTTP de segurança, como Content-Security-Policy, X-Content-Type-Options, entre outros.

3. cors Função: O CORS (Cross-Origin Resource Sharing) é um middleware que permite ou restringe solicitações de recursos entre diferentes domínios. Ele é essencial para permitir que seu servidor aceite requisições de outros domínios, como em APIs públicas.

4. dotenv Função: A biblioteca dotenv carrega variáveis de ambiente de um arquivo .env para dentro do ambiente do Node.js. Isso é útil para armazenar dados sensíveis (como credenciais) e configurações sem expô-los diretamente no código-fonte.

5. morgan Função: O Morgan é um middleware de logging para Express. Ele registra informações sobre as requisições feitas à sua aplicação, como o método HTTP, o status da resposta, o tempo de resposta, entre outros detalhes. Isso é útil para auditoria e depuração.

6. express-async-errors Função: O express-async-errors é uma biblioteca que permite o tratamento de erros assíncronos no Express sem precisar de try/catch em todas as rotas. Ele melhora a experiência de lidar com funções assíncronas, permitindo que os erros sejam capturados de forma mais fácil.

7. typescript Função: TypeScript é um superset do JavaScript que adiciona tipagem estática ao código. Ele permite detectar erros de tipo durante o desenvolvimento, o que facilita a manutenção e evolução do código, principalmente em projetos maiores.

8. ts-node Função: O ts-node é uma ferramenta que permite rodar arquivos TypeScript diretamente, sem precisar compilar para JavaScript primeiro. Ele torna o processo de desenvolvimento mais rápido e conveniente ao permitir a execução de código TypeScript diretamente no Node.js.

9. @types/express Função: Esses tipos fornecem a tipagem necessária para o Express quando você está utilizando TypeScript, permitindo que o editor e o compilador verifiquem tipos e forneçam autocompletar e documentação integrada.

10. @types/cors Função: Fornece as definições de tipo para a biblioteca cors em TypeScript. Isso ajuda a garantir que a integração com a biblioteca esteja tipada corretamente.

11. @types/helmet Função: Fornece as definições de tipo para a biblioteca helmet em TypeScript, garantindo uma integração mais segura e precisa ao utilizar a biblioteca em um projeto TypeScript.

12. @types/dotenv Função: Fornece as definições de tipo para a biblioteca dotenv em TypeScript. Isso ajuda a garantir a tipagem correta ao carregar variáveis de ambiente.

13. @types/morgan Função: Fornece as definições de tipo para a biblioteca morgan em TypeScript. Isso ajuda a garantir que o logging de requisições seja tipado corretamente.

14. npx tsc --init Função: O comando npx tsc --init inicializa um novo projeto TypeScript criando um arquivo tsconfig.json. Esse arquivo contém as configurações do compilador TypeScript, permitindo definir opções como a versão ECMAScript, diretórios de entrada/saída, opções de módulo, entre outras.

## 🚀 Como Executar o Projeto
1. Clone o repositório: git clone + URL do repositório

2. Acesse a pasta do projeto: cd + pasta do repositório

3. Instale as dependências: npm install

4. Configure o arquivo .env:
Crie um arquivo .env na raiz do projeto e adicione as informações a baixo.

PORT = NÚMERO_DA_PORTA
<br>
CONNECTION_STRING = postgresql://postgres:SENHA@localhost/NOME_DO_BANCO
<br>
SECRET = PALAVRA_SECRETA
<br>
5. Com tudo configurado, você pode iniciar o servidor com o seguinte comando: npm run dev

O servidor será iniciado e a API estará disponível em http://localhost:3000.


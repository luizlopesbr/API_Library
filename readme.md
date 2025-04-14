npm init -y
npm install express helmet cors dotenv morgan express-async-errors
npm install -D typescript ts-node @types/express @types/cors @types/helmet @types/dotenv @types/morgan
npx tsc --init



1. usuário ou aplicação manda uma requisição (HTTP)
*verbo
*endereço => rota

2. roteada => routers
*entende a requisição de distribui ela para alguém

3. controle => controllers
*processamento inicial da requisição (validação, segurança, transformação de dados) 

4. persistência => repositories
*processamento de dados

5. modelos => models
*estrutura de dados

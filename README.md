# Gamebox

O Gamebox é um aplicativo que oferece uma experiência de jogos, com recursos como cadastro, login, jogos, avaliações e uma interface amigável desenvolvida utilizando o React Vite. No lado do servidor, o Node.js é utilizado juntamente com rotas, controladores, serviços e Prisma com PostgreSQL para armazenamento de dados. Recursos avançados de segurança, como autenticação JWT, criptografia de senhas e validação de dados com JOI, foram implementados para garantir a proteção dos usuários. O Gamebox proporciona uma plataforma completa para os usuários desfrutarem de jogos, compartilharem suas avaliações e interagirem com outros jogadores.

## Configuração do ambiente de desenvolvimento

### Pré-requisitos

- Node.js (https://nodejs.org/)
- Postgresql (https://www.postgresql.org)

### Back-end

O back-end é responsável por gerenciar os dados e fornecer as funcionalidades necessárias para a aplicação funcionar corretamente.

#### Configuração do banco de dados:

- Instale o PostgreSQL no seu sistema, seguindo as instruções fornecidas em: https://www.postgresql.org.

- Crie um banco de dados no PostgreSQL para ser usado pelo Gamebox.

- No diretório do projeto, navegue até a pasta backend.

- Renomeie o arquivo `.env.example` para `.env`.

- Abra o arquivo `.env` e atualize as variáveis de ambiente `DATABASE_URL` e `JWT_SECRET` com as informações do seu banco de dados e uma chave secreta para a autenticação JWT, respectivamente.

- Execute o seguinte comando no terminal para instalar as dependências do back-end: `npm install`.

- Execute o seguinte comando para executar as migrações do banco de dados e criar as tabelas necessárias: `npx prisma migrate dev`.

- Após a conclusão das migrações, execute o seguinte comando para iniciar o servidor do back-end:`npm run dev`. O servidor será iniciado na porta 3000.

### Front-end

O front-end é a camada que os usuários interagem diretamente, ele se comunica com o back-end para enviar e receber dados, permitindo que os usuários visualizem, adicionem entradas e saídas financeiras.

#### Instalação e execução

- Abra um terminal e navegue até o diretório do projeto.
- Execute o comando `npm install` para instalar as dependências necessárias.
- Renomeie o arquivo .env.example para .env.
- Abra o arquivo .env e atualize as variáveis de ambiente VITE_API_URL com as informações do seu banco de dados.
- Após a conclusão da instalação, execute o comando `npm run dev` para iniciar o servidor de desenvolvimento.
- O front-end estará disponível em http://localhost:5000 no seu navegador.

# MyContacts - API

O back-end deste repositório é necessário para rodar o MyContacts adequadamente. Construído com Node, Express e PostgreSQL.

[Clique](https://github.com/gabrielhdn/my-contacts) para acessar o código do front-end.
[Clique](https://gabrielhdn.github.io/my-contacts/) para acessar o deploy da aplicação.

## Executando o projeto

É recomendável utilizar o Docker (com docker-compose) para a execução do back-end. O arquivo docker-compose.yml, localizado na raiz do projeto, inicializa um contâiner já com o banco de dados PostgreSQL criado e estruturado. Depois de clonar o repositório e acessar a pasta, basta executar o seguinte comando:

```
docker-compose up -d
```

**:warning: Seu docker-compose precisa estar na versão 1.29 ou superior. Dê preferência para versões mais atualizadas. [Veja aqui](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-compose-on-ubuntu-20-04-pt) ou [na documentação](https://docs.docker.com/compose/install/) como instalá-lo. No primeiro artigo, você pode substituir onde está `1.26.0` por `1.29.2`.**

**:warning: Não esqueça de renomear o arquivo .env-example para .env, alterando os valores como desejar.**

Aqui, você deve estar com um contêiner "pg" devidamente rodando na porta 5432. Agora, para de fato rodar a API, execute:

```
npm run dev
```

Nesse ponto, será possível acessar o front-end da aplicação e realizar operações no banco de dados sem problemas.

# Teste Técnico para Front-End na Plastika

## Resumo

### Na realização deste teste eu optei pelo uso integral do Vue.js no front-end, com a sintaxe Composition API, e SCSS básico no estilo. Para complementar o front no login e autenticação JWT, fiz um servidor tão simples quanto possível dentro do próprio repositório do Vue, no diretório `server`, com Node.js, Express e Mongoose, usando a MongoDB Atlas como banco de dados em núvem.

## Importante

### Neste banco de dados registrei um usuário para uso de quem for testar a aplicação. Estas são suas credeciais:

```
email: user@plastika.com
senha: senhaplastika
```

## Primeiros comandos

### Após seguir as instruções de instalação das dependências com o comando `yarn install` ou `yarn`, o projeto deve ser executado em 2 terminais simultâneos. O primeiro rodará um back-end simples alojado na pasta 'server', com `yarn start` ou `yarn dev`, caso queira-se alterar o código do back-end; enquanto no outro terminal ativa-se com `yarn serve` o front ainda em ambiente de desenvolvimento.

# Instruções padrões do Vue:

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Lints and fixes files

```
yarn lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

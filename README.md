<h2 align="center">
2ª Talk Gazin Tech
</h2>

<h2 align="center" style="margin-top: 30px">
    <img src="./assets/logo-gazin-tech.png" width="380px" />
</h2>

<br/>

<div align="center" style="display: flex; justify-content: center; gap: 5px; margin-bottom: 20px;">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/max10rogerio/react-graphql-strapi?color=%2304D361">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/max10rogerio/react-graphql-strapi">
	
  <a href="https://www.linkedin.com/in/max-rogerio/">
    <img alt="Made by max rogério" src="https://img.shields.io/badge/made%20by-max rogerio-%2304D361">
  </a>

  <a href="https://github.com/max10rogerio/react-graphql-strapi/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/max10rogerio/react-graphql-strapi">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
   <a href="https://github.com/max10rogerio/react-graphql-strapi/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/max10rogerio/react-graphql-strapi?style=social">
  </a>
</div>

<p align="center">
  <a href="#sobre">Sobre</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#como-usar">Como usar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#como-contribuir">Como contribuir</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-license">License</a>
</p>

## Sobre

O React-Graphql-Strapi foi desenvolvido para a 2ª edição da talk Gazin Tech squad Beserkers, afim de explicar como funciona o consumo de um serviço de graphql no frontend com REACT.</br>
Utilizei o nextjs para mostrar é consumir o serviço no lado servidor e no lado cliente.
Também expliquei alguns conceitos do graphql como a utilzição da [extensão do chrome](https://chrome.google.com/webstore/detail/apollo-client-devtools/jdkknkkbebbapilgoeccciglkfbmbnfm) e sobre a parte de cacheamento do apollo.

## :rocket: Tecnologias

Este projeto foi desenvolvido com as seguintes tecnologias:

[NodeJS][nodejs] 💻 </br>
[Typescript][typescript] 📘 </br>
[Strapi][strapi] </br>
[Next JS][nextjs] </br>
[Apollo Client][apollo-client] </br>

## Como usar ? 🤔

É necessário que você tenha algumas ferramentas instaladas antes de clonar este projeto.

- [Git](https://git-scm.com)
- [VSCode](https://code.visualstudio.com/) ou algum outro editor de sua prferência
- [Node.js](https://nodejs.org/) (recomendado a versão LTS do site oficial)
- [Yarn](https://yarnpkg.com/) como gerenciador de pacotes.

### Vamos começar!! ✍

Abra o terminal e clone o repositório:

```bash
# Clone o repositório
$ git clone https://github.com/max10rogerio/react-graphql-strapi
```

## Rodando o backend da aplicação

```bash
# Vá para o diretório backend/
$ cd api
# Instale as dependências
$ yarn
# Rode o proejto
$ yarn develop
```

Neste momento temos a nossa aplicação com o backend e seus serviços em execução, com o backend rodando na porta 3333. _http://localhost:1337_

Para acessar o admin, entre no endereço: _http://localhost:1337/admin_

---

## Rodando o backend da aplicação

```bash
# Vá para o diretório backend/
$ cd web
# Instale as dependências
$ yarn
# Rode o proejto
$ yarn dev
```

A aplicação irá rodar na porta 3000: _http://localhost:3000_

## Como contribuir

- Faça um fork;
- Crie uma nova branch com a sua feature: `git checkout -b my-feature`;
- Commit as suas alterações: `git commit -m 'feat: My new feature'`;
- Empurre para o repositório remoto a sua nova branch: `git push origin my-feature`.

Abra um pull request para analisarmos as mudanças.

Você também pode nos ajudar abrindo issues.

## :memo: Licença

Este projeto está com a licença MIT. Veja [LICENÇA](https://github.com/max10rogerio/react-graphql-strapi/blob/main/LICENSE) para mais detalhes.

Made with ♥ by Max Rogério :wave: [Get in touch!](https://www.linkedin.com/in/max-rogerio/)

[typescript]: https://www.typescriptlang.org/
[apollo-client]: https://www.apollographql.com/docs/react/
[nodejs]: https://nodejs.org/en/
[nextjs]: https://nextjs.org/docs/getting-started
[strapi]: https://strapi.io/documentation/developer-docs/latest/getting-started/introduction.html

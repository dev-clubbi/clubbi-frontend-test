# Teste Front End da Clubbi

## Tecnologias utilizadas

<div align="center">
<span>
  <a href="https://nodejs.org/en/"><img height="25em" alt="NodeJs" src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white"/></a>
  <a href="https://yarnpkg.com/"><img height="25em" alt="Yarn" src="https://img.shields.io/badge/yarn-%232C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white"/></a>
  <a href="https://reactjs.org/"><img height="25em" alt="React" src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"/></a>
  <a href="https://jestjs.io/docs/getting-started"><img height="25em" alt="Jest" src="https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white"/></a>
</span>
</div>
<br/>

## Pré-requisitos

É necessário ter instalados em sua máquina:

- `node`
- `yarn`

## Primeiros passos

Primeiro, copie este repositório para seu perfil do GitHub fazendo um _fork_. Caso não saiba como fazer, [esse post](https://medium.com/@abnerborgonha/como-fazer-um-fork-de-uma-projeto-no-github-9c78f2899bac) explica o conceito e o passo a passo.

Em seguida, clone o repositório **a partir da cópia que fez em seu perfil** em sua máquina. A [documentação](https://docs.github.com/pt/repositories/creating-and-managing-repositories/cloning-a-repository#cloning-a-repository) oficial do GitHub explica como fazer.

Não se esqueça de deixar seu repositório público para que consigamos vê-lo!

## Como rodar o projeto

- No diretório raíz do projeto, lançar o comando `yarn` no terminal para instalar as dependências.
- Logo após, lançar `yarn start` para começar a rodar o projeto. Estará disponível no endereço `https://localhost:3000` em seu navegador.

## Requisitos do teste

Dada uma lista de produtos disponíveis no site Clubbi, construa uma página para exibí-los com suas características. Deve ser possível:

- Acrescentar e diminuir as quantidades de produtos desejados individualmente através de um `input` com botões;
- Ver o valor total sendo exibido a cada mudança no carrinho.

Exemplo:

![image](src/exemplo.gif)

Não é necessário fazer alguma ação no botão "Ver carrinho".

Os dados de teste a serem consumidos estão disponíveis dentro do projeto em `api/data.json`.

Acrescente os estilos que desejar na folha de estilos CSS. Recomendamos utilizar a cartela de cores Clubbi!

## Bônus

O projeto possui um teste automatizado falhando e incompleto. Fique à vontade caso queira incrementá-lo e/ou acrescentar mais testes, mas não é um requisito.

Para rodar os testes, lance o comando `yarn test` no terminal.

### Happy coding!

<div align="center">
    <img src="src/logo.png" height="40"/>
</div>

<h1 align="center"> Desafio front-end - BeMobile</h1>
<p align="center">
  <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt:"React"/>
  <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" alt:"TypeScript"/>
   <img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white" alt:"StyledComponts"/>
   <img src="https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white" alt:"Vite"/>
</p>


## Sobre:

O projeto consiste no consumo de dados de funcionários de uma organização através do Json-Server que simula a resposta de uma API enviando o objeto de funcionários.

Os funcionários são renderizados na landing page em uma tabela. Onde é possível filtrar (através de um input), os funcionarios segundo o cargo, nome e número de telefone.

## Requisitos:

Para rodar o projeto você precisa ter:
- git
- node js
- npm ou yarn
  
## Como rodar o projeto:

- Faça um clone do repositório:
```bash
git clone git@github.com:emanuelmarcolongo/be-desafio-front.git
```

- Entre na pasta onde o projeto foi clonado e instale as dependências com o comando

```bash
npm i
```

- Execute o comando para rodar o JSON-Server (que irá fornecer os dados para a aplicação):
```bash
npm run json-server
```

- Execute o comando para rodar a aplicação:
```bash
npm run dev
```

- Acesse a porta através do seu navegador:
```bash
 http://127.0.0.1:5173/
```
A porta acima é a default do vite, porém fique de olho no terminal.
 

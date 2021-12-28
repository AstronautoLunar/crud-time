<h1 align="center">CRUD-time</h1>

<p align="center">Um back-end para gerenciamento de dias de chuva</p>

* [Sobre](#Sobre)
* [Pre Requisitos](#Pre-requisitos)
* [Como usar](#Como-user)
  * [GET](#GET)
  * [POST](#POST)
  * [PUT](#PUT)
  * [DELETE](#DELETE)
* [Tecnologias](#Tecnologias)

<h4 align="center">
 ✅ Concluído ✅
</h4>

## Sobre
Mais um projeto pratico sem fins lucrativos, como todo projeto meu como esse não irei dar deploy, apenas fiz para estudos e aperfeiçoamento de minhas habilidades
em back-end, Fique livre para explorar e estudar meu código, criticas são bem vindas e contribuições também 

Esse projeto gerencia dados de dias chuvosos, mostra, adiciona, modifica e deleta dadoss, o famoso crud

## Pre Requisitos
Você vai precisar do node.js instalado em sua máquina, segue o link da instalação

- [Nodejs](https://nodejs.org/en/download/)

e também precisará instalar um gerenciador de pacotes

- [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable);

Copie e cole no seu GIT

```
  git clone https://github.com/Pyedrown/crud-time.git
```
e em seguida use

```
  cd crud-time
```

## Como usar

Entre na pasta do projeto através do terminal e execute o seguinte comando

```
  yarn serve
```

O servidor possui ao todo 4 endpoints

### GET 

```
  localhost:4444/api/getAlltimes
```

Retorna um json com os dados da api

Os dados serão retornados no seguinte formato:

<pre>
{
    "times": [
        {
            "id": "adfhaflasfdlhasff",
            "day": "23/04/2014",
            "typeRain": "Chuva Forte",
            "hour": 14,
            "district": "São Paulo",
            "city": "São Paulo"
        },
        {
            "id": "asdfjlasfhjjwer",
            "day": "19/08/2015",
            "typeRain": "Chuva Fraca",
            "hour": 7,
            "district": "São Paulo",
            "city": "São Paulo"
        },
        {
            "id": "fdfsfsfsadfajfff",
            "day": "28/02/2018",
            "typeRain": "Sem Chuva",
            "hour": 10,
            "district": "Rio de Janeiro",
            "city": "Rio de Janeiro"
        }
    ]
}
</pre>

- id: 
    - tipo: string
    - definição: identificador do objeto

- day:
  - tipo: string,
  - definição: Armazena o data do tempo
  
- typeRain:
  - tipo: string,
  - definição: Tipo de chuva
  
- hour:
  - tipo: number
  - definição: Armazena a hora exata

- district:
  - tipo: string
  - definição: Armazena o estado
  
- city:
  - tipo: string
  - definição: Armazena a cidade

### POST

```
localhost:4444/api/addTime
```

Envia no formato de json com a seguinte estrutura:

<pre>
{
	"day": "23/04/2014",
	"typeRain": "Chuva Fraca",
	"hour": 14,
	"district": "São Paulo",
	"city": "São Paulo"
}
</pre>

### PUT

A rota para modificação de dados é esse:

```
localhost:4444/api/modifyTime
```

envia no formato json com a seguinte estrutura:

<pre>
{
	"id": "fdfsfsfsadfajfff",
	"day": "23/04/2014",
	"typeRain": "Chuva Fraca",
	"hour": 14,
	"district": "São Paulo",
	"city": "São Paulo"
}
</pre>

### DELETE

```
localhost:4444/api/deleteTime
```

Deleta o dia de chuva, envia em formato json com a seguinte estrutura:

<pre>
{
	"id": "69223528087668"
}
</pre>

## Tecnologias

- [Typescript](https://www.typescriptlang.org)
- [Expressjs](https://expressjs.com/pt-br/)

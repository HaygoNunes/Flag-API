```markdown
# API de Bandeiras

Esta API desenvolvida em Node.js utiliza o **Express**, **Axios** e **Cors** para fornecer uma rota que redireciona para a imagem da bandeira de um país específico. A imagem é obtida a partir de um repositório hospedado no GitHub.

## Índice

- [Características](#características)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Uso](#uso)
- [Endpoints](#endpoints)
- [Exemplos](#exemplos)
- [Licença](#licença)

## Características

- **Segurança por Chave de Acesso:** A API requer uma chave de acesso (`chave`) para autorizar as requisições.
- **Busca de Bandeiras:** Busca a bandeira do país especificado a partir de um repositório no GitHub.
- **CORS:** Configurada para permitir requisições de diferentes origens.
- **JSON Parsing:** Suporte para processamento de JSON nas requisições.

## Pré-requisitos

Antes de executar a API, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) (v10 ou superior)
- [npm](https://www.npmjs.com/)

## Instalação

1. Clone o repositório ou copie os arquivos da API para o seu ambiente local:

   ```bash
   git clone https://github.com/HaygoNunes/Flag-API
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd Flag-API
   ```

3. Instale as dependências necessárias:

   ```bash
   npm install express axios cors
   ```

## Uso

Para iniciar a API, execute o seguinte comando:

```bash
node start.js
```

> **Observação:** Se o nome do seu arquivo for diferente de `seu-arquivo.js`, substitua-o pelo nome correto.

A API será iniciada na porta `3000`. Acesse-a através de:

```
http://localhost:3000
```

## Endpoints

### GET `/bandeira`

Este endpoint redireciona para a imagem da bandeira do país especificado.

#### Parâmetros de Consulta (Query Parameters)

- **chave** (obrigatório): Chave de acesso para autorização. Deve ser `void-hub`.
- **pais** (obrigatório): Código do país cuja bandeira será buscada (por exemplo, `br` para Brasil).

#### Respostas

- **Redirecionamento:** Se a bandeira for encontrada, a resposta será um redirecionamento (HTTP 302) para a URL da imagem.
- **Erros:**
  - **400:** Caso o parâmetro `pais` não seja fornecido.
  - **401:** Caso a chave de acesso seja inválida.
  - **404:** Caso a bandeira não seja encontrada.
  - **500:** Caso ocorra algum erro ao buscar a bandeira.

## Exemplos

### Exemplo de Requisição Válida

```bash
curl "http://localhost:3000/bandeira?chave=void-hub&pais=br"
```

Se a requisição for bem-sucedida, o servidor irá redirecionar para a URL da imagem da bandeira do Brasil.

### Exemplo de Requisição com Erro de Autorização

```bash
curl "http://localhost:3000/bandeira?chave=chave-invalida&pais=br"
```

Resposta:

```json
{
  "status": "erro",
  "mensagem": "Não autorizado: Chave inválida"
}
```

## Licença

Este projeto é licenciado sob a [MIT License](LICENSE).

---

Sinta-se à vontade para contribuir ou abrir issues caso encontre algum problema. Obrigado por utilizar a API de Bandeiras!
```


# Backend Node.js — Data e Hora

Backend simples desenvolvido com Node.js e Express.

## Endpoints

### 1. `GET /`
Retorna a data e a hora atuais no fuso horário de Recife.

**Exemplo de resposta:**
```json
{
  "mensagem": "Data e hora atuais",
  "dataHora": "terça-feira, 28 de julho de 2026 às 13:30:00",
  "iso": "2026-07-28T16:30:00.000Z",
  "fusoHorario": "America/Recife"
}
```

### 2. `GET /health`
Retorna a verificação de saúde da aplicação.

**Exemplo de resposta:**
```json
{
  "status": "OK"
}
```

## Requisitos

- Node.js 18 ou superior / Docker
- npm

## Como executar localmente

Abra o terminal na pasta do projeto e execute:

```bash
npm install
npm start
```

O servidor ficará disponível em `http://localhost:3000`.

### Executar testes
```bash
npm test
```

## Executar com Docker

Construir a imagem Docker:
```bash
docker build -t api-data-hora .
```

Iniciar o container:
```bash
docker run -d -p 3000:3000 --name api-data-hora api-data-hora
```

## CI/CD (GitHub Actions)

O projeto possui integração contínua via GitHub Actions (`.github/workflows/ci.yml`) dividida em dois jobs:
- **`test`**: Executa os testes automatizados com Jest e Supertest.
- **`docker`**: Constrói a imagem Docker automaticamente após a validação dos testes (`needs: test`).

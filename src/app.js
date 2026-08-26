const express = require("express");

const app = express();

/**
 * Rota padrão da aplicação.
 *
 * Ao acessar:
 * http://localhost:3000/
 *
 * O servidor retorna a data e a hora atuais.
 */
app.get("/", (request, response) => {
  const agora = new Date();

  // Formata a data e a hora utilizando o padrão brasileiro.
  const dataHoraFormatada = agora.toLocaleString("pt-BR", {
    timeZone: "America/Recife",
    dateStyle: "full",
    timeStyle: "medium",
  });

  response.status(200).json({
    mensagem: "Data e hora atuais",
    dataHora: dataHoraFormatada,
    iso: agora.toISOString(),
    fusoHorario: "America/Recife",
  });
});

module.exports = app;

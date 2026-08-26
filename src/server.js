const app = require("./app");

// Define a porta do servidor.
// Caso a variável de ambiente PORT não exista, utiliza a porta 3000.
const PORT = process.env.PORT || 3000;

// Inicia o servidor.
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Servidor iniciado em http://localhost:${PORT}`);
});


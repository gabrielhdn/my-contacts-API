/*

  A política de CORS abaixo foi feita como um exemplo para casos em que seja ideal
  permitir requisições vindas de mais de uma origem, mas não de qualquer uma. Do contrário,
  seria possível setar os headers diretamente, sem nenhuma condicional.

*/

module.exports = (req, res, next) => {
  const allowedOrigins = [
    'http://localhost:3000',
    'http://localhost:3002',
  ];

  const { origin } = req.headers;
  const isAllowed = allowedOrigins.includes(origin);

  if (isAllowed) {
    // Libera requisições vindas da origem especificada no segundo parâmetro
    // Não aceita mais de uma origem nomeada, mas pode aceitar qualquer uma (*)
    res.setHeader('Access-Control-Allow-Origin', origin);

    // Libera requisições de qualquer método (GET, POST, DELETE etc)
    res.setHeader('Access-Control-Allow-Methods', '*');

    // Permite que requisições também enviem headers (qualquer um)
    res.setHeader('Access-Control-Allow-Headers', '*');

    // Define por quanto tempo (s) as informações da requisição preflight serão armazenadas em cache
    // Se o parâmetro for -1, o preflight acontece em toda requisição que não for simples
    res.setHeader('Access-Control-Max-Age', '10');
  }

  next();
};

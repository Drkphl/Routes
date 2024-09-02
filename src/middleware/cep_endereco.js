const axios = require('axios');

const cep_endereco = (req, res, next) => {
    if (req.body.cep != undefined && req.body.cep.lenght == 8 && !isNaN(Number(req.body.cep))) {
        axios.get(`https://viacep.com.br/ws/${req.body.cep}/json/`).then((resposta) => {
            req.body.endereco = reposta.data;

            delete req.body.cep;
            next();
        });
    } else {
        res.status(400).json();
    }
};
module.exports = cep_endereco;

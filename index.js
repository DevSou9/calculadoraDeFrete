const express = require('express')
const app = express()
const port = 3000
const func = require('./functions.js')
const axios = require('axios');
const xml2js = require('xml2js');

let cidade = "São Paulo";
let uf = "SP";
let produto = "Notebook";

app.get('/produto', (req, res) =>{
  func.calcularFrete(cidade, uf, produto)
  res.send("Result enviado ao Console Corretamente")
})

app.set("view engine", "pug")
app.use(express.urlencoded({extended:true}))

app.get('/', (req, res) =>{
    
    res.render("index.pug")
})
app.get('/2', (req, res) =>{    
       
    res.render("index2.pug")
})

// Rota para processar o formulário
app.get('/endereco/:cep', async (req, res) => {
    const cep = req.params.cep;
  
    try {      
      const response = await axios.get(` https://viacep.com.br/ws/${cep}/json/`);
      const dadosEndereco = response.data;  
      
      res.render('index', { endereco: dadosEndereco });
    } catch (error) {
      
      console.error(error);
      res.render('index', { erro: 'Erro ao obter os dados do endereço.' });
    }
  });   
  
  app.get('/frete/:cepOrigem/:cepDestino', async (req, res) => {
    const cepOrigem = req.params.cepOrigem;
    const cepDestino = req.params.cepDestino;
  
    const apiUrl = `http://ws.correios.com.br/calculador/CalcPrecoPrazo.aspx?nCdEmpresa=&sDsSenha=&nCdServico=41106&sCepOrigem=${cepOrigem}&sCepDestino=${cepDestino}&nVlPeso=1&nCdFormato=1&nVlComprimento=20&nVlAltura=20&nVlLargura=20&nVlDiametro=0&sCdMaoPropria=n&nVlValorDeclarado=0&sCdAvisoRecebimento=n&StrRetorno=xml&nIndicaCalculo=3`;
  
    axios.get(apiUrl)
      .then(response => {
        const data = response.data;
  
        const parser = new xml2js.Parser({ explicitArray: false });
        parser.parseString(data, (err, result) => {
          
          if (err) {
            console.error('Erro ao processar o XML:', err);
            return;
          }
  
          const servico = result.Servicos.cServico;
          const codigo = servico.Codigo;
          const valor = servico.Valor;
          const prazoEntrega = servico.PrazoEntrega;  
          const endereco = { codigo: codigo, valor: valor, prazoEntrega: prazoEntrega };  
          
          //res.render('index2', { endereco: endereco });
          res.render('index2', {endereco});
        });
      })
      .catch(error => {
        console.error(error);
      });
  });

app.listen(port, () =>{
    console.log(`Servidor Conectado na porta ${port}`);
})

/*
Isso mesmo! O req.params.cepOrigem está recebendo o valor da posição correspondente na URL. No caso da rota '/frete/:cepOrigem/:cepDestino', o Express irá capturar o valor especificado para :cepOrigem na URL e atribuí-lo a req.params.cepOrigem. Essa é uma forma de passar valores dinâmicos pela URL e acessá-los no servidor para realizar as devidas operações. Nesse caso, o valor não é enviado diretamente do arquivo index.pug, mas sim inserido na URL quando o formulário é submetido e redirecionado para a rota correspondente.
*/
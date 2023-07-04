const { default: axios } = require('axios')
const express = require('express')
const app = express()
const port = 4000
const xml2js = require('xml2js');

app.set("view engine", "pug")

app.get('/', (req, res) =>{
    res.render("teste")
})

app.listen(port, ()=>{
    console.log("Conectado Teste");
})

/*
function convXML(xmlData) {
  return new Promise((resolve, reject) => {
    const parser = new xml2js.Parser({ explicitArray: false });

    parser.parseString(xmlData, (err, result) => {
      if (err) {
        console.error('Erro ao processar o XML:', err);
        reject(err);
        return;
      }

      const servico = result.Servicos.cServico;
      const codigo = servico.Codigo;
      const valor = servico.Valor;
      const prazoEntrega = servico.PrazoEntrega;
      // Extrair outros dados necessários aqui...

      resolve({
        codigo,
        valor,
        prazoEntrega
      });
    });
  });
}
*/
/*
function calcFrete(cepOrigem, cepDestino){
      
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
        console.log(`777777777777: endereco: ${endereco}`);
        return endereco;
        
      });
    })
    .catch(error => {
      console.error(error);
    });
  }*/

  /* 
   function convXML(xmlData){
      const parser = new xml2js.Parser({ explicitArray: false });

    parser.parseString(xmlData, (err, result) => {
      if (err) {
        console.error('Erro ao processar o XML:', err);
        return;
      }

      const servico = result.Servicos.cServico;
      const codigo = servico.Codigo;
      const valor = servico.Valor;
      const prazoEntrega = servico.PrazoEntrega;
      // Extrair outros dados necessários aqui...

      console.log('Código:', codigo);
      console.log('Valor:', valor);
      console.log('Prazo de Entrega:', prazoEntrega);
      // Imprimir outros dados extraídos aqui...
     
    });
    }

  */

    /*
function infoCep(cep){      
      
      const apiUrl = `https://viacep.com.br/ws/${cep}/json/`;

      axios.get(apiUrl)
        .then(response => {
          const data = response.data;
          console.log(data);
        })
        .catch(error => {
          console.error(error);
        });
    } 
    */

    /*
    function infoCep(cep){      
      
      const apiUrl = `https://viacep.com.br/ws/${cep}/json/`;

      axios.get(apiUrl)
        .then(response => {
          const data = response.data;
          console.log(data);
        })
        .catch(error => {
          console.error(error);
        });
    }    

    */
  app.get('/frete/cepOrigem/cepDestino', async (req, res) =>{
    const cepOrigem = req.params.cepOrigem;
    const cepDestino = req.params.cepDestino;

    const apiUrl = "http://";

    axios.get(apiUrl)
      .then(response =>{
        const data = response.data;

        const parse = new xml2js.Parser({explicitArray:false})
        parse.parseString(data, (err, result) )

      });

      .catch();

  })
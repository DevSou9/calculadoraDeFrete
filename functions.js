const axios = require('axios');
const xml2js = require('xml2js');

//git function ********
    function calcularFrete(cidade, uf, produto){

        console.log(`\n Olá, boas vindas à nossa Loja.\n\n Já recebemos as informações e iremos mandar o produto ${produto} para ${cidade}\n\n`)

        let valorEstado = {"SP" : 5, "RJ": 6.5, "MG" : 7.5, "PR" : 8, "AM" : 23.5, "AC" : 23.5, "RO" : 22, "RR" : 22, "RS" : 10, "SC" : 10, "ES" : 8, "GO" : 11.5, "MT": 11.5, "MS" : 11.5, "DF" : 11.5, "AL" : 15, "BA" : 15, "CE" : 15, "MA" : 15, "PB" : 15, "PE" : 15, "PI" : 15, "RN" : 15, "SE" : 15, "AP" : 20, "PA" : 20, "TO" : 20 }
        
        cidade = cidade.replace(/\s/g,"").normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
        if (cidade === 'saopaulo') {
          console.log(" Frete Grátis para Cidade de São Paulo")
          return " Frete Grátis para Cidade de São Paulo";
          
        }
        const estados = Object.keys(valorEstado);
        for(let i = 0; i < estados.length; i++){
          if(uf.toLowerCase() === estados[i].toLowerCase()){
            console.log(` O valor do frete para cidade ${cidade} que pertencente ao Estado ${estados[i]} é ${valorEstado[estados[i]]}`);
            return ` O valor do frete para cidade ${cidade} que pertencente ao Estado ${estados[i]} é ${valorEstado[estados[i]]}`
            
          }
        }
    }        
    
    module.exports = {calcularFrete}

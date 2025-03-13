import express from 'express';
import LoginController from '../Controller/Controller-Login';
const Router = express.Router();
const controller = new LoginController();

// Parâmetros esperados no corpo da requisição: numeroAdesao, codigoAcesso
Router.post('/generate2fa', controller.generate2fa);


/*
Parâmetros esperados no corpo da requisição: 
codigo2fa, iddispositivo, sistemadispositivo, navegadordispositivo  !TODO DO TIPO STRING

Retorno 
contaid
*/
Router.post('/verify2fa', controller.verify2fa); 


Router.get('/verificalogin/:codigo2fa',controller.verificalogin);
/*
Parâmetros esperados no corpo da requisição: 
idconta, codigoacesso, pergunta, resposta  
*/
Router.post('/primeiriologin',controller.primeirologin)

export default Router;
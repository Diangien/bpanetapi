export const  codigoreferencia=(): number=> {
        let numero = '';
        for (let i = 0; i < 10; i++) {
            numero += Math.floor(Math.random() * 10);
        }
        return parseInt(numero); 
    }


    export const numerocartao=(): number => {
        let numero = "";
        for (let i = 0; i < 16; i++) {
            numero += Math.floor(Math.random() * 10).toString(); // Gera um dígito aleatório de 0 a 9 e concatena à string
        }
        return parseInt(numero, 10); // Converte a string para um número inteiro
    }
  export  const  codigodeacesso=(): number=> {
        let numero = "";
        for (let i = 0; i < 8; i++) {
            numero += Math.floor(Math.random() * 10).toString(); // Gera um dígito aleatório de 0 a 9 e concatena à string
        }
        return parseInt(numero, 10); // Converte a string para um número inteiro
    }
 export const numeroadessao=(): number => {
        let numero = "";
        for (let i = 0; i < 6; i++) {
            numero += Math.floor(Math.random() * 10).toString(); // Gera um dígito aleatório de 0 a 9 e concatena à string
        }
        return parseInt(numero, 10); // Converte a string para um número inteiro
    }

    export const createIBAN=(): string => {
            const numeroAleatorio = Math.floor(Math.random() * 100000000000000);
            const numeroFormatado = numeroAleatorio.toString().padStart(15, "0");
            return `AO06006000${numeroFormatado}`;
        }
      export const numeroconta=(): string=> {
            const numerosAleatorios = Array.from({ length: 9 }, () =>
                Math.floor(Math.random() * 10),
            ).join("");
            return `${numerosAleatorios}.30.001`;
        }
module.exports = {
    calculoCR: function (notasArray, creditosArray) {

        let sumCredito = 0;
        let sumNotas = 0;

        for (let i = 0; i < notasArray.length; i++) {
            
            let nota = notasArray[i] * creditosArray[i];
            
            sumNotas += nota;
        }

        for (let j = 0; j < creditosArray.length; j++) {

            sumCredito += creditosArray[j];
        }

        let cr = (sumNotas / sumCredito);

        function casasDecimais(num, precisao) {
            let casas = Math.pow(10, precisao);
            return Math.floor(num * casas) / casas;
        };
        
        //cr arredondando errado?? olhar isso aí
        cr = casasDecimais(cr, 1);

        return cr;

    }


}
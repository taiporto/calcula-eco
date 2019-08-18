module.exports = {
    calculoCR: function (notasArray, creditosArray) {

        let sumCredito = 0;
        let sumNotas = 0;

        for (let j = 0; j < creditosArray.length; j++) {

            sumCredito += creditosArray[j];
        }

        console.log(sumCredito);

        for (let i = 0; i < notasArray.length; i++) {
            
            let nota = notasArray[i] * creditosArray[i];
            
            sumNotas += nota;
        }
        
        //sumNotas sai errado nas do ciclo basico
        console.log(sumNotas);

        let cr = (sumNotas / sumCredito);

        console.log(cr);

        function casasDecimais(num, precisao) {
            let casas = Math.pow(10, precisao);
            return Math.floor(num * casas) / casas;
        };
        
        //cr arredondando errado?? olhar isso aí
        cr = casasDecimais(cr, 1);

        return cr;

    }


}
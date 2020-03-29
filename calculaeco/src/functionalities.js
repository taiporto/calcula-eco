module.exports = {  
    
    isEmpty: function(obj){
        return Object.keys(obj).length === 0;
    },

    //TIRAR MATERIAS Q A PESSOA N COLOCOU NADA (IMPLEMENTAR FUNÇÃO DE EXCLUIR MATÉRIAS)
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
        
        console.log(sumNotas);

        let cr = (sumNotas / sumCredito);

        console.log(cr);

        cr = cr.toFixed(1);

        let crFinal = parseFloat(cr);

        return crFinal;

    }
}






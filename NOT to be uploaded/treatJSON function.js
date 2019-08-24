	function treatJSON(result){
		
		let resultFinal;
		 if(result.length > 0){
            jsonResult = JSON.parse(JSON.stringify(result));

            creditosArray = result.map(function (item) {
                return item.creditos;
            });
			resultFinal = jsonResult;
		 }
		else{
			resultFinal = "<span>Por favor insira uma combinação válida</span>";
		}
		return resultFinal;
	}

//primeira saida
var arr = ["HNO", "H3ON", "HN3FO"]
let qualFiltro = 0;
let filtro;
let i;

for(i = 0; i < arr.length; i++){
    if(arr[i].length <= 5){
        filtro += "Filtro Normal"
    } else if(arr[i].length <= 10){
        filtro += "Filtro Específico"
    } else{
        filtro += "Filtro Duplo Específico"
    }
}


if(filtro.includes("Filtro Duplo Específico")){
    qualFiltro = "Filtro Duplo Específico"
} else if(filtro.includes("Filtro Específico")){
    qualFiltro = "Filtro Específico"
} else if(filtro.includes("Filtro Normal")){
    qualFiltro = "Filtro Normal";
}


console.log(`O filtro deve ser: ${qualFiltro}`)


//segunda saida
var arr = ["HNO3FOH", "H3O", "FOH3"]
qualFiltro = 0;
filtro;
i;

for(i = 0; i < arr.length; i++){
    if(arr[i].length <= 5){
        filtro += "Filtro Normal"
    } else if(arr[i].length <= 10){
        filtro += "Filtro Específico"
    } else{
        filtro += "Filtro Duplo Específico"
    }
}


if(filtro.includes("Filtro Duplo Específico")){
    qualFiltro = "Filtro Duplo Específico"
} else if(filtro.includes("Filtro Específico")){
    qualFiltro = "Filtro Específico"
} else if(filtro.includes("Filtro Normal")){
    qualFiltro = "Filtro Normal";
}


console.log(`O filtro deve ser: ${qualFiltro}`)
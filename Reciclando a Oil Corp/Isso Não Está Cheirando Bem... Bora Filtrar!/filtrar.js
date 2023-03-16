let lista1 = ["CO2", "CO"]
let lista2 = ["NH3", "Cl2"]
let lista3 = []

let arr = [lista1, lista2, lista3]

let qualFiltro = false;
let molecula;


if(lista1.includes("NO2") || lista2.includes("NO2") || lista3.includes("NO2")){
    molecula = "Molécula NO2"
    qualFiltro = `Filtro Específico para a ${molecula}` 
} 
else if(lista1.includes("SO2") || lista2.includes("SO2") || lista3.includes("SO2")){
    molecula = "Molécula SO2"
    qualFiltro = `Filtro Específico para a ${molecula}` 
}
else if (lista1.includes("CO") || lista2.includes("CO") || lista3.includes("CO")) {
    molecula = "Molécula CO"
    qualFiltro = `Filtro Específico para a ${molecula}` 
} 
else if(lista1.includes("FHO") || lista2.includes("FHO") || lista3.includes("FHO")){
    molecula = "Molécula FHO"
    qualFiltro = `Filtro Específico para a ${molecula}` 
} 
else{
    qualFiltro = "Filtro Simples"
}

console.log(qualFiltro)
     


//primeira entrada
let arr = ["Reflorestamento", "EsgotoTratado"];

const list = {
    Reflorestamento: "Feito",
    EsgotoTratado: "Em progresso",
    EmissaoDeCarbono: "Não feito",
    EnergiaSustentavel: "Não feito",
}


const findItem = (object, index) => Object.keys(object).filter(item => item.toString() == index);
let avaliacao;
for (let i = 0; i < arr.length; i++) {
    if (arr[i].includes("Reflorestamento")) {
        if(list.Reflorestamento == "Feito") {
            avaliacao = "Não multar";
        } else if(list.Reflorestamento == "Em progresso"){
            avaliacao = "Avaliação de progresso";
        } else if(list.Reflorestamento == "Não feito") {
            avaliacao = "Multa";
        }
        console.log(avaliacao)
    }
    
    if (arr[i].includes("EsgotoTratado")) {
        if(list.EsgotoTratado == "Feito") {
            avaliacao = "Não multar";
        } else if(list.EsgotoTratado == "Em progresso"){
            avaliacao = "Avaliação de progresso";
        } else if(list.EsgotoTratado == "Não feito") {
            avaliacao = "Multa";
        }
        console.log(avaliacao)
    }
    
    if (arr[i].includes("EmissaoDeCarbono")) {
        if(list.EmissaoDeCarbono == "Feito") {
            avaliacao = "Não multar";
        } else if(list.EmissaoDeCarbono == "Em progresso"){
            avaliacao = "Avaliação de progresso";
        } else if(list.EmissaoDeCarbono == "Não feito") {
            avaliacao = "Multa";
        }
        console.log(avaliacao)
    }
    
    if (arr[i].includes("EnergiaSustentavel")) {
        if(list.EnergiaSustentavel == "Feito") {
            avaliacao = "Não multar";
        } else if(list.EnergiaSustentavel == "Em progresso"){
            avaliacao = "Avaliação de progresso";
        } else if(list.EnergiaSustentavel == "Não feito") {
            avaliacao = "Multa";
        }
        console.log(avaliacao)
    }
    
}

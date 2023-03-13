# O Vale do Jacaranda Dourado
Exemplos das minhas resoluções na 1st edição do codecamp oferecido pela DIO

# Historia do codecamp:
o vale do jacaraandá dourado é um lugar mágico com a fauna e a flora excepcionais. Porém, está sendo explorada por uma empresa chamada Oil Corp.

Você, como um entusiasta da tecnologia e meio ambiente, está engajado com um papel de liderança na luta contra essa corporação e a favor da natureza.

Utilize seus conhecimentos para solucionar os problemas propostos nos desafios a seguir.

# Chegando no Acampamento
## Conhecendo os CleanCoders
Buscando planejar as ações para conter a Oil Corp, um acampamento foi criado e muitos CleanCoders (inclusive novos adeptos da causa) estão chegando. Com isso, para faciliar a comunicação e interação, precisamos imprimir cartões de identificação para todas as pessoas.
- o que foi feito: código com três entradas (nome, sobrenome e id) que imprime três informações no seguinte padrão: Nome: nome sobrenome ID: id

## Dividindo Para Preservar
Agora precisamos separar os CleanCoders em dois grupos, isso vai facilitar a execução de ações estratégicas. Para isso, foi definido que os IDs pares devem ir para as barracas à direita da estrada que corta o acampamento e os ímpares para a esquerda. Aproveite essa oportunidade para criar um código que verifique o ID do CleanCoder e indique para onde ele deve ir: Direita ou Esquerda.

- o que foi feito: código com entrada de id e condição para separar os grupos de acordo com o id 

## Plantando o Futuro
Pela manhã, com todos descansados, sua primeira missão será aumentar a plantação de jacarandás, árvore fundamental para a magia do vale. Para isso, é necessário plantá-los a uma certa distância um pé do outro para que nenhuma muda roube o nutriente da outra, fazendo com que algumas não se desenvolvam. Nesse sentido, é necessário que cada pé esteja a exatos 10 metros de distancia um do outro, assim conseguiremos plantar todas as mudas e evitar que algumas não se desenvolvam.

- o que foi feito: código que recebe três entradas dos valores dos metros e verifica se é possivel plantar, caso não seja, é informado se é necessário retroceder ou avançar mais alguns metros e quantos serão necessários


# O Vale e o Rio
## Examinando Árvores
Chegando no Vale, ao lado do rio Jacará-Mirim, a natureza se mostra exuberante. Porém, é necessário verificar as árvores da região estão saudáveis ou necessitando de cuidados. Para isso, durante nossa jornada até o vale, utilizamos um dispositivo de ultrassom desenvolvido por uma das CleanTechs parceiras, a Cleanduino (especializada em projetos com Arduino e JavaScript, usando o Framework Johnny-Five). Através desse dispositivo coletamos uma lista de amostras, onde cada registro tem o percentual de saúde da árvore avaliada.

- o que foi feito: no código é examinado a entrada que representa a amostra e é feito a analise se a condição for bom, aceitável ou inaceitável

## Bactériaaaaaaaa
Por conta do extrativismo e a presença humana na região, o rio Jacará-Mirim está com níveis altíssimos de plástico em todas as suas formas, em sua maioria originados de descartes irregulares da Oil Corp. Para isso, a coordenadora da expedição Camila (uma ecologista engajada e expert em Java), criou uma ecobarreira com sua equipe. Essa ecobarreira, como a palavra já diz, barra o plástico e o mantém acumulado em uma porção do rio para que depois ele seja coletado e retirado da água.

Felizmente, CleanCoders do Japão descobriram uma bactéria conhecida como Ideonella sakaiensis. Eles confirmaram que essa bactéria possui uma enzima capaz de decompor o plástico: a PETase. Essa enzima é muito eficaz e acaba com o plástico em muito menos tempo em comparação com a decomposição na natureza, que pode levar séculos.

- o que foi feito: o código analisa a quantidade de plástico e é feito o calculo de quantos dias serão necessários para o plástico chegar a 1kg ou menos

## Aplicando o Peso da Lei!
A equipe jurídica que está acompanhando vocês sugeriu que aplicassem, através da justiça, multas para a Oil Corp caso eles não comecem a tratar todas as formas que estão poluindo a região. Além de realizar protocolos de reflorestamento e cuidados com a fauna e a flora do vale, respeitando a natureza.

As atividades que demandam tratamento e atenção são: Reflorestamento, Esgoto Tratado, Emissão de Carbono e Energia Sustentável. Para cada uma delas existem três critério: Não feito, Em progresso e Feito. O que não foi feito deve receber multa, o que está em progresso avaliação de progresso e o que está feito não multar.

- o que foi feito: código que analisa cada uma de três situações de atividades e imprime o que deverá ser feito


# Reciclando a Oil Corp

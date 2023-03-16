# O Vale do Jacaranda Dourado
Exemplos das minhas resoluções na 1st edição do codecamp oferecido pela DIO

# Historia do codecamp:
o vale do jacaraandá dourado é um lugar mágico com a fauna e a flora excepcionais. Porém, está sendo explorada por uma empresa chamada Oil Corp.

Você, como um entusiasta da tecnologia e meio ambiente, está engajado com um papel de liderança na luta contra essa corporação e a favor da natureza.

Utilize seus conhecimentos para solucionar os problemas propostos nos desafios a seguir.


-----------------------------------------------------------------------------------------------------------------------------------------------------------------


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
## Parceria de Milhões, Para a Natureza
Após vocês promoverem diversas atividades a favor da natureza, a liderança e a diretoria da Oil Corp convidaram vocês para os ajudarem a preservar a natureza e a serem uma empresa sustentável. Para isso, eles precisam de ajuda para criar o algoritmo que direciona os resíduos da água para a estação de tratamento correta antes de ser descartada no rio Jacará-Mirim.

Via de regra, as moléculas que possuem até 5 caracteres passam pelo Filtro Normal, as que possuem até 10 caracteres passam pelo Filtro Específico e as que possuem mais que 10 caracteres passam pelo Filtro Duplo Especifico. Essas moléculas estão misturadas nos resíduos, se houver ao menos uma que tenha o número específico de caracteres esse resíduo já deve passar pelo filtro correto.

- o que foi feito: código que verifica o tamanho de cada conteudo na array e retorna o seu determinado filtro

## Isso Não Está Cheirando Bem... Bora Filtrar!
A Oil Corp abriu o jogo e entregou para vocês uma lista contendo vários gases que eles liberam durante a extração de óleo. Alguns desses gases são extremamente prejudiciais para a camada de ozônio e para a natureza local como: NO2, SO2, CO e FHO.

- o que foi feito: código que verifica se uma das moléculas listadas estão inclusas em uma das listas, em caso afirmativo ele imprime qual filtro será necessário para a molécula contida, em caso negativo ele imprime que o filtro deverá ser simples

## Network É Tudo!
Vocês decidem que vão enviar projetos e ideias para a Oil Corp seguir sendo mais sustentável. Uma pessoa do seu grupo diz que vocês receberam um JSON com diversos funcionários da Oil Corp, e seus emails, e que vocês deveriam tentar enviar as ideias para esses endereços. Porém, vocês devem poupar esforços e enviar esses emails somente para cargos de liderança e diretoria.

- o que foi feito: código que, analisa um JSON procurando por cargos e emails válidos, e imprime no console o nome, o cargo e seu email válido


-----------------------------------------------------------------------------------------------------------------------------------------------------------------


# Final da História
"Após a Oil Corp assumir a responsabilidade pelos danos causados ao Vale do Jacarandá Dourado, a comunidade de Clean Coders se encontra em uma encruzilhada. Enquanto alguns membros do grupo estavam prontos para dar as costas à empresa e continuar sua luta contra a degradação ambiental, outros acreditavam que trabalhar com a Oil Corp poderia ser uma oportunidade única para mudar a empresa de dentro para fora e torná-la uma aliada na luta pela preservação do meio ambiente.

Apesar das diferenças de opinião, os Clean Coders sabiam que a resiliência e a empatia eram fundamentais para encontrar uma solução que atendesse tanto aos seus princípios quanto aos interesses da Oil Corp. Eles se reuniram para discutir a situação e descobriram que, apesar de seus desentendimentos, havia um objetivo em comum: proteger o Vale do Jacarandá Dourado.

Com essa visão em mente, os Clean Coders concordaram em trabalhar com a Oil Corp, mas apenas sob a condição de que a empresa se comprometesse a mudar suas práticas e se tornar uma referência em preservação ambiental. A empresa aceitou a proposta, e juntos, os Clean Coders e a Oil Corp começaram a desenvolver projetos para minimizar os impactos ambientais e recuperar a biodiversidade do Vale do Jacarandá Dourado.

Ao longo do processo, os Clean Coders e a Oil Corp descobriram que tinham muito a aprender um com o outro. Os membros do grupo de tecnologia compartilharam suas habilidades em solucionar problemas complexos e inovar, enquanto a equipe da Oil Corp compartilhou seu conhecimento sobre a indústria e as práticas sustentáveis.

Com o tempo, a Oil Corp começou a mudar sua cultura e seus processos internos, tornando-se uma empresa líder em sustentabilidade. Os Clean Coders, por sua vez, aprenderam a importância de trabalhar com outras pessoas e empresas para criar mudanças positivas no mundo. Juntos, eles alcançaram seu objetivo de proteger o Vale do Jacarandá Dourado e inspiraram outros a se unirem em torno da preservação do meio ambiente.

No final, os Clean Coders perceberam que a resiliência e a empatia eram fundamentais para o sucesso de sua missão. Eles enfrentaram desafios difíceis, mas permaneceram firmes em seus valores e encontraram um caminho que beneficiou a todos. Eles perceberam que, em vez de lutar contra a Oil Corp, eles poderiam trabalhar juntos para criar um mundo melhor para todos."

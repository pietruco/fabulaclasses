/* ── PODERES HEROICOS ─────────────────────────────────────────
   Cada poder tem:
   - id, nome, requisito (texto), classes (array de ids de classe),
     todosPersonagens (bool), descricao
──────────────────────────────────────────────────────────── */
const PODERES_HEROICOS = [

  /* ── DISPONÍVEIS A TODOS ──────────────────────────────── */
  {
    id: "ambidestria",
    nome: "Ambidestria",
    todosPersonagens: true,
    classes: [],
    requisito: "Disponível a todos os personagens.",
    descricao: "Você pode aplicar os benefícios de luta com duas armas a qualquer arma, mesmo às que pertencem a categorias diferentes ou que uma seja corpo a corpo e outra seja à distância (como adaga e arma de fogo)."
  },
  {
    id: "feiticos-extras",
    nome: "Feitiços Extras",
    todosPersonagens: true,
    classes: [],
    requisito: "Disponível a todos os personagens.",
    descricao: "Quando adquirir este poder, aprenda dois feitiços de uma das seguintes listas: Elementalista, Entropista ou Espiritualista. Ambos os feitiços devem ser da mesma lista e seguir as regras padrão de conjuração da respectiva classe."
  },
  {
    id: "pm-extras",
    nome: "PM Extras",
    todosPersonagens: true,
    classes: [],
    requisito: "Disponível a todos os personagens.",
    descricao: "Aumente permanentemente seus PM máximos em 10. Se estiver no 40° nível ou acima, esses PM adicionais aumentam para 20."
  },
  {
    id: "pi-extras",
    nome: "PI Extras",
    todosPersonagens: true,
    classes: [],
    requisito: "Disponível a todos os personagens.",
    descricao: "Aumente permanentemente seus PI máximos em 4."
  },
  {
    id: "pv-extras",
    nome: "PV Extras",
    todosPersonagens: true,
    classes: [],
    requisito: "Disponível a todos os personagens.",
    descricao: "Aumente permanentemente seus PV máximos em 10. Se estiver no 40° nível ou acima, esses PV adicionais aumentam para 20."
  },

  /* ── COM REQUISITO DE CLASSE ──────────────────────────── */
  {
    id: "adversidade",
    nome: "Adversidade",
    todosPersonagens: false,
    classes: ["guerreiro-sombrio"],
    requisito: "Dominar a classe Guerreiro Sombrio.",
    descricao: "Enquanto estiver sofrendo uma ou mais condições, você ganha +1 em todos os testes e causa 2 de dano adicional (com Arcanos, ataques, feitiços, itens ou qualquer outro método) para cada condição que estiver sofrendo."
  },
  {
    id: "ataque-poderoso",
    nome: "Ataque Poderoso",
    todosPersonagens: false,
    classes: ["furioso", "mestre-de-armas"],
    requisito: "Dominar a classe Furioso ou Mestre de Armas.",
    descricao: "Quando você atinge uma ou mais criaturas com um ataque corpo a corpo, esse ataque causa 5 pontos de dano adicional a cada criatura. Se estiver no 40° nível ou acima, esse dano adicional aumenta para 10."
  },
  {
    id: "bolsos-fundos",
    nome: "Bolsos Fundos",
    todosPersonagens: false,
    classes: ["inventor"],
    requisito: "Dominar a classe Inventor.",
    descricao: "Quando usa PI, você gasta 1 PI a menos (mínimo 1)."
  },
  {
    id: "cometa",
    nome: "Cometa",
    todosPersonagens: false,
    classes: ["entropista"],
    requisito: "Dominar a classe Entropista.",
    descricao: "Você aprende o feitiço supremo de Entropista: Cometa. PM: 50 · Alvo: especial · Duração: instantânea. Você abre um grande portal do Cosmos, convocando uma rocha astral do vazio avassalador. Escolha uma opção: uma criatura que você possa ver sofre 60 de dano; ou um número qualquer de criaturas que você possa ver: cada uma sofre 40 de dano. Se estiver no 20° nível ou acima, esses danos aumentam em +5; se estiver no 40° nível ou acima, aumentam em +10. Esses danos não têm tipo (portanto, não são afetados por Afinidades a dano)."
  },
  {
    id: "companheiro-heroico",
    nome: "Companheiro Heroico",
    todosPersonagens: false,
    classes: ["andarilho"],
    requisito: "Dominar a classe Andarilho e ter o poder Companheiro Fiel.",
    descricao: "O vínculo com seu companheiro fica mais forte. Você ganha os seguintes benefícios: os PV máximos do companheiro aumentam em 10; escolha um dos Atributos do companheiro (Destreza, Vigor, Astúcia ou Vontade) — o dado básico do Atributo escolhido aumenta em um passo (máximo d12); o companheiro ganha um poder adicional. Quando você alcançar o 40° nível, o companheiro ganha mais um poder."
  },
  {
    id: "desalmado",
    nome: "Desalmado",
    todosPersonagens: false,
    classes: ["guerreiro-sombrio"],
    requisito: "Dominar a classe Guerreiro Sombrio.",
    descricao: "Quando atinge uma criatura com um ataque, se apenas essa criatura for o alvo e você tiver um Laço com ela, pode gastar a metade de seus PV atuais (arredondada para baixo). Se fizer isso, o ataque causa 【10 vezes a força de seu Laço com o alvo】 de dano adicional. Este poder só pode ser usado uma vez em cada um de seus turnos em um conflito."
  },
  {
    id: "dominio-quimerico",
    nome: "Domínio Quimérico",
    todosPersonagens: false,
    classes: ["quimerista"],
    requisito: "Dominar a classe Quimerista.",
    descricao: "Escolha duas espécies entre construto, demônio, elemental e morto-vivo. Você pode usar seu poder Imitação Mágica para aprender feitiços de criaturas das espécies escolhidas. Este poder heroico pode ser adquirido até duas vezes. Sempre que adquirir este poder, você aumenta seu limite de feitiços memorizados de Quimerista em +2."
  },
  {
    id: "ecos-arcanos",
    nome: "Ecos Arcanos",
    todosPersonagens: false,
    classes: ["arcanista"],
    requisito: "Dominar a classe Arcanista.",
    descricao: "Se os domínios de um ou mais Arcanos vinculados a você forem aplicáveis a um teste para apagar ou preencher uma ou mais seções de um relógio, ao obter sucesso no teste, você pode apagar ou preencher uma seção adicional desse relógio. O mestre tem a palavra final se um domínio é aplicável ou não."
  },
  {
    id: "esperanca",
    nome: "Esperança",
    todosPersonagens: false,
    classes: ["espiritualista"],
    requisito: "Dominar a classe Espiritualista.",
    descricao: "Você aprende o feitiço supremo de Espiritualista: Esperança. PM: 40 · Alvo: especial · Duração: instantânea. Você reacende as chamas da coragem de um herói derrotado. Escolha um PJ que tenha se rendido e ainda esteja presente na cena: esse alvo imediatamente recobra a consciência e recupera PV igual à metade dos seus PV máximos. Este feitiço não cancela as consequências pela rendição. Um PJ só pode ser afetado por esse feitiço uma vez por cena."
  },
  {
    id: "feitico-poderoso",
    nome: "Feitiço Poderoso",
    todosPersonagens: false,
    classes: ["elementalista", "entropista", "espiritualista", "quimerista"],
    requisito: "Dominar a classe Elementalista, Entropista, Espiritualista ou Quimerista.",
    descricao: "Quando você lança um feitiço que causa dano a uma ou mais criaturas, esse feitiço causa 5 pontos de dano adicional a cada criatura. Se estiver no 40° nível ou acima, esse dano adicional aumenta para 10."
  },
  {
    id: "golpe-tempestuoso",
    nome: "Golpe Tempestuoso",
    todosPersonagens: false,
    classes: ["mestre-de-armas"],
    requisito: "Dominar a classe Mestre de Armas.",
    descricao: "Quando faz um ataque corpo a corpo com a propriedade multi, se você escolher como alvo apenas uma criatura, o ataque causa 5 pontos de dano adicional se tiver multi (2) ou 10 pontos de dano adicional se tiver multi (3 ou mais)."
  },
  {
    id: "imbativel",
    nome: "Imbatível",
    todosPersonagens: false,
    classes: ["guardião"],
    requisito: "Dominar a classe Guardião.",
    descricao: "Uma vez por cena, quando estiver prestes a ficar com 0 PV, em vez disso você pode resistir à dor e ficar com exatamente 1 PV."
  },
  {
    id: "imunidade-a-condicao",
    nome: "Imunidade à Condição",
    todosPersonagens: false,
    classes: ["andarilho"],
    requisito: "Dominar a classe Andarilho.",
    descricao: "Você se torna Imune a uma única condição à sua escolha."
  },
  {
    id: "matematica",
    nome: "Matemágica",
    todosPersonagens: false,
    classes: ["erudito"],
    requisito: "Dominar a classe Erudito.",
    descricao: "Quando lança um feitiço com alvo 'uma criatura', você pode dobrar seu custo total de PM. Se fizer isso, escolha um Atributo (Destreza, Vigor, Astúcia ou Vontade) e um tipo de dado (d6, d8, d10 ou d12). O feitiço passa a ter como alvo todas as criaturas em cena cujo dado atual de Atributo seja o que você escolheu, quer sejam amigáveis ou adversárias."
  },
  {
    id: "mao-de-gorila",
    nome: "Mão de Gorila",
    todosPersonagens: false,
    classes: ["furioso"],
    requisito: "Dominar a classe Furioso.",
    descricao: "Você pode equipar armas de duas mãos das categorias espada, lança, malho ou pesada em um único espaço de mão. Você consegue usufruir dos benefícios de luta com duas armas empunhando um par de armas de duas mãos ou equipando uma arma de duas mãos no espaço dominante e um escudo no secundário."
  },
  {
    id: "melhoria",
    nome: "Melhoria",
    todosPersonagens: false,
    classes: ["inventor"],
    requisito: "Dominar a classe Inventor.",
    descricao: "Uma vez por descanso, você pode escolher uma opção: adicionar uma habilidade a uma única arma, armadura ou escudo que não tenha nenhuma; ou trocar a habilidade atual de uma única arma, armadura ou escudo. Escolha uma habilidade da lista padrão para o tipo de item (custo ≤ +1.000 zênites). Você perde zênites igual ao dobro do modificador de custo da habilidade. O item fica pronto no fim do descanso."
  },
  {
    id: "mira-perfeita",
    nome: "Mira Perfeita",
    todosPersonagens: false,
    classes: ["atirador"],
    requisito: "Dominar a classe Atirador e ter o poder Tiro de Aviso.",
    descricao: "Quando atinge uma ou mais criaturas com um ataque à distância e escolhe não causar dano para usar o poder Tiro de Aviso, você pode escolher duas opções em vez de uma; por exemplo, você poderia deixar cada criatura abalada e lenta ao mesmo tempo."
  },
  {
    id: "muralha",
    nome: "Muralha",
    todosPersonagens: false,
    classes: ["guardião"],
    requisito: "Dominar a classe Guardião.",
    descricao: "No início da primeira rodada de cada cena de conflito, você é Resistente a todos os tipos de dano e não pode sofrer condições (mas não se recupera de condições anteriores). Este benefício dura até o fim da primeira rodada."
  },
  {
    id: "pilhar",
    nome: "Pilhar",
    todosPersonagens: false,
    classes: ["ladino"],
    requisito: "Dominar a classe Ladino e ter o poder Roubo de Alma.",
    descricao: "Quando usa Roubo de Alma, você pode escolher como alvo um número qualquer de criaturas ao mesmo tempo (faça um único teste e compare-o à Defesa Mágica de cada criatura que deseja furtar)."
  },
  {
    id: "previsivel",
    nome: "Previsível!",
    todosPersonagens: false,
    classes: ["erudito"],
    requisito: "Dominar a classe Erudito.",
    descricao: "Em um conflito, você pode gastar uma ação e 20 PM para antecipar os próximos movimentos de uma criatura que você possa ver, desde que conheça dois ou mais Traços dela. Se fizer isso, escolha um tipo de ação entre Ataque, Feitiço, Guarda, Objetivo ou Poder. Até o início do seu próximo turno, a criatura deve gastar 20 PM sempre que quiser fazer a ação escolhida. Se não puder, ela deve fazer uma ação diferente."
  },
  {
    id: "repeticao",
    nome: "Repetição",
    todosPersonagens: false,
    classes: ["orador"],
    requisito: "Dominar a classe Orador.",
    descricao: "Uma vez por turno em um conflito, após usar o poder Condenar ou Encorajar, você pode imediatamente reutilizá-lo (no mesmo alvo ou em outro). Você ainda deve pagar o custo em PM por esse segundo uso do poder."
  },
  {
    id: "revelacao",
    nome: "Revelação",
    todosPersonagens: false,
    classes: ["arcanista"],
    requisito: "Dominar a classe Arcanista.",
    descricao: "Você faz contato com um Arcano desconhecido, vinculando-o à sua alma. Esse Arcano deve ser criado em conjunto com o grupo; enquanto você viver, ninguém mais no seu mundo pode se vincular ao Arcano criado. Uma vez por cena, enquanto estiver fundido a um Arcano, você pode usar uma ação e gastar 2 Pontos de Fábula para acionar o efeito de dispensa desse Arcano (se houver) sem dispensá-lo."
  },
  {
    id: "retorica-desarmante",
    nome: "Retórica Desarmante",
    todosPersonagens: false,
    classes: ["orador"],
    requisito: "Dominar a classe Orador.",
    descricao: "Durante uma cena de conflito, você pode gastar uma ação para escolher uma criatura de patente soldado que possa ouvir e entender você. Se essa criatura estiver abalada ou em crise, você pode gastar PM igual a 【20 + metade do nível da criatura alvo】 para fazer com que ela saia do conflito de maneira pacífica."
  },
  {
    id: "sumir",
    nome: "Sumir",
    todosPersonagens: false,
    classes: ["ladino"],
    requisito: "Dominar a classe Ladino.",
    descricao: "Quando atinge uma ou mais criaturas com um ataque, você pode gastar 1 Ponto de Fábula. Se fizer isso, até o início do seu próximo turno, nenhuma dessas criaturas pode fazer qualquer ação em que precise enxergar você."
  },
  {
    id: "tiro-poderoso",
    nome: "Tiro Poderoso",
    todosPersonagens: false,
    classes: ["atirador"],
    requisito: "Dominar a classe Atirador.",
    descricao: "Quando atinge uma ou mais criaturas com um ataque à distância, esse ataque causa 5 pontos de dano adicional a cada criatura. Se estiver no 40° nível ou acima, esse dano adicional aumenta para 10."
  },
  {
    id: "vulcao",
    nome: "Vulcão",
    todosPersonagens: false,
    classes: ["elementalista"],
    requisito: "Dominar a classe Elementalista.",
    descricao: "Você aprende o feitiço supremo de Elementalista: Vulcão. PM: 40 · Alvo: especial · Duração: instantânea. Você canaliza a fúria do planeta em uma poderosa onda de fogo e magma. Escolha uma opção: uma criatura que você possa ver sofre 50 pontos de dano de fogo; ou escolha um número qualquer de criaturas que você possa ver e cada uma sofre 30 de dano de fogo. Se estiver no 20° nível ou acima, esse dano aumenta em 5; se estiver no 40° nível ou acima, aumenta em 10. Dano causado por este feitiço ignora Resistências e Imunidades."
  },

  /* ── NOVOS PODERES HEROICOS (Dia das Bruxas + expansões) ── */
  {
    id: "anatomista",
    nome: "Anatomista",
    todosPersonagens: false,
    classes: ["atirador", "erudito", "furioso", "mestre-de-armas"],
    requisito: "Dominar uma ou mais classes entre Atirador, Erudito, Furioso e Mestre de Armas; ter o poder Conhecimento é Poder.",
    descricao: "Sempre que adquirir este poder heroico, escolha duas espécies entre construto, demônio, elemental, fera, monstro, morto-vivo e planta. Ao causar dano a um humanoide ou a uma criatura de uma das espécies escolhidas, você pode escolher um: você causa 5 pontos de dano adicional a esta criatura; ou esta criatura fica desorientada até o fim da cena. Uma criatura desorientada que recupera PV e/ou PM recupera apenas metade da quantidade normal e deixa de estar desorientada. Este poder heroico pode ser adquirido até três vezes."
  },
  {
    id: "cancela-do-lampiao",
    nome: "Cancela do Lampião",
    todosPersonagens: false,
    classes: ["bandoleiro"],
    requisito: "Dominar a classe Bandoleiro.",
    descricao: "Quando for alvo de um mesmo poder ou feitiço durante uma mesma cena, você pode gastar 1 Ponto de Fábula para se tornar imune aos efeitos desse poder ou feitiço até o fim da cena. Se você gastar 1 Ponto de Ultima em vez do Ponto de Fábula, também recupera 10 PV."
  },
  {
    id: "cargas-radiantes",
    nome: "Cargas Radiantes",
    todosPersonagens: false,
    classes: ["astrologo"],
    requisito: "Dominar a classe Astrólogo.",
    descricao: "Quando gerar cargas de qualquer tipo (celeste, estelar, meteórica e solar), você pode gastar 5 PM para transformar uma das cargas geradas em uma carga cósmica, que pode ser consumida como uma carga de qualquer tipo à sua escolha. Além disso, você pode consumir uma carga cósmica sempre que fizer um inimigo perder PV ou um aliado recuperar PV. Se fizer isso, o número de PV respectivamente perdidos ou recuperados aumenta em 10."
  },
  {
    id: "ceifeiro-do-pesar",
    nome: "Ceifeiro do Pesar",
    todosPersonagens: false,
    classes: ["entropista", "necromante"],
    requisito: "Dominar uma ou mais classes entre Entropista e Necromante; aprender ambos os feitiços Drenar Espírito e Drenar Vigor.",
    descricao: "Quando lança Drenar Espírito ou Drenar Vigor, a quantidade de PV ou PM que você recupera é respectivamente igual à perda de PM ou de PV sofrida pelo alvo (em vez da metade). Além disso, se estiver no 20° nível ou acima, seu Drenar Espírito faz o alvo perder 【RA + 20】 PM; se estiver no 40° nível ou acima, faz perder 【RA + 25】 PM."
  },
  {
    id: "corte-infernal",
    nome: "Corte Infernal",
    todosPersonagens: false,
    classes: ["elementalista", "guerreiro-sombrio", "piloto"],
    requisito: "Dominar uma ou mais classes entre Elementalista, Guerreiro Sombrio e Piloto; ter o poder Golpe das Sombras.",
    descricao: "Ao usar Golpe das Sombras, você pode escolher fogo ou gelo. Se fizer isso, todo dano causado por este ataque torna-se do tipo escolhido em vez de trevas (esse tipo não pode mudar) e você torna-se Resistente ao tipo de dano não escolhido até o início de seu próximo turno. Ao fazer um ataque livre com uma arma corpo a corpo como parte de Golpe das Sombras, este ataque pode atingir inimigos que só podem ser escolhidos como alvos de ataques à distância."
  },
  {
    id: "dragao-empalador",
    nome: "Dragão Empalador",
    todosPersonagens: false,
    classes: ["comandante", "guerreiro-sombrio"],
    requisito: "Dominar uma ou mais classes entre Comandante e Guerreiro Sombrio; ter os poderes Carga de Cavalaria e Golpe das Sombras.",
    descricao: "Ao usar Golpe das Sombras, você pode considerar sua RA como 0 ao determinar o dano causado pelo ataque. Se fizer isso, após resolver o ataque de Golpe das Sombras, você pode imediatamente usar Carga de Cavalaria sem usar uma ação (pagando seu custo em PM)."
  },
  {
    id: "empresta-aqui",
    nome: "Empresta Aqui!",
    todosPersonagens: false,
    classes: ["forjador-de-almas"],
    requisito: "Dominar a classe Forjador de Almas.",
    descricao: "Quando um aliado dentro do alcance dos seus ataques corpo a corpo errar um ataque usando uma arma equipada que tem uma de suas runas incrustadas, você pode fazer um ataque livre usando essa mesma arma."
  },
  {
    id: "esta-vivo",
    nome: "Está Vivo!",
    todosPersonagens: false,
    classes: ["andarilho", "inventor"],
    requisito: "Dominar uma ou mais classes entre Andarilho e Inventor; ter os poderes Companheiro Fiel (construto) e Visionário.",
    descricao: "A Afinidade do seu companheiro a dano de raio torna-se Absorção e os PV máximos dele aumentem em um número igual a (2 × seu NP em Visionário). Quando seu companheiro causar dano, se ele não tiver armas equipadas, causa dano adicional igual a (seu NP em Visionário)."
  },
  {
    id: "fagomago",
    nome: "Fagomago",
    todosPersonagens: false,
    classes: ["entropista", "gourmet", "mutante", "quimerista"],
    requisito: "Dominar uma ou mais classes entre Entropista, Gourmet, Mutante e Quimerista.",
    descricao: "Quando lança Dissipar, o custo de PM desse feitiço torna-se '10 × A' e o alvo torna-se 'Até três criaturas'. Ao fazer um ou mais inimigos deixarem de ser afetados por feitiços com duração 'Cena', escolha um: você recupera 20 PM para cada feitiço encerrado; ou aplique uma cópia do efeito desse feitiço em você mesmo."
  },
  {
    id: "fluxo-yin-yang",
    nome: "Fluxo de Yin e Yang",
    todosPersonagens: false,
    classes: ["astrologo", "elementalista", "esper", "dançarino", "invocador"],
    requisito: "Dominar uma ou mais classes entre Astrólogo, Elementalista, Esper, Dançarino e Invocador.",
    descricao: "Ao causar dano físico, de gelo, de terra ou de trevas pela primeira vez em um turno, você recebe 1 Ponto de Yin e, se tiver pelo menos 1 Ponto de Yang, causa 5 pontos de dano adicional. Ao causar dano de ar, fogo, luz ou raio pela primeira vez em um turno, você recebe 1 Ponto de Yang e, se tiver pelo menos 1 Ponto de Yin, causa 5 pontos de dano adicional. No fim do turno, se tiver 3+ Pontos de Yin e/ou Yang e ao menos 1 de cada, perca todos e aplique: Maioria Yin — cada inimigo perde PM igual a (metade do seu nível); Maioria Yang — uma criatura que você veja recupera PM igual a (seu nível)."
  },
  {
    id: "instinto-assassino",
    nome: "Instinto Assassino",
    todosPersonagens: false,
    classes: ["lamina-carmesim"],
    requisito: "Dominar a classe Lâmina Carmesim.",
    descricao: "Quando acerta uma criatura em crise com um ataque corpo a corpo, esse ataque causa 10 pontos de dano adicional. Se estiver no 40° nível ou acima, esse dano adicional aumenta para 20."
  },
  {
    id: "lido-como-livro",
    nome: "Lido Como um Livro",
    todosPersonagens: false,
    classes: ["erudito", "esper", "ladino", "malandro"],
    requisito: "Dominar uma ou mais classes entre Erudito, Esper, Ladino e Malandro; ter o poder Roubo de Alma.",
    descricao: "Ao ter sucesso em Roubo de Alma contra um ou mais inimigos, você pode escolher um deles e fazer a ação Estudo sem usar uma ação, usando o resultado do teste de Roubo de Alma. Ao causar dano a um inimigo de patente elite ou campeão cujo tesouro da alma você roubou nesta cena, você causa dano adicional igual a (seu NP em Roubo de Alma)."
  },
  {
    id: "maestria-de-ofuda",
    nome: "Maestria de Ofuda",
    todosPersonagens: false,
    classes: ["arcanista", "mercador", "simbolista"],
    requisito: "Dominar uma ou mais classes entre Arcanista, Mercador e Simbolista; ter o poder Simbolismo.",
    descricao: "Ao usar Simbolismo em um conflito, você pode gastar 20 PM para ignorar o custo normal em PI deste poder. Ao fazer um ataque livre com uma arma corpo a corpo como parte do uso de Simbolismo, este ataque pode atingir inimigos que só podem ser escolhidos como alvos de ataques à distância."
  },
  {
    id: "mestre-de-duelos",
    nome: "Mestre de Duelos",
    todosPersonagens: false,
    classes: ["atirador", "carteador", "furioso", "ladino", "mestre-de-armas"],
    requisito: "Dominar uma ou mais classes entre Atirador, Carteador, Furioso, Ladino e Mestre de Armas; ter o poder Cartas Mágicas.",
    descricao: "Ao usar o efeito de Par Mágico, se você atacar com uma arma arcana ou arremessável, você causa dano adicional igual a (o valor em comum das cartas resolvidas) e recupera PM igual a (2 × o valor em comum das cartas resolvidas). Por exemplo, resolver um par de 5 causa 5 pontos de dano adicional e recupera 10 PM."
  },
  {
    id: "multifuncao",
    nome: "Multifunção",
    todosPersonagens: false,
    classes: ["forjador-de-almas"],
    requisito: "Dominar a classe Forjador de Almas.",
    descricao: "Quando uma criatura faz a ação Objetivo enquanto está equipada com um item que tem uma de suas runas incrustada, ela recebe +1 no teste da ação."
  },
  {
    id: "nascimento-da-crueldade",
    nome: "Nascimento da Crueldade",
    todosPersonagens: false,
    classes: ["necromante"],
    requisito: "Dominar a classe Necromante.",
    descricao: "Após a morte de um NPC que não seja um vilão, que você possa ver e que não seja uma fera, humanoide, monstro ou planta, você pode gastar 2 Pontos de Túmulo e reduzir seus PV e PM máximos em um número igual ao nível desse NPC. Se fizer isso, o cadáver se torna um lacaio que obedece a seus comandos telepáticos. Ele se torna morto-vivo, tem patente soldado, recebe todos os PV e PM máximos e age em seu próprio turno. Se destruído, seus PV e PM máximos voltam ao normal."
  },
  {
    id: "papinho-amigavel",
    nome: "Papinho Amigável",
    todosPersonagens: false,
    classes: ["malandro"],
    requisito: "Dominar a classe Malandro.",
    descricao: "Durante uma cena de conflito, você pode usar uma ação para escolher uma criatura de patente soldado que possa ouvir e entender você. Se essa criatura estiver abalada ou em crise, você pode gastar PM igual a 【30 + metade do nível da criatura alvo】 para convencê-la a lutar por você. Você pode controlar a ficha dela por uma quantidade de turnos igual a (seu nível ÷ 10)."
  },
  {
    id: "poder-da-amizade",
    nome: "Poder da Amizade",
    todosPersonagens: false,
    classes: ["cavaleiro-magico"],
    requisito: "Dominar a classe Cavaleiro Mágico.",
    descricao: "Uma vez por cena, enquanto estiver sob o efeito de uma forma mágica, você pode gastar uma ação e PM igual a (5 × o número de PJs presentes na cena com os quais você tem um Laço) para fazer um ataque em grupo contra uma única criatura. Você e cada um desses personagens faz um ataque livre (RA = 0 para o dano). Após resolver todos os ataques, a criatura sofre (10 × a soma da força dos Laços) de dano adicional de luz. No 20°+ nível, +10; no 40°+ nível, +20."
  },
  {
    id: "preto-e-branco",
    nome: "Preto e Branco",
    todosPersonagens: false,
    classes: ["carteador", "entropista", "espiritualista", "guerreiro-sombrio"],
    requisito: "Dominar uma ou mais classes entre Carteador, Entropista, Espiritualista e Guerreiro Sombrio; ter o poder Cartas Mágicas.",
    descricao: "Ao usar o efeito de Encrenca em Dobro, você pode fazer com que todo o dano causado por ele se torne do tipo luz ou trevas (em vez de ser de um tipo correspondente aos naipes das cartas usadas). Além disso, enquanto tiver um curinga em sua pilha de descarte, todo dano causado por Encrenca em Dobro, Flush Mágico e Flush Ofuscante ignora Imunidades e Resistências."
  },
  {
    id: "pulso-das-larvas",
    nome: "Pulso das Larvas",
    todosPersonagens: false,
    classes: ["necromante"],
    requisito: "Dominar a classe Necromante.",
    descricao: "Enquanto tiver pelo menos 1 Ponto de Túmulo, você tem Imunidade a dano de trevas e veneno, Resistência a dano físico e Vulnerabilidade a dano de luz. Essas Afinidades substituem quaisquer outras que você tenha para esses tipos de dano e não podem ser alteradas de maneira alguma enquanto tiver pelo menos 1 Ponto de Túmulo."
  },
  {
    id: "raizes-simbioticas",
    nome: "Raízes Simbióticas",
    todosPersonagens: false,
    classes: ["andarilho", "floralista", "mutante", "quimerista"],
    requisito: "Dominar uma ou mais classes entre Andarilho, Floralista, Mutante e Quimerista; ter o poder Companheiro Fiel (construto).",
    descricao: "Ao recuperar PV, você pode escolher recuperar apenas a metade. Se fizer isso, seu companheiro recupera a mesma quantidade de PV. No fim de seu turno em um conflito, se os PV atuais do seu companheiro forem iguais ou maiores que os PV máximos e ele não tiver feito ações neste turno, você pode ordenar que ele faça um ataque livre."
  },
  {
    id: "redistribuicao-aprimorada",
    nome: "Redistribuição Aprimorada",
    todosPersonagens: false,
    classes: ["bandoleiro"],
    requisito: "Dominar a classe Bandoleiro e ter o poder Redistribuir Riquezas.",
    descricao: "O limite de Pontos de Ultima que você pode acumular com Redistribuir Riquezas aumenta para 3, mas você ainda continua limitado a roubar somente 1 Ponto de Ultima quando usa esse poder."
  },
  {
    id: "rito-proibido",
    nome: "Rito Proibido",
    todosPersonagens: false,
    classes: ["arcanista", "carteador"],
    requisito: "Dominar uma ou mais classes entre Arcanista e Carteador; ter adquirido pelo menos NP 3 em Cartas Mágicas.",
    descricao: "Enquanto houver uma ou mais cartas em sua pilha de descarte, você tem Resistência ao tipo de dano correspondente ao naipe da carta no topo da pilha (se for um curinga, Resistência a ar, fogo, gelo e terra). Você também adiciona o efeito Monarca Proibido à lista de conjuntos: 4 cartas do mesmo valor + nenhum coringa + 1 coringa — você causa 777 pontos de dano a cada inimigo presente na cena (luz se o valor for par; trevas se for ímpar). Se houver um curinga na pilha de descarte, o dano ignora Imunidades e Resistências."
  },
  {
    id: "sacrificio-arcano",
    nome: "Sacrifício Arcano",
    todosPersonagens: false,
    classes: ["arcanista", "guardião"],
    requisito: "Dominar uma ou mais classes entre Arcanista e Guardião.",
    descricao: "Uma vez por cena, quando você e/ou um ou mais aliados que você possa ver forem reduzidos a 0 PV, se você estiver fundido a um Arcano, em vez disso, podem ficar com exatamente 1 PV. Se fizer isso, você deve dispensar esse Arcano imediatamente (sem usar qualquer efeito de dispensar) e não pode invocá-lo novamente até o fim da cena."
  },
  {
    id: "sede-de-sangue",
    nome: "Sede de Sangue",
    todosPersonagens: false,
    classes: ["guerreiro-sombrio", "lamina-carmesim"],
    requisito: "Dominar uma ou mais classes entre Guerreiro Sombrio e Lâmina Carmesim.",
    descricao: "Quando uma criatura faz você entrar em crise, você pode criar um Laço de ódio com ela."
  },
  {
    id: "segredo-grande-caldeiron",
    nome: "Segredo do Grande Caldeirão",
    todosPersonagens: false,
    classes: ["inventor"],
    requisito: "Dominar a classe Inventor e ter o poder Engenhocas (Alquimia: superior).",
    descricao: "Quando criar uma poção por meio de Alquimia, você pode considerar que o resultado do dado que define o alvo é 13 ou 17 (mesmo se o dado mostrar outro número)."
  },
  {
    id: "tatica-asa-quebrada",
    nome: "Tática da Asa Quebrada",
    todosPersonagens: false,
    classes: ["comandante", "guardião"],
    requisito: "Dominar uma ou mais classes entre Comandante e Guardião.",
    descricao: "Depois que um inimigo que você possa ver fizer um teste de Precisão ou de Magia para um feitiço ofensivo no turno dele em um conflito, você pode conceder um bônus de +3 ao resultado desse teste. Se fizer isso, escolha um: você e cada aliado que possa escutá-lo torna-se Resistente a todos os tipos de dano até o fim deste turno; ou você e cada aliado que possa escutá-lo causa 5 pontos de dano adicional até o fim deste turno. Após usar este poder, você não pode reutilizá-lo até o início do seu próximo turno."
  },
  {
    id: "truque-do-cacador",
    nome: "Truque do Caçador",
    todosPersonagens: false,
    classes: ["atirador", "mestre-de-armas"],
    requisito: "Dominar uma ou mais classes entre Atirador e Mestre de Armas.",
    descricao: "Ao transformar uma arma personalizada mutável durante o seu turno, escolha um: se você não tiver feito ataques neste turno, o próximo ataque que fizer com esta arma causa 5 pontos de dano adicional; ou se você atingir uma ou mais criaturas com um ataque usando esta arma neste turno, você recupera 5 PV e 5 PM."
  },
  {
    id: "vanguarda-das-cartas",
    nome: "Vanguarda das Cartas",
    todosPersonagens: false,
    classes: ["carteador"],
    requisito: "Dominar a classe Carteador e ter o poder Cartas Mágicas.",
    descricao: "Durante um conflito, se você tiver duas ou menos cartas de vanguarda em jogo, você pode usar uma ação para baixar 1 carta da mão como carta de vanguarda (com a face para baixo) e comprar 1 carta do baralho. Ao sofrer dano, se tiver cartas de vanguarda em jogo, você pode revelar uma: se for curinga ou o naipe corresponder ao tipo de dano sofrido, você não sofre dano e recupera PM em quantidade igual ao dano que sofreria. No fim de cada conflito, embaralhe as cartas de vanguarda de volta ao baralho."
  },
  {
    id: "voz-da-bruxaria",
    nome: "Voz da Bruxaria",
    todosPersonagens: false,
    classes: ["orador", "virtuoso"],
    requisito: "Dominar uma ou mais classes entre Orador e Virtuoso.",
    descricao: "Após um ou mais inimigos sofrerem uma ou mais condições devido a um verso que você cantou ou devido ao seu Condenar, cada um desses inimigos também fica enfeitiçado. Uma criatura enfeitiçada deve sempre incluir você entre os alvos de ataques e feitiços ofensivos e se recupera dessa condição no início de seu próximo turno ou assim que se recuperar de uma ou mais condições."
  },

  /* ── SEGUNDA LEVA DE NOVOS PODERES ────────────────────── */
  {
    id: "acromorfose-maior",
    nome: "Acromorfose Maior",
    todosPersonagens: false,
    classes: ["mutante"],
    requisito: "Dominar a classe Mutante e ter o poder Acromorfose.",
    descricao: "Você recebe benefícios com base na categoria atual dos seus ataques desarmados: Adaga/arcana/arremesso/luta — seus ataques desarmados consideram a Defesa de cada alvo como sendo igual ao dado de Astúcia atual do alvo. Arco/espada — ataques com duas ou mais criaturas como alvo causam 5 pontos de dano adicional. Arma de fogo/pesada — causam 5 pontos de dano adicional a construtos e 5 pontos a criaturas com escudo e/ou armadura marcial. Lança/malho — sua Defesa aumenta em +2 e seus ataques desarmados podem atingir criaturas voadoras."
  },
  {
    id: "bruxa-de-aco",
    nome: "Bruxa de Aço",
    todosPersonagens: false,
    classes: ["piloto"],
    requisito: "Dominar a classe Piloto.",
    descricao: "Após lançar o primeiro feitiço do seu turno em um conflito, se estiver pilotando seu veículo pessoal, você pode escolher um: escolha um módulo ativo para desativar e depois um módulo inativo para ativar; ou o próximo feitiço que causar dano que você lançar antes do fim da cena causa 5 pontos de dano adicional; ou o próximo feitiço que restaurar PV restaura 10 PV adicionais de cada alvo."
  },
  {
    id: "camera-lenta",
    nome: "Câmera Lenta",
    todosPersonagens: false,
    classes: ["entropista", "ladino"],
    requisito: "Dominar uma ou mais classes entre Entropista e Ladino; ter o poder Esquiva e/ou Tempo Roubado.",
    descricao: "Você recebe um bônus no seu modificador de iniciativa igual a (seu NP em Esquiva + seu NP em Tempo Roubado). Se não tiver equipado nenhum escudo ou armadura marcial, todo o dano que você sofrer é reduzido em quantidade igual a (seu NP em Esquiva) e você causa dano adicional igual a (seu NP em Tempo Roubado)."
  },
  {
    id: "campo-psiquico",
    nome: "Campo Psíquico",
    todosPersonagens: false,
    classes: ["esper"],
    requisito: "Dominar a classe Esper.",
    descricao: "Seus dons com o evento 'Quando você causa dano' também podem ser usados 'Quando um aliado que consegue ouvir você causa dano'. Se tiver o dom de Escudo Psíquico, ele passa a proteger também todos os aliados que possam ouvi-lo."
  },
  {
    id: "descarga-ondas-mentais",
    nome: "Descarga de Ondas Mentais",
    todosPersonagens: false,
    classes: ["esper"],
    requisito: "Dominar a classe Esper.",
    descricao: "Enquanto seu Relógio Mental estiver preenchido, você pode usar uma ação para apagar todas as suas seções. Se fizer isso, escolha um: causar 20 pontos de dano físico a todos os inimigos presentes na cena; ou causar 30 pontos de dano físico a um único inimigo que você possa ver. Se estiver no 20° nível ou acima, esse valor aumenta em 10; se estiver no 40° nível ou acima, aumenta em 20."
  },
  {
    id: "ecdise-maior",
    nome: "Ecdise Maior",
    todosPersonagens: false,
    classes: ["mutante"],
    requisito: "Dominar a classe Mutante.",
    descricao: "Ao usar Ecdise, você pode escolher uma ou as duas opções: você se recupera de todas as condições e/ou, se estiver sendo afetado por um ou mais feitiços com duração de 'Cena', você não é mais afetado por nenhum desses feitiços."
  },
  {
    id: "isca-chamariz",
    nome: "Isca Chamariz",
    todosPersonagens: false,
    classes: ["atirador"],
    requisito: "Dominar a classe Atirador e ter o poder Olhos de Águia.",
    descricao: "Ao usar Olhos de Águia e escolher a primeira opção, se não houver uma isca chamariz na cena, você pode gastar 10 PM para criar uma com PV igual a (metade do seu nível + (5 × seu NP em Olhos de Águia)). Quando um inimigo reduzir sua isca a 0 PV, ela é destruída e você rola 1d10. Se o resultado for igual ou menor que (3 + seu NP em Olhos de Águia), você pode fazer um ataque livre com arma de fogo ou arco — esse ataque ignora Imunidades e Resistências."
  },
  {
    id: "magicanhao-quantico",
    nome: "Magicanhão Quântico",
    todosPersonagens: false,
    classes: ["inventor"],
    requisito: "Dominar a classe Inventor e ter o benefício Tecnomagia: avançada do poder Engenhocas.",
    descricao: "Seus ataques com o magicanhão causam 5 pontos de dano adicional. Ao fazer a ação Ataque com seu magicanhão, se não tiver outra arma equipada, você pode escolher um: destruir o magicanhão e criar um novo sem custo, usando-o no ataque; ou o ataque ganha multi (3); ou você faz dois ataques separados seguindo as regras de ataque com duas armas."
  },
  {
    id: "mimeoclepse",
    nome: "Mimeoclepse",
    todosPersonagens: false,
    classes: ["mutante", "quimerista"],
    requisito: "Dominar uma ou mais classes entre Mutante e Quimerista; ter os poderes Genoclepse e Imitação Mágica.",
    descricao: "Ao usar Genoclepse em um NPC, se a espécie do NPC estiver entre aquelas que você consegue aprender feitiços com Imitação Mágica, o mestre deve revelar todos os feitiços conhecidos por esse NPC. Se o NPC conhecer um ou mais feitiços, você pode aprender um deles como um de seus feitiços de quimerista."
  },
  {
    id: "nebulizacao",
    nome: "Nebulização",
    todosPersonagens: false,
    classes: ["inventor"],
    requisito: "Dominar a classe Inventor e ter o benefício Alquimia: avançada do poder Engenhocas.",
    descricao: "Ao criar uma poção, você recebe 1 Ponto de Nebulização, ou 2 se a poção foi criada através da alquimia do poder Engenhocas. Poções e fragmentos elementais criados por você causam dano adicional igual ao dobro de seus Pontos de Nebulização atuais. Poções criadas por você que recuperem PV e/ou PM restauram (5 × seus Pontos de Nebulização atuais) a mais. Máximo de 5 Pontos de Nebulização; perde todos ao fim de cada cena."
  },
  {
    id: "ou-vai-ou-racha",
    nome: "Ou Vai ou Racha",
    todosPersonagens: false,
    classes: ["furioso", "guerreiro-sombrio"],
    requisito: "Dominar uma ou mais classes entre Furioso e Guerreiro Sombrio.",
    descricao: "Ao atacar com uma arma, você pode declarar 'ou vai ou racha!' antes do teste de Precisão. Se fizer isso, a RA do teste é dobrada para determinar o dano. Se o resultado for um número par: se a arma for mutável, ela muda de forma imediatamente e não pode mudar novamente até o fim da cena; se não for mutável, ela é posta na mochila e não pode ser equipada até o fim da cena (mas você pode fazer a ação Equipamento imediatamente sem custo)."
  },
  {
    id: "pisar-no-calo",
    nome: "Pisar no Calo",
    todosPersonagens: false,
    classes: ["orador", "virtuoso"],
    requisito: "Dominar uma ou mais classes entre Orador e Virtuoso; ter o poder Condenar.",
    descricao: "Quando tiver sucesso ao usar Condenar contra um inimigo com pelo menos um Traço que você conheça, você recupera PM igual à metade dos PM perdidos pelo alvo e faz com que ele fique enfurecido, em vez das condições normais. Além disso, ao fazer um teste oposto contra uma criatura enfurecida, ou um teste de Precisão/Magia que tenha criaturas enfurecidas entre os alvos, você tem sucesso crítico quando os dois dados mostram o mesmo número (se não for falha crítica)."
  },
  {
    id: "sincronizacao-dinamica",
    nome: "Sincronização Dinâmica",
    todosPersonagens: false,
    classes: ["piloto"],
    requisito: "Dominar a classe Piloto.",
    descricao: "No início do seu turno em um conflito, se estiver pilotando seu veículo pessoal, você pode sincronizar com outro PJ (que também pilote um veículo ou seja seu passageiro). Enquanto a sincronização estiver ativa: quando fizer um teste, pode usar os dados do outro personagem; quando causar dano, causa dano adicional igual à (força do seu Laço + força do Laço do outro PJ); você pode usar uma ação para fazer um ataque livre com um módulo de arma do veículo do outro PJ; após o fim do seu turno, o outro PJ pode agir imediatamente."
  },
  {
    id: "sobrecarga-explosiva",
    nome: "Sobrecarga Explosiva",
    todosPersonagens: false,
    classes: ["piloto"],
    requisito: "Dominar a classe Piloto e ter o poder Compressão Tecnológica.",
    descricao: "Escolha um tipo de dano entre fogo, gelo, luz, raio e trevas. Quando você for reduzido a 0 PV pela primeira vez durante uma cena, se estiver dirigindo seu veículo pessoal, pode escolher ficar com exatamente 1 PV. Se fizer isso, você e quaisquer passageiros deixam o veículo, que desaparece do mundo de jogo. Em seguida, você causa dano igual ao seu valor de crise contra uma única criatura que você possa ver (do tipo escolhido). O próximo uso de Compressão Tecnológica custará 1 Ponto de Fábula adicional."
  },
  {
    id: "soldado-arcano",
    nome: "Soldado Arcano",
    todosPersonagens: false,
    classes: ["atirador", "elementalista", "mestre-de-armas"],
    requisito: "Dominar uma ou mais classes entre Atirador, Elementalista e Mestre de Armas; conhecer ao menos dois feitiços ofensivos.",
    descricao: "Você pode usar uma ação para fazer um ataque livre com uma arma equipada contra um único inimigo (RA = 0 para o dano). Se acertar, você pode fazer a ação Feitiço sem custo: o feitiço deve ser ofensivo, ter custo total em PM igual ou menor que 20 e pode ter como alvo apenas o inimigo que você atacou (ainda é preciso gastar os PM e fazer o teste de Magia, com RA = 0 para o dano)."
  },
  {
    id: "sonho-partido",
    nome: "Sonho Partido",
    todosPersonagens: false,
    classes: ["esper", "guerreiro-sombrio"],
    requisito: "Dominar uma ou mais classes entre Esper e Guerreiro Sombrio.",
    descricao: "Quando acertar uma ou mais criaturas com um ataque de seu Golpe das Sombras usando uma espada, cada uma dessas criaturas perde PM igual a (o número rolado no dado de Vigor para Golpe das Sombras). Se este valor for 8 ou maior, você pode escolher uma criatura atingida. Se esta criatura for o seu foco ou você tiver um Laço com ela, a criatura fará uma ação a menos durante o próximo turno dela (mínimo de zero ações)."
  },
  {
    id: "teriomorfose-maior",
    nome: "Teriomorfose Maior",
    todosPersonagens: false,
    classes: ["mutante"],
    requisito: "Dominar a classe Mutante.",
    descricao: "Ao usar Teriomorfose no seu turno em um conflito, se isso não acontecer através de Genoclepse, você pode manifestar os efeitos de até três terioformas dentre as que já aprendeu (em vez de apenas duas). Em seguida, pode fazer uma ação adicional. Esta ação não pode ser usada para o poder Teriomorfose."
  },
  {
    id: "varredura-rapida",
    nome: "Varredura Rápida",
    todosPersonagens: false,
    classes: ["erudito"],
    requisito: "Dominar a classe Erudito.",
    descricao: "Ao fazer a ação Estudo em um conflito, você pode examinar as fichas de todos os inimigos que você possa ver. Se fizer isso, você faz um único teste aberto 【AST + AST】 e aplica o resultado separadamente a cada inimigo. No entanto, se você tiver Lampejo de Saber, esse teste não pode ativá-lo."
  },

  /* ── TERCEIRA LEVA ─────────────────────────────────────── */
  {
    id: "alma-quimerica",
    nome: "Alma Quimérica",
    todosPersonagens: false,
    classes: ["mutante", "quimerista"],
    requisito: "Dominar uma ou mais classes entre Mutante e Quimerista; ter o poder Imitação Mágica.",
    descricao: "Ao lançar um dos seus feitiços de quimerista, você recebe um benefício baseado na espécie da criatura a quem o feitiço originalmente pertencia. Escolha um: você torna-se Resistente aos dois tipos de dano associados a essa espécie; ou quando causa dano de um dos tipos associados a essa espécie, você causa 5 pontos de dano adicional. Tipos de dano por espécie: construto (terra e veneno), demônio (fogo e gelo), elemental (ar e raio), fera (ar e gelo), monstro (raio e fogo), morto-vivo (trevas e veneno), planta (terra e luz)."
  },
  {
    id: "cacador-silencioso",
    nome: "Caçador Silencioso",
    todosPersonagens: false,
    classes: ["atirador", "ladino", "mestre-de-armas"],
    requisito: "Dominar uma ou mais classes entre Atirador, Ladino e Mestre de Armas; ter o poder Alta Velocidade.",
    descricao: "Ao usar Alta Velocidade para fazer um ataque livre com um arco, lança ou arma de arremesso, esse ataque causa dano adicional igual a (5 × seu NP em Alta Velocidade). Além disso, se atacar uma ou mais criaturas com um arco, lança ou arma de arremesso, essas criaturas não podem fazer ataques livres até o fim do turno atual."
  },
  {
    id: "cloromancia-maior",
    nome: "Cloromancia Maior",
    todosPersonagens: false,
    classes: ["floralista"],
    requisito: "Dominar a classe Floralista.",
    descricao: "Uma vez por turno, quando uma magissemente deixar seu jardim, se ela tiver um ou mais efeitos ativados 'No fim do seu turno', você pode gastar 20 PM para reproduzir um desses efeitos (você pode escolher um efeito que não seja equivalente às seções atuais de seu relógio de germinação). Além disso, se tiver Influência Verdejante, seus rituais agora também podem influenciar e controlar criaturas de patente soldado da espécie planta."
  },
  {
    id: "cochilo-poderoso",
    nome: "Cochilo Poderoso",
    todosPersonagens: false,
    classes: ["andarilho", "guardião", "mercador"],
    requisito: "Dominar uma ou mais classes entre Andarilho, Guardião e Mercador.",
    descricao: "Em seu turno durante um conflito, você pode usar uma ação para recuperar PV e PM igual a (20 + metade do seu nível) e se recuperar de todas as condições. Se fizer isso, seu turno termina imediatamente, você perde a capacidade de ver e ouvir, e sua Defesa e Defesa Mágica tornam-se iguais a 5 e não podem ser modificadas. Essas penalidades duram até o início do seu próximo turno, até depois que você perder PV ou até depois que você for atingido por um ataque ou feitiço ofensivo."
  },
  {
    id: "conjuracao-maromba",
    nome: "Conjuração Maromba",
    todosPersonagens: false,
    classes: ["andarilho", "esper", "furioso", "guerreiro-sombrio", "quimerista"],
    requisito: "Dominar uma ou mais classes entre Andarilho, Esper, Furioso, Guerreiro Sombrio e Quimerista.",
    descricao: "Ao fazer um teste de Magia para um feitiço ou ritual, você pode substituir um dos atributos por Vigor. Se o teste de Precisão da arma que estiver equipando incluir Vigor, você pode considerá-la como arcana para poderes e efeitos com esse pré-requisito."
  },
  {
    id: "dedo-verde",
    nome: "Dedo Verde",
    todosPersonagens: false,
    classes: ["floralista"],
    requisito: "Dominar a classe Floralista.",
    descricao: "Quando preencher uma ou mais seções de seu relógio de germinação, você pode escolher um: preencher 1 seção adicional; ou preencher 1 seção a menos (mínimo de 0). Se o fizer, você não pode usar esse efeito novamente até seu relógio de germinação ter se esvaziado por completo. Além disso, dano causado por suas magissementes ignora Resistências."
  },
  {
    id: "dosagem-precisa",
    nome: "Dosagem Precisa",
    todosPersonagens: false,
    classes: ["erudito", "gourmet", "inventor", "mercador"],
    requisito: "Dominar uma ou mais classes entre Erudito, Gourmet, Inventor e Mercador.",
    descricao: "Poções e iguarias que você criar, assim como os feitiços que você lançar, agora podem fazer com que as criaturas recuperem PV e PM além dos seus máximos. Não é possível que o PV ou PM atual de uma criatura seja maior que 150% de seus respectivos pontos máximos. No fim de cada cena, se a quantidade de PV e/ou PM ainda estiver acima do máximo, a pontuação se iguala à máxima."
  },
  {
    id: "especialidade-da-casa",
    nome: "Especialidade da Casa",
    todosPersonagens: false,
    classes: ["gourmet"],
    requisito: "Dominar a classe Gourmet.",
    descricao: "Ao adquirir esse poder heroico, escolha três sabores diferentes e três efeitos diferentes de uma lista especial. Quando criar uma iguaria usando exatamente 3 ingredientes em um conflito, se cada ingrediente for equivalente a um dos sabores escolhidos, você pode ignorar todos os efeitos normais dessa iguaria e aplicar um, dois ou todos os efeitos que você escolheu ao adquirir este poder heroico."
  },
  {
    id: "golpe-valente",
    nome: "Golpe Valente",
    todosPersonagens: false,
    classes: ["comandante", "furioso", "guardião", "mestre-de-armas", "piloto"],
    requisito: "Dominar uma ou mais classes entre Comandante, Furioso, Guardião, Piloto e Mestre de Armas.",
    descricao: "Quando usa Quebra-ossos, se seu ataque tiver apenas uma criatura como alvo e você tiver um escudo equipado, você pode desafiar essa criatura até o fim do seu próximo turno. Uma criatura desafiada deve incluir você entre os alvos dos seus ataques e feitiços ofensivos. Além disso, uma vez por turno, quando você causar dano à criatura desafiada usando um ataque livre com uma arma corpo a corpo de uma mão, você pode causar 5 pontos de dano adicional."
  },
  {
    id: "lado-a-lado",
    nome: "Lado a Lado",
    todosPersonagens: false,
    classes: ["andarilho"],
    requisito: "Dominar a classe Andarilho e ter o poder Companheiro Fiel.",
    descricao: "Quando seu companheiro causar dano, ele causa 5 pontos de dano adicional. Quando seu companheiro fizer um teste, você pode gastar 1 Ponto de Fábula e evocar um dos Traços de seu companheiro para que ele role novamente um ou ambos os dados. Após usar Companheiro Fiel para seu companheiro fazer uma ação, você pode escolher um: vocês dois recuperam 10 PM cada; ou na primeira vez em que você ou seu companheiro fizer um teste até o fim do seu próximo turno, esse teste recebe um bônus igual a (seu NP em Companheiro Fiel)."
  },
  {
    id: "levanta-a-cabeca",
    nome: "Levanta a Cabeça!",
    todosPersonagens: false,
    classes: ["esper", "orador", "virtuoso"],
    requisito: "Dominar uma ou mais classes entre Esper, Orador e Virtuoso; ter o poder Confio em Você.",
    descricao: "Ao usar Confio em Você em outro personagem, ele deve escolher entre Destreza, Astúcia, Vigor ou Vontade, então passa a considerar o dado atual do Atributo escolhido como se fosse um passo maior (máximo de d12). Esse benefício dura até o fim da cena ou até você usar Confio em Você nele outra vez."
  },
  {
    id: "luar-purificador",
    nome: "Luar Purificador",
    todosPersonagens: false,
    classes: ["entropista", "espiritualista"],
    requisito: "Dominar uma ou mais classes entre Entropista e Espiritualista.",
    descricao: "Quando atingir uma ou mais criaturas com um feitiço ofensivo, se tiver uma arma arcana equipada e a RA do seu teste de Magia for 8 ou mais, você pode fazer com que todas essas criaturas deixem de estar sob efeito de todos os feitiços com duração 'Cena'. Ao lançar um feitiço que tenha um ou mais aliados como alvo, se tiver uma arma arcana equipada, você pode escolher uma condição — cada alvo se recupera da condição escolhida."
  },
  {
    id: "manancial-interior",
    nome: "Manancial Interior",
    todosPersonagens: false,
    classes: ["invocador"],
    requisito: "Dominar a classe Invocador.",
    descricao: "Ao adquirir este poder heroico e sempre que você descansar, você pode escolher um manancial: água, ar, fogo, raio ou terra. Você considera o manancial escolhido como disponível em todas as cenas; pode fazer rituais de elementalismo que manipulem o elemento do manancial escolhido; você torna-se Resistente ao tipo de dano do manancial escolhido; ao causar dano, você pode mudar o tipo do dano causado para o mesmo do manancial escolhido e, se fizer isso, esse dano ignora Resistências."
  },
  {
    id: "manipular-magia",
    nome: "Manipular Magia",
    todosPersonagens: false,
    classes: ["elementalista", "entropista", "invocador", "simbolista"],
    requisito: "Dominar uma ou mais classes entre Elementalista, Entropista, Invocador e Simbolista; ter o poder Invocação.",
    descricao: "Após um inimigo que você possa ver acertar ou errar seu personagem com um feitiço ofensivo, se o resultado do teste de Magia desse inimigo for um número par, você pode usar Invocação imediatamente e sem usar uma ação (após o feitiço ter sido resolvido) para fazer uma das suas invocações contra esse inimigo, sem gastar PM. Essa invocação não pode ser do tipo 'praga' e deve ter apenas esse inimigo como alvo."
  },
  {
    id: "muralha-de-espinhos",
    nome: "Muralha de Espinhos",
    todosPersonagens: false,
    classes: ["floralista", "guerreiro-sombrio"],
    requisito: "Dominar uma ou mais classes entre Floralista e Guerreiro Sombrio; ter o poder Cloromancia.",
    descricao: "Você tem Resistência a dano de luz e de veneno. Após perder PV, se você estiver em crise e uma magissemente estiver em seu jardim, você pode preencher 1 seção do seu relógio de germinação. Além disso, ao usar Golpe das Sombras, você pode fazer o ataque deste poder causar dano de veneno, em vez de dano de trevas. Se o fizer, seu Golpe das Sombras causa dano adicional igual a (2 × o número de seções preenchidas em seu relógio de germinação)."
  },
  {
    id: "palavras-de-sabedoria",
    nome: "Palavras de Sabedoria",
    todosPersonagens: false,
    classes: ["comandante", "erudito", "orador"],
    requisito: "Dominar uma ou mais classes entre Comandante, Erudito e Orador.",
    descricao: "Ao fazer um teste de Apoio, se o líder do teste em Grupo puder ouvir e entender você, você pode usar 【AST + AST】, 【AST + VON】 ou 【VON + VON】 em vez dos atributos normalmente exigidos. Além disso, ao usar trabalho em equipe para ajudar o teste de outro personagem em seu turno durante um conflito, você pode gastar 10 PM e escolher até dois benefícios: o alvo recupera 20 PM; ou se recupera de condições; ou no fim do turno desse personagem, você pode fazer um ataque livre ou a ação Feitiço sem custo de ação; ou se o personagem obtiver sucesso para preencher/apagar seções de um relógio, ele pode preencher/apagar uma seção adicional."
  },
  {
    id: "poder-dos-cinco-mananciais",
    nome: "Poder dos Cinco Mananciais",
    todosPersonagens: false,
    classes: ["invocador"],
    requisito: "Dominar a classe Invocador.",
    descricao: "Após fazer uma invocação durante um conflito, você e até um aliado que você possa ver consideram um dos seus Atributos como um passo maior (máximo de d12). Isso dura até o fim da cena ou até você usar este poder outra vez. O atributo é definido pelo manancial invocado: ar (Astúcia), terra (à sua escolha), fogo (Destreza), raio (Vigor) ou água (Vontade)."
  },
  {
    id: "por-um-futuro-melhor",
    nome: "Por um Futuro Melhor",
    todosPersonagens: false,
    classes: ["mercador"],
    requisito: "Dominar a classe Mercador e ter os poderes Ventos do Comércio e Verdadeiro Tesouro.",
    descricao: "Quando gastar 1 ou mais Pontos de Fábula (que não sejam para alterar a história), você pode gastar a mesma quantidade em Pontos de Comércio em vez disso. Além disso, quando receber 2 ou mais Pontos de Comércio por meio de Verdadeiro Tesouro ou Ventos do Comércio, você pode escolher receber exatamente 1 e aumentar a prosperidade de um assentamento a 1 dia de viagem. Prosperidade 10+: custos em zênites reduzidos à metade. Prosperidade 15+: descanso gratuito e rolagens de viagem limitadas a d8. Prosperidade 20+: vilões gastam o dobro de Pontos de Ultima na área."
  },
  {
    id: "refracao-auramante",
    nome: "Refração Auramante",
    todosPersonagens: false,
    classes: ["arcanista", "espiritualista"],
    requisito: "Dominar uma ou mais classes entre Arcanista e Espiritualista; ter o feitiço Aura e/ou Barreira.",
    descricao: "Escolha um tipo de dano entre ar, raio, terra, fogo, gelo e luz. Quando um inimigo que você possa ver causar dano em uma ou mais criaturas sob efeito de um feitiço Aura e/ou Barreira que você tenha lançado, o dano sofrido é reduzido em (metade do seu nível de espiritualista) ou (seu nível ÷ 10) — use o maior valor — e você pode causar dano do tipo escolhido igual a (metade do seu nível) a esse inimigo (uma vez por turno)."
  },
  {
    id: "rodizio",
    nome: "Rodízio",
    todosPersonagens: false,
    classes: ["gourmet"],
    requisito: "Dominar a classe Gourmet.",
    descricao: "Uma vez por cena, ao usar Culinária, você pode combinar quatro ingredientes em uma iguaria (ignorando o limite normal de três ingredientes). Fora isso, a iguaria segue a regra padrão."
  },
  {
    id: "tranquilidade-efemera",
    nome: "Tranquilidade Efêmera",
    todosPersonagens: false,
    classes: ["dançarino", "esper", "espiritualista", "ladino", "simbolista"],
    requisito: "Dominar uma ou mais classes entre Dançarino, Esper, Espiritualista, Ladino e Simbolista.",
    descricao: "Quando lançar o feitiço Alucinação ou Torpor, você pode aplicar ambas as condições a cada alvo atingido pelo feitiço. Durante um conflito, você pode usar uma ação e gastar até 20 PM: a cada 10 PM, escolha um inimigo sofrendo duas ou mais condições. Cada inimigo escolhido se recupera de todas as condições e perde PV igual a (metade do seu nível + (10 × o número de condições das quais o inimigo se recuperou)). Você recupera 20 PM para cada inimigo que entrou em crise ou foi reduzido a 0 PV graças a esse efeito."
  },

  /* ── QUARTA LEVA ─────────────────────────────────────── */
  {
    id: "adepto-das-laminas",
    nome: "Adepto das Lâminas",
    todosPersonagens: false,
    classes: ["ladino", "mestre-de-armas"],
    requisito: "Dominar uma ou mais classes entre Ladino e Mestre de Armas.",
    descricao: "Enquanto tiver uma ou mais adagas corpo a corpo equipadas, sua Defesa e Defesa Mágica aumentam em +1 e você considera que essas armas são da categoria arremesso, espada e luta para requisitos de poderes e outros efeitos. Além disso, seus ataques feitos com adagas podem atingir criaturas que normalmente não podem ser alvos de ataques corpo a corpo."
  },
  {
    id: "batalha-incessante",
    nome: "Batalha Incessante",
    todosPersonagens: false,
    classes: ["comandante"],
    requisito: "Dominar a classe Comandante.",
    descricao: "O custo em PM de seus poderes Carga de Cavalaria, Decreto do Bispo e Roque do Rei são reduzidos pela metade."
  },
  {
    id: "bimagus",
    nome: "Bimagus",
    todosPersonagens: false,
    classes: ["elementalista", "entropista", "espiritualista"],
    requisito: "Dominar duas ou mais classes entre Elementalista, Entropista e Espiritualista; estar no 30° nível ou acima.",
    descricao: "Uma vez por turno em um conflito, se tiver uma arma arcana equipada, você pode usar uma ação e gastar de 20 a 50 PM para fazer a ação Feitiço duas vezes sem usar uma ação, lançando feitiços sem precisar gastar PM. O custo total em PM de ambas as magias deve ser (20 + a quantidade de PM gasta para usar este poder) e o segundo feitiço deve ter custo total em PM menor ou igual à metade do custo total em PM do primeiro feitiço."
  },
  {
    id: "corte-triplo",
    nome: "Corte Triplo",
    todosPersonagens: false,
    classes: ["dançarino", "mestre-de-armas"],
    requisito: "Dominar uma ou mais classes entre Dançarino e Mestre de Armas.",
    descricao: "Desde que você tenha uma espada ou adaga corpo a corpo de uma mão equipada em cada espaço de mão convencional, você pode considerar seu espaço de armadura como se fosse um segundo espaço de mão secundária (apenas para equipar uma adaga ou espada corpo a corpo de uma mão). Quando fizer a ação Ataque com adagas e/ou espadas equipadas, você pode atacar uma vez com cada arma, seguindo as regras de combate com duas armas (sem multi, RA = 0 para o dano de cada ataque)."
  },
  {
    id: "espetaculo",
    nome: "Espetáculo",
    todosPersonagens: false,
    classes: ["dançarino"],
    requisito: "Dominar a classe Dançarino.",
    descricao: "No início de seu turno em um conflito, se não tiver nenhuma armadura marcial equipada, você pode gastar 1 Ponto de Fábula para apresentar até três danças diferentes entre as que você conhece, na ordem que preferir e sem custo em PM. Se fizer isso, você não pode apresentar danças até o fim do seu próximo turno."
  },
  {
    id: "enxame-rodopiante",
    nome: "Enxame Rodopiante",
    todosPersonagens: false,
    classes: ["atirador", "dançarino", "furioso"],
    requisito: "Dominar uma ou mais classes entre Atirador, Dançarino e Furioso.",
    descricao: "Quando faz um ataque à distância com uma arma de arremesso, se não tiver nenhuma arma marcial ou escudo equipados, você recebe 1 Ponto de Ímpeto (máximo 5). Seus ataques à distância com armas de arremesso causam dano adicional igual a sua quantidade atual de Pontos de Ímpeto. Quando uma criatura o acertar com um ataque que atinge sua Defesa, você deve gastar todos os seus Pontos de Ímpeto acumulados e aumentar sua Defesa em um valor igual à quantidade de pontos gastos — isso pode transformar um acerto em uma falha."
  },
  {
    id: "flecha-dupla",
    nome: "Flecha Dupla",
    todosPersonagens: false,
    classes: ["atirador", "comandante"],
    requisito: "Dominar uma ou mais classes entre Atirador e Comandante.",
    descricao: "Quando faz um ataque à distância com um arco, se não tiver mais nenhuma arma equipada, você pode fazer dois ataques diferentes em vez de um (contra um mesmo alvo ou contra alvos diferentes). Ambos os ataques seguem as regras de combate de duas armas (sem multi, RA = 0 para o dano de cada ataque). Não é cumulativo com a personalização rápida de arma personalizada."
  },
  {
    id: "floresta-de-ferro",
    nome: "Floresta de Ferro",
    todosPersonagens: false,
    classes: ["comandante", "mestre-de-armas"],
    requisito: "Dominar uma ou mais classes entre Comandante e Mestre de Armas.",
    descricao: "Após acertar uma ou mais criaturas com um ataque corpo a corpo usando uma lança, se não tiver mais nenhuma arma equipada, você pode gastar 2 PM e escolher uma das criaturas atingidas. O ataque causa metade do dano a todos os alvos. A partir de então, o alvo escolhido deve gastar 10 PM sempre que quiser fazer a ação escolhida entre Ataque, Guarda, Feitiço, Objetivo ou Poder. Se não tiver PM, a criatura deve fazer outro tipo de ação. Este efeito dura até o início do seu próximo turno."
  },
  {
    id: "hoplita",
    nome: "Hoplita",
    todosPersonagens: false,
    classes: ["comandante", "guardião"],
    requisito: "Dominar uma ou mais classes entre Comandante e Guardião.",
    descricao: "Enquanto você estiver com uma arma equipada em seu espaço de mão dominante e um escudo equipado em seu espaço de mão secundária, seus ataques causam 5 pontos de dano adicional e sua Defesa aumenta em +1. Esse poder não pode ser usado em conjunto com armas personalizadas com a personalização 'aumento na Defesa' nem com o poder Duplo Escudeiro."
  },
  {
    id: "golpe-pulverizador",
    nome: "Golpe Pulverizador",
    todosPersonagens: false,
    classes: ["furioso", "guerreiro-sombrio", "mestre-de-armas"],
    requisito: "Dominar uma ou mais classes entre Furioso, Guerreiro Sombrio e Mestre de Armas.",
    descricao: "Após acertar uma criatura com Trespassar, se o ataque foi feito com uma arma pesada corpo a corpo, você pode escolher causar dano igual à sua RA, em vez de nenhum dano. Todas as fontes de dano adicional, inclusive a terceira opção de Trespassar, ainda são aplicadas normalmente."
  },
  {
    id: "guarda-magica",
    nome: "Guarda Mágica",
    todosPersonagens: false,
    classes: ["elementalista", "entropista", "espiritualista", "quimerista"],
    requisito: "Dominar uma ou mais classes entre Elementalista, Entropista, Espiritualista e Quimerista.",
    descricao: "Ao fazer a ação Guarda sem dar cobertura a outra criatura, você recebe o seguinte benefício até o início do seu próximo turno: quando uma criatura que você puder ver lançar um feitiço, após ela gastar os PM, você pode gastar PM igual a (10 + o custo total em PM do feitiço) para interromper o feitiço e negar seus efeitos (o feitiço não é lançado, mas o alvo ainda gasta a ação)."
  },
  {
    id: "grande-invocacao",
    nome: "Grande Invocação",
    todosPersonagens: false,
    classes: ["arcanista"],
    requisito: "Dominar a classe Arcanista e estar no 30° nível ou acima.",
    descricao: "Quando invocar um Arcano, você pode gastar 1 Ponto de Fábula e metade dos seus PV atuais para manifestar o poder dele por completo como uma criatura de patente soldado da espécie demônio sob seu controle. A criatura tem nível igual ao seu, d10 em um Atributo à sua escolha e d8 nos demais, PV máximos iguais a ((2 × dado básico de Vigor da criatura) + (seus PV máximos ÷ 2)), Resistência a dois tipos de dano, todos os benefícios de fundição do Arcano, e um ataque básico corpo a corpo (RA + 8) físico com escolhas de personalização. A criatura desaparece ao ser reduzida a 0 PV ou ao fim da cena."
  },
  {
    id: "mare-crescente",
    nome: "Maré Crescente",
    todosPersonagens: false,
    classes: ["furioso", "mestre-de-armas"],
    requisito: "Dominar uma ou mais classes entre Furioso e Mestre de Armas.",
    descricao: "Quando faz um ataque corpo a corpo com uma arma de luta, se não tiver mais nenhuma arma marcial ou escudo equipados, você recebe 1 Ponto de Coragem. Seus ataques corpo a corpo com armas de luta causam dano adicional igual a (2 + seus Pontos de Coragem atuais). No fim da cena ou se acumular 5 Pontos de Combate ou mais no final do seu turno, você deve gastar todos esses pontos acumulados e recuperar 10 PV e PM."
  },
  {
    id: "mira-arcana",
    nome: "Mira Arcana",
    todosPersonagens: false,
    classes: ["atirador", "mestre-de-armas", "simbolista"],
    requisito: "Dominar uma ou mais classes entre Atirador, Mestre de Armas e Simbolista.",
    descricao: "Quando atinge uma ou mais criaturas com um ataque usando uma arma arcana, este ataque causa 5 pontos de dano adicional e você pode escolher um dos alvos atingidos. Se o próximo feitiço ofensivo que você lançar nesta cena tiver apenas esta criatura como alvo, considere o teste de Magia desse feitiço como um sucesso crítico se ambos os dados rolarem o mesmo número (e não for uma falha crítica)."
  },
  {
    id: "momento-fugaz",
    nome: "Momento Fugaz",
    todosPersonagens: false,
    classes: ["mestre-de-armas"],
    requisito: "Dominar a classe Mestre de Armas e ter o poder Contra-ataque.",
    descricao: "Quando fizer um Contra-ataque corpo a corpo com uma espada, você pode usar sua RA ao dano causado pelo ataque (você não precisa considerá-la como 0)."
  },
  {
    id: "musica-tema",
    nome: "Música Tema",
    todosPersonagens: false,
    classes: ["virtuoso"],
    requisito: "Dominar a classe Virtuoso.",
    descricao: "Ao adquirir este poder, você recebe uma música-tema — escolha um nome para ela e uma escala entre as conhecidas por você. Uma vez a cada cena de conflito, depois de cantar um verso na escala escolhida, você pode dar início a sua música-tema. Ao cantar sua música tema, você: torna-se Resistente a dano do mesmo tipo da escala; causa 5 pontos de dano adicional quando causa dano do mesmo tipo da escala; reduz o custo em PM para cantar versos na mesma escala à metade (para você e aliados)."
  },
  {
    id: "paso-doble",
    nome: "Paso Doble",
    todosPersonagens: false,
    classes: ["dançarino"],
    requisito: "Dominar a classe Dançarino e ter o poder Me Acompanhe.",
    descricao: "Enquanto estiver em crise, você ignora o custo em PM do poder Me Acompanhe."
  },
  {
    id: "rituais-ageis",
    nome: "Rituais Ágeis",
    todosPersonagens: false,
    classes: ["elementalista", "entropista", "espiritualista", "quimerista"],
    requisito: "Dominar uma ou mais classes entre Elementalista, Entropista, Espiritualista e Quimerista.",
    descricao: "Quando iniciar um ritual em uma cena de conflito, seu relógio de ritual é criado com duas seções a menos que o normal (mínimo de quatro seções)."
  },
  {
    id: "selos-rituais",
    nome: "Selos Rituais",
    todosPersonagens: false,
    classes: ["simbolista"],
    requisito: "Dominar a classe Simbolista.",
    descricao: "Quando faz um ritual fora de uma cena de conflito, se o ritual tiver custo total em PM igual ou menor que 60, você pode parar o processo imediatamente antes do teste de Magia, armazenando os efeitos do ritual em um selo de ritual sobre uma superfície na qual você possa tocar. Escolha um gatilho. Quando o gatilho for ativado, o selo desaparece e o ritual se conclui no local do selo. Você só pode ter um selo de ritual ativo por vez."
  },
  {
    id: "tabula-rasa",
    nome: "Tabula Rasa",
    todosPersonagens: false,
    classes: ["comandante"],
    requisito: "Dominar a classe Comandante.",
    descricao: "Após usar Decreto do Bispo ou Roque do Rei, se estiver em crise, você pode fazer cada inimigo presente na cena perder 10 PV. Se estiver no 20° nível ou acima, esse dano aumenta para 20; se estiver no 40° nível ou acima, aumenta para 30."
  },
  {
    id: "teia-de-aranha",
    nome: "Teia de Aranha",
    todosPersonagens: false,
    classes: ["furioso", "mestre-de-armas"],
    requisito: "Dominar uma ou mais classes entre Furioso e Mestre de Armas.",
    descricao: "Quando faz um ataque corpo a corpo com um malho, se não tiver mais nenhuma arma equipada, você pode fazer dois ataques separados em vez de um (contra um mesmo alvo ou contra alvos diferentes). Ambos os ataques seguem as regras de combate de duas armas (sem multi, RA = 0 para o dano de cada ataque). Não é cumulativo com a personalização rápida de arma personalizada."
  },
  {
    id: "tela-em-branco",
    nome: "Tela em Branco",
    todosPersonagens: false,
    classes: ["simbolista"],
    requisito: "Dominar a classe Simbolista.",
    descricao: "Você pode usar uma ação e gastar até 30 PM para escolher uma criatura que você possa ver para cada 5 PM gastos dessa maneira. Cada alvo escolhido se recupera de todas as condições e deixa de ser afetado por qualquer efeito com duração de 'Cena' que o estavam afetando."
  },
  {
    id: "tiroteio",
    nome: "Tiroteio",
    todosPersonagens: false,
    classes: ["atirador"],
    requisito: "Dominar a classe Atirador.",
    descricao: "Após negar um ataque à distância usando Fogo Cruzado, se seu teste de Precisão for um número par, você pode fazer um ataque livre contra o atacante com uma arma de fogo à distância equipada. Este ataque deve ter o inimigo como único alvo e sua RA é considerada como 0 para calcular o dano causado."
  },
  {
    id: "trilha-epica",
    nome: "Trilha Épica",
    todosPersonagens: false,
    classes: ["virtuoso"],
    requisito: "Dominar a classe Virtuoso.",
    descricao: "Quando canta um verso de volume médio ou forte, você pode dobrar seu custo em PM ou gastar 1 Ponto de Fábula. Se fizer isso, testes de Precisão feitos por você e todos os aliados que puderem ouvi-lo são considerados um sucesso crítico se ambos os dados rolarem o mesmo número (e não for uma falha crítica)."
  }
];

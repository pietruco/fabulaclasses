const CLASSES = [
  {
    id: "andarilho",
    nome: "Andarilho",
    outrosNomes: ["Aventureiro", "Caçador de Tesouros", "Explorador"],
    citacao: "Fronteiras são um truque da mente.",
    descricao: "Nômades procurando um continente mitológico, exploradores desbravando os ermos, caçadores viajantes têm uma coisa em comum: são Andarilhos. Embora a maioria dos heróis viaje pelo mundo durante suas aventuras, Andarilhos vivem pela jornada, sempre dispostos a visitar novos lugares e aprender com os outros. Aos olhos de um Andarilho, a natureza não é uma inimiga ou aliada, mas uma professora severa que pode revelar muitas verdades esquecidas.",
    beneficiosIniciais: ["Aumente permanentemente seus PI máximos em 2."],
    perguntas: [
      "O que motiva você a viver viajando? Foi escolha sua? Você se cansou?",
      "Há um lugar que você considera um 'lar'?",
      "Você visitou muitas pessoas e lugares. Tem algo que não consegue esquecer?",
      "Você perdeu algo ou alguém por conta de suas viagens. O que aconteceu?"
    ],
    poderes: [
      { nome: "Caçador de Tesouros", custo: "ç2", descricao: "Quando seu grupo se aventura pelo mapa do mundo, você faz uma descoberta se tirar 【NP + 1】 ou menos na rolagem de viagem (em vez de apenas 1)." },
      { nome: "Companheiro Fiel", custo: "ç5", descricao: "Com a ajuda do grupo, crie um NPC construto, elemental, fera ou planta de nível 5 para ser seu companheiro. Essa criatura não tem iniciativa, não sobe de nível, pode ter no máximo dois ataques básicos, ganha bônus em Precisão e Magia igual a 【NP】 e seus PV máximos são 【(NP × dado de Vigor) + metade do seu nível】. Você pode gastar sua ação para fazê-lo realizar uma ação no seu turno." },
      { nome: "Papo de Taverna", custo: "ç3", descricao: "Ao descansar em uma estalagem ou taverna, você pode fazer 【NP】 perguntas ao mestre sobre os arredores e habitantes. O mestre deve responder com informações verdadeiras, mas você deve descrever como obteve tais informações." },
      { nome: "Prático", custo: "ç4", descricao: "Você recupera 【NP】 PI após cada rolagem de viagem." },
      { nome: "Viajante", custo: "—", descricao: "Você reduz o dado rolado em suas rolagens de viagem em um (mínimo d6). Se mais de um personagem tiver este poder, os efeitos não são cumulativos." }
    ],
    cor: "#5a8a5e",
    emoji: "🗺️"
  },
  {
    id: "arcanista",
    nome: "Arcanista",
    outrosNomes: ["Avatar", "Escolhido", "Invocador"],
    citacao: "Alguns destinos não podem ser evitados.",
    descricao: "Arcanistas podem entrar em um transe profundo e temporariamente projetar uma porção considerável da sua alma para fora do corpo, concedendo-lhe forma física. Cercado por esta névoa mágica, o Arcanista ganha várias habilidades sobrenaturais. Dizem que essas formas invocadas são manifestações das almas ancestrais que pertencem a entidades mitológicas chamadas de Arcanos. Em alguns mundos, os Arcanos são cultuados como divindades.",
    beneficiosIniciais: ["Aumente permanentemente seus PM máximos em 5."],
    perguntas: [
      "De onde vêm seus poderes? São um presente de sua linhagem sanguínea?",
      "Você já se comunicou com um Arcano ou eles são quietos e distantes?",
      "As pessoas consideram você alguém misterioso, poderoso ou sobrenatural?",
      "Há muitos praticando a sua magia ou você é uma exceção?"
    ],
    poderes: [
      { nome: "Arcanismo Ritualista", custo: "—", descricao: "Você pode fazer rituais da disciplina arcanismo, desde que seus efeitos estejam entre os domínios de um ou mais Arcanos que você vinculou. Rituais de arcanismo usam 【VON + VON】 no teste de Magia." },
      { nome: "Arcano Emergencial", custo: "ç6", descricao: "Enquanto estiver em crise, o custo de invocar seu Arcano é reduzido em 【NP × 5】." },
      { nome: "Círculo Arcano", custo: "ç4", descricao: "Em seu turno, após dispensar voluntariamente um Arcano durante um conflito, se esse Arcano não foi invocado durante esse mesmo turno e você tem uma arma arcana equipada, pode imediatamente fazer a ação Feitiço sem custo de ação. O feitiço deve ter custo total de PM igual ou inferior a 【NP × 5】." },
      { nome: "Regeneração Arcana", custo: "ç2", descricao: "Ao invocar um Arcano, você imediatamente recupera 【NP × 5】 PV." },
      { nome: "Vincular e Invocar", custo: "—", descricao: "Você pode vincular Arcanos à sua alma para invocá-los em um momento posterior. Você pode usar uma ação e gastar 40 PM para invocar um Arcano que já vinculou. Se escolher este poder na criação de personagem, começa o jogo vinculado a um Arcano à sua escolha." }
    ],
    subSecoes: [
      {
        titulo: "Os Arcanos",
        itens: [
          { nome: "Arcano da Espada", descricao: "Domínios: conquista, heroísmo, liderança. FUNDIR: Seus ataques causam 5 de dano adicional e todo dano não tem tipo (não afetado por Afinidades). Ao fazer um ataque, pode conceder a propriedade multi a qualquer quantidade de alvos — o Arcano é dispensado automaticamente após o ataque." },
          { nome: "Arcano da Forja", descricao: "Domínios: calor, fogo, metal. FUNDIR: Resistência a dano de fogo; todo dano de fogo causado por você ignora Resistências. DISPENSAR: Crie uma arma/armadura/escudo básico (dano de fogo), ou cause 30 de dano de fogo a qualquer número de criaturas." },
          { nome: "Arcano da Geada", descricao: "Domínios: frio, gelo, silêncio. FUNDIR: Resistência a gelo; imune a enfurecido; todo dano de gelo ignora Resistências. DISPENSAR: Era do Gelo — 30 de dano de gelo (ignora Resistências) a qualquer número de criaturas." },
          { nome: "Arcano da Roda", descricao: "Domínios: destino, tempo, velocidade. FUNDIR: Imune a lento; +1 em Defesa. DISPENSAR: Congelar o Tempo — criaturas à sua escolha ficam lentas (ou fazem uma ação a menos se já estiverem lentas)." },
          { nome: "Arcano da Torre", descricao: "Domínios: julgamento, proteção, sacrifício. FUNDIR: Escolha um tipo de dano — aliados em cena têm Resistência ao tipo. DISPENSAR: Julgamento — 30 de dano de luz (ignora Resistências) a qualquer número de criaturas." },
          { nome: "Arcano do Carvalho", descricao: "Domínios: plantas, terra, veneno. FUNDIR: Resistência a terra e veneno; imune a envenenado; recupera 5 PV adicionais ao curar. DISPENSAR: Florescer — criaturas ficam envenenadas e recuperam 40/50/60 PV (nível 1/20/40)." },
          { nome: "Arcano do Céu", descricao: "Domínios: chuva, névoa, tempestades. FUNDIR: Resistência a ar e raio; pode descobrir condições climáticas do próximo dia. DISPENSAR: Tempestade — 30 de dano de raio (ignora Resistências) a qualquer número de criaturas." },
          { nome: "Arcano do Grimório", descricao: "Domínios: compreensão, conhecimento, revelações. FUNDIR: Lê, escreve e fala todos os idiomas; dado de Astúcia um passo maior. DISPENSAR: Oráculo — faça uma pergunta ao mestre, ele responde com sinceridade." },
          { nome: "Arcano do Portão", descricao: "Domínios: espaço, vazio, viagens. FUNDIR: Resistência a trevas; +1 em Defesa Mágica. DISPENSAR: Oblívio (30 de dano de trevas) ou Translocar (teleporte em até 1 dia de viagem)." }
        ]
      }
    ],
    cor: "#7a4f9e",
    emoji: "🌌"
  },
  {
    id: "astrologo",
    nome: "Astrólogo",
    outrosNomes: ["Astrologista", "Mitomante", "Zodíaco"],
    citacao: "Seremos protegidos pelo fogo do guardião das matas e florestas!",
    descricao: "Astrólogos não olham para o céu em busca da beleza das estrelas, mas de um amanhã iridescente. Carregam constelações tatuadas na pele, um vínculo usado para queimar o cosmos ao invocá-las. Nas matas, à beira de um rio ou no canto sombrio do pássaro da morte, astrólogos observam padrões ocultos, conectando os sinais do destino ao poder de cada constelação.",
    beneficiosIniciais: ["Aumente permanentemente seus PM máximos em 5.", "Você pode fazer rituais da disciplina ritualismo."],
    perguntas: [
      "Qual constelação rege sua sorte? Em outras palavras: qual seu signo?",
      "Quem ensinou você a interpretar e domar as constelações do céu?",
      "Qual previsão das estrelas mudou a vida de alguém?",
      "O que você responde quando perguntam sobre suas tatuagens?"
    ],
    poderes: [
      { nome: "Constelação do Boitatá", custo: "ç3", descricao: "Use uma ação e gaste 10 PM: teste 【AST + VON】 vs Def.M de um inimigo. Se acertar, causa 【NP × 10】 de dano de fogo. Consumindo uma carga celeste, uma criatura torna-se Resistente a fogo até o fim da cena. Após usar, gera 【NP】 cargas solares." },
      { nome: "Constelação do Boto", custo: "ç3", descricao: "Use uma ação e gaste 5 PM: um aliado que você veja pode trocar um Atributo de um teste por AST até o fim da cena. Consumindo uma carga solar, o alvo recebe +1 no teste. Após usar, gera 【NP】 cargas estelares." },
      { nome: "Constelação da Cruz Austral", custo: "—", descricao: "Use uma ação, gaste 20 PM e consuma uma carga de cada tipo (celeste, estelar, meteórica e solar): gera o efeito básico de cada um dos outros poderes de astrólogo, cada um em um alvo diferente, sem gastar PM ou ação." },
      { nome: "Constelação da Malora", custo: "ç3", descricao: "Use uma ação e gaste 5 PM: teste oposto 【AST + VON】 vs inimigo. Se vencer, o inimigo fica abalado. Consumindo uma carga estelar, o alvo fica Vulnerável a fogo até o fim da cena. Após usar, gera 【NP】 cargas meteóricas." },
      { nome: "Constelação do Saci", custo: "ç3", descricao: "Use uma ação e gaste 10 PM: um aliado que você veja pode fazer um ataque livre. Consumindo uma carga meteórica, o alvo recebe +1 na Defesa até o fim da cena. Após usar, gera 【NP】 cargas celestes." }
    ],
    cor: "#1a6b8a",
    emoji: "⭐"
  },
  {
    id: "atirador",
    nome: "Atirador",
    outrosNomes: ["Arqueiro", "Franco-atirador", "Pistoleiro"],
    citacao: "Fuja até o outro canto do mundo; minha flecha ainda encontrará você.",
    descricao: "A maioria dos Atiradores é excepcional em lidar com ameaças a uma distância cuidadosamente calculada; outros são corajosos, habilidosos ou imprudentes o bastante para enfrentar os adversários de perto. Embora muitos sejam soldados habilidosos, alguns caíram na pirataria, na caça a recompensas ou na bandidagem.",
    beneficiosIniciais: ["Aumente permanentemente seus PV máximos em 5.", "Você pode equipar armas à distância e escudos marciais."],
    perguntas: [
      "Alguns acreditam que flechas e balas são armas de covardes. E você?",
      "Se for pego desprevenido, você improvisa ou recua?",
      "Você é discreto e reservado, confiante e astuto ou expansivo e imprudente?",
      "Qual a aparência de suas armas e estilo de luta?"
    ],
    poderes: [
      { nome: "Barragem", custo: "—", descricao: "Ao fazer um ataque à distância, gaste 10 PM: o ataque ganha multi (2), ou você aumenta em +1 a propriedade multi (máximo multi 3)." },
      { nome: "Fogo Cruzado", custo: "—", descricao: "Quando uma criatura que você veja faz um ataque à distância, gaste PM igual ao teste de Precisão dela para fazer o ataque falhar automaticamente. Requer arma à distância equipada. Não funciona contra sucesso crítico." },
      { nome: "Maestria com Armas à Distância", custo: "ç4", descricao: "Você ganha bônus igual a 【NP】 em testes de Precisão à distância." },
      { nome: "Olhos de Águia", custo: "ç5", descricao: "Quando faz a ação Guarda sem dar cobertura: o próximo ataque à distância causa 【NP × 2】 de dano adicional, ou você pode imediatamente fazer um ataque livre com arco ou arma de fogo (RA = 0 para o dano)." },
      { nome: "Tiro de Aviso", custo: "ç4", descricao: "Após atingir alvos com um ataque à distância, você pode escolher não causar dano. Se fizer isso: cada alvo atingido fica abalado, ou lento, ou perde 【NP × 10】 PM." }
    ],
    cor: "#8a5a1a",
    emoji: "🏹"
  },
  {
    id: "bandoleiro",
    nome: "Bandoleiro",
    outrosNomes: ["Lampião", "Renegado", "Vaqueiro"],
    citacao: "Hoje, é dia de festa! Estamos entendidos, seu barão?!",
    descricao: "Bandoleiros são figuras dos agrestes e sertões. Mestres da emboscada, especialistas em desaparecer a galope por trilhas secretas e abrir caminho na faca e bala. Muitos são capangas rebeldes contra seus antigos senhores, reunindo-se em bandos para vingar injustiças. Combatem violência com violência, mas guiados por sua própria honra e crenças.",
    beneficiosIniciais: ["Aumente permanentemente seus PI máximos em 2.", "Você pode equipar armas corpo a corpo e armas à distância marciais."],
    perguntas: [
      "Qual o nome do seu bando? Como você entrou para ele?",
      "Quem está atrás de você e por qual motivo o persegue?",
      "Qual foi seu primeiro contato com os sertões? O que você sentiu?",
      "Qual é a crença, religiosa ou não, que guia todas as suas ações?"
    ],
    poderes: [
      { nome: "Cabra da Peste", custo: "ç5", descricao: "Uma vez por cena, se estiver em crise: use uma ação e gaste 1 Ponto de Fábula para se recuperar de todas as condições e recuperar PV igual a 【NP × 10】. Se gastar 1 Ponto de Ultima, também recupera PM igual a 【NP × 5】." },
      { nome: "Líder de Bando", custo: "ç3", descricao: "Em um conflito, quando você faz uma ação entre Feitiço, Guarda ou Poder para beneficiar outro PJ, o alvo também recebe bônus igual a 【NP】 em testes de Precisão e Magia até o fim do próximo turno dele." },
      { nome: "Redistribuir Riquezas", custo: "ç3", descricao: "Sempre que um vilão for vencido pelos PJs, você recebe 【1d6 × NP】 PI para distribuir. Se o vilão tiver mais de 1 Ponto de Ultima ao fim do conflito, você 'rouba' 1 Ponto de Ultima dele." },
      { nome: "Sertanejo", custo: "—", descricao: "Você possui uma conexão com uma região árida e desafiadora. Essa região conta como uma segunda Origem para você. Se usar um Ponto de Fábula para evocá-la, pode gastar 1 Ponto de Ultima em vez disso." },
      { nome: "Valhacouto", custo: "—", descricao: "Durante uma jornada, gaste PI igual a 【2 × número de testes de viagem】 para seu bando surgir com montarias para você e seu grupo, com sucesso automático nesses testes. Gastar 1 Ponto de Ultima reduz o custo em PI à metade." }
    ],
    cor: "#8a3a1a",
    emoji: "🤠"
  },
  {
    id: "carteador",
    nome: "Carteador",
    outrosNomes: ["Baralhomante", "Duelista do Destino", "Apostador"],
    citacao: "Não desvie o olhar!",
    descricao: "Carteadores usam baralhos especiais para compreender as constantes flutuações do rio das almas. Cada baralho está ligado ao seu usuário de maneira intrínseca, refletindo seus gostos e personalidade: sacando as combinações no momento certo, carteadores manipulam magia para gerar efeitos sobrenaturais.",
    beneficiosIniciais: ["Aumente permanentemente seus PV ou PM máximos em 5 (à sua escolha)."],
    perguntas: [
      "Quando você manifestou seus poderes mágicos pela primeira vez?",
      "Você é frio e perceptivo ou impetuoso e vivaz? Como é o seu baralho?",
      "Qual foi o evento mais infeliz da sua vida? O que aprendeu com ele?",
      "Como você combina seu baralho com as demais habilidades?"
    ],
    poderes: [
      { nome: "Altos e Baixos", custo: "—", descricao: "Quando rola um sucesso crítico ou falha crítica, pode comprar uma carta do baralho. Se fizer isso, descarte uma carta da mão." },
      { nome: "Carta Armadilha", custo: "ç4", descricao: "Após um inimigo fazer uma ação num conflito, declare um naipe. Ponha a primeira carta do fundo do baralho na pilha de descarte. Se for curinga ou o naipe declarado, faça a ação Feitiço sem custo de ação (feitiço com custo ≤ 【NP × 5】 PM)." },
      { nome: "Cartas Mágicas", custo: "ç3", descricao: "Use uma ação e gaste até 【10 + (NP × 5)】 PM: use o efeito de uma carta da mão para cada 5 PM gastos (máximo 5 cartas formando um conjunto). Depois, descarte as cartas usadas e compre a mesma quantidade." },
      { nome: "Dobro ou Nada", custo: "—", descricao: "Antes de fazer um teste de Precisão, Magia ofensivo, ou teste para afetar um relógio: declare dobro ou nada. Sucesso crítico dobra o dano/seções. Qualquer outro resultado é falha." },
      { nome: "Mulligan", custo: "ç5", descricao: "No final do seu turno em um conflito, descarte 【NP】 cartas da mão e compre a mesma quantidade do baralho." }
    ],
    cor: "#6b1a6b",
    emoji: "🃏"
  },
  {
    id: "cavaleiro-magico",
    nome: "Cavaleiro Mágico",
    outrosNomes: ["Garota Mágica", "Guerreiro Estelar", "Heróis Henshin"],
    citacao: "Minha alma inflama e meu poder desperta!",
    descricao: "Cavaleiros mágicos são raros. Suas relíquias mágicas, artefatos misteriosos de eras passadas, os escolhem pelo seu coração bondoso e senso de justiça. Seja um objeto místico ou tecnológico, cada relíquia é única e permite ao cavaleiro invocar trajes que os concedem armas e poderes incríveis.",
    beneficiosIniciais: ["Aumente permanentemente seus PM máximos em 5.", "Você pode equipar armaduras e escudos marciais."],
    perguntas: [
      "Como é a sua relíquia mágica? Como você a obteve?",
      "Como acontece sua transformação? Como ela afeta seus equipamentos?",
      "Qual é a aparência da sua forma mágica?",
      "Que valores você deve seguir para continuar usando sua relíquia?"
    ],
    poderes: [
      { nome: "Alma Ferida", custo: "ç5", descricao: "Uma vez por cena, ao entrar em crise: crie um Laço de desconfiança com até 【NP】 inimigos que você veja. Esses Laços duram até o fim da cena e não precisam apagar Laços pré-existentes." },
      { nome: "Coração Ardente", custo: "ç3", descricao: "Enquanto estiver sob efeito de uma forma mágica, ao evocar um Laço de desconfiança, inferioridade e/ou ódio em teste de Precisão ou Magia para causar dano, você causa 【NP × 10】 de dano adicional do mesmo tipo." },
      { nome: "Impulso do Coração", custo: "—", descricao: "O custo para usar Magitransformação é reduzido em PM igual à quantidade de Laços com emoções de admiração, lealdade e/ou afeto que você possui (mínimo de 20 PM)." },
      { nome: "Magitransformação", custo: "ç3", descricao: "Sempre que adquirir este poder, crie uma nova forma mágica. Use uma ação e gaste 25 PM para assumir uma forma mágica que possui." },
      { nome: "Transformação Aprimorada", custo: "ç3", descricao: "Sempre que adquirir este poder, escolha a arma ou armadura de uma de suas formas mágicas e modifique-a como se fosse um item raro (valor ≤ 30 × seu nível em zênites). Em cenas de descanso, gaste 2 PI por item para aplicar novas características." }
    ],
    cor: "#c41a8a",
    emoji: "✨"
  },
  {
    id: "comandante",
    nome: "Comandante",
    outrosNomes: ["Príncipe", "Rainha", "Shôgun"],
    citacao: "Não há vitoriosos em uma guerra.",
    descricao: "Comandantes são líderes e figuras inspiradoras. Alguns deles têm sangue nobre, mas a maioria mereceu a lealdade dos companheiros no campo de batalha, onde sua vontade de ferro e talentos táticos foram postos à prova. Líderes bandidos, nobres em desgraça e estudiosos de estratégia também são bons exemplos dessa classe.",
    beneficiosIniciais: ["Aumente permanentemente seus PV máximos em 5.", "Você pode equipar armas corpo a corpo e armas à distância marciais."],
    perguntas: [
      "Você tem sangue nobre? Ou é um herói de origem humilde?",
      "Você busca a batalha ou faz o possível para evitá-la?",
      "Existe algum sacrifício que você jamais faria pela vitória?",
      "Como suas habilidades se manifestam? Elas são visivelmente sobrenaturais?"
    ],
    poderes: [
      { nome: "Carga de Cavalaria", custo: "ç5", descricao: "Use uma ação e gaste 10 PM: escolha um aliado que possa ouvi-lo. O aliado faz imediatamente um ataque livre com bônus de Precisão igual ao seu 【NP】 (porém RA = 0 para o dano)." },
      { nome: "Carruagem Devastadora", custo: "—", descricao: "Após usar Decreto do Bispo, Carga de Cavalaria ou Roque do Rei, escolha outro PJ que possa ouvi-lo e ainda não tenha agido nesta rodada. O turno desse PJ acontece imediatamente após o seu." },
      { nome: "Decreto do Bispo", custo: "ç5", descricao: "Use uma ação e gaste 10 PM: todos os custos em PM são dobrados; ou todas as fontes de dano causam 【NP × 3】 de dano adicional." },
      { nome: "Gambito da Dama", custo: "ç6", descricao: "Use uma ação: faça um ataque livre (RA = 0 para o dano). Após o ataque, use imediatamente Decreto do Bispo, Carga de Cavalaria ou Roque do Rei sem ação (mas gasta o PM); ou um aliado recupera 【5 + (NP × 5)】 PV." },
      { nome: "Roque do Rei", custo: "ç4", descricao: "Use uma ação e gaste 10 PM: nenhuma criatura pode recuperar PV ou PM; ou todos os efeitos que restauram PM restauram 【NP × 5】 PM adicionais. Dura até o início do seu próximo turno." }
    ],
    cor: "#1a4a8a",
    emoji: "👑"
  },
  {
    id: "dançarino",
    nome: "Dançarino",
    outrosNomes: ["Acrobata", "Bufão", "Bucaneiro"],
    citacao: "Minha história? Dance comigo para descobrir.",
    descricao: "Dançarinos treinaram seus corpos para obter coordenação e flexibilidade excepcionais. Os mais habilidosos sabem direcionar o fluxo das forças espirituais com movimentos precisos e repetitivos, elevando suas habilidades e manifestando efeitos mágicos. São combatentes surpreendentemente capazes, embora um pouco... dramáticos.",
    beneficiosIniciais: ["Aumente permanentemente seus PV ou PM máximos em 5 (à sua escolha)."],
    perguntas: [
      "Suas habilidades exigem bastante foco e disciplina? Quem te ensinou?",
      "Por que você dança? É um tipo de arte, uma profissão, ou algo diferente?",
      "Você é gracioso e charmoso ou malandro e espalhafatoso?",
      "Como são suas apresentações e acrobacias?"
    ],
    poderes: [
      { nome: "Dança", custo: "ç10", descricao: "Sempre que adquirir esse poder, aprenda uma dança. Em seu turno em um conflito, sem armadura marcial equipada, gaste 10 PM para apresentar uma dança (antes ou depois de sua ação). Se já apresentou uma dança diferente no turno anterior na mesma cena, o custo é reduzido em 5 PM." },
      { nome: "Dançarino de Guerra", custo: "ç5", descricao: "Após apresentar uma dança, seus ataques com adaga, arremesso, luta e malho causam 【NP】 de dano adicional até o início do próximo turno. Se tiver arma arcana, feitiços ofensivos também causam 【NP】 de dano adicional." },
      { nome: "Me Acompanhe", custo: "—", descricao: "Ao apresentar uma dança de duração 'até o início de seu próximo turno', gaste 10 PM adicionais: um aliado com quem você tem Laço de afeto também recebe os benefícios da dança." },
      { nome: "Sapateado Frenético", custo: "ç2", descricao: "Ao apresentar uma dança de duração 'até o início de seu próximo turno', todos os testes opostos de acrobacia, coordenação ou velocidade recebem bônus igual a 【NP × 2】." },
      { nome: "Troca de Figurino", custo: "—", descricao: "Após apresentar uma dança, você pode fazer a ação Equipamento sem usar ações." }
    ],
    cor: "#c47a1a",
    emoji: "💃"
  },
  {
    id: "elementalista",
    nome: "Elementalista",
    outrosNomes: ["Feiticeiro", "Geomante", "Mago de Batalha"],
    citacao: "Ignore os avisos deste mundo por sua conta e risco.",
    descricao: "Os Elementalistas aprendem a canalizar as almas que fluem dentro dos elementos básicos da criação: Água, Terra, Fogo e Ar. Alguns desenvolvem feitiços complexos para conter os poderosos elementos da natureza; outros buscam a proteção em harmonia e comunhão. Magia elemental pode ser muito destrutiva.",
    beneficiosIniciais: ["Aumente permanentemente seus PM máximos em 5.", "Você pode fazer rituais cujos efeitos pertençam à disciplina de ritualismo."],
    perguntas: [
      "Quem treinou você no caminho dos Elementos?",
      "Sua magia pode ser devastadora... Você teme a si mesmo?",
      "A magia elemental é muito usada na guerra. Você serviu no exército?",
      "Qual a aparência de sua magia?"
    ],
    poderes: [
      { nome: "Artilharia Mágica", custo: "ç3", descricao: "Quando lança um feitiço ofensivo com arma arcana equipada, recebe bônus igual a 【NP × 2】 no teste de Magia." },
      { nome: "Cataclismo", custo: "ç3", descricao: "Ao lançar feitiço de duração 'instantânea' com arma arcana, aumente o custo total em até 【NP × 10】 PM: para cada 10 PM extras, cada criatura sofre +5 pontos de dano." },
      { nome: "Elementalismo Ritualista", custo: "—", descricao: "Você pode fazer rituais da disciplina elementalismo. Rituais usam 【AST + VON】 no teste de Magia." },
      { nome: "Lâmina Mágica", custo: "ç4", descricao: "Ao lançar feitiço ofensivo (custo ≤ 【NP × 10】 PM) com alvo único, usando adaga/arco/espada/lança/luta/malho, pode usar a fórmula de Precisão da arma em vez do teste de Magia." },
      { nome: "Magia Elemental", custo: "ç10", descricao: "Sempre que adquirir, aprenda um feitiço de Elementalista. Feitiços ofensivos usam 【AST + VON】 no teste de Magia." }
    ],
    cor: "#c43a1a",
    emoji: "🔥"
  },
  {
    id: "entropista",
    nome: "Entropista",
    outrosNomes: ["Apostador", "Astromante", "Mago do Caos"],
    citacao: "O frio entre as estrelas... ele não me assusta.",
    descricao: "Muito acima das estrelas, onde sua luz não brilha, existe um vazio sem fundo onde a vida e as almas murcham e se transformam em algo irreconhecível. Esse reino é uma não realidade, um caos vasto e infinito imune às leis do tempo, do espaço e da probabilidade. Entropistas o chamam de Cosmos, Céu ou apenas Sorte.",
    beneficiosIniciais: ["Aumente permanentemente seus PM máximos em 5.", "Você pode fazer rituais da disciplina ritualismo."],
    perguntas: [
      "Quem ensinou você a canalizar os poderes do Cosmos e distorcer a realidade?",
      "O que você sabe sobre o Cosmos? É o fim de uma realidade ou o novo começo?",
      "Qual a aparência de sua magia?",
      "Há muitos praticando a sua magia ou você é uma exceção?"
    ],
    poderes: [
      { nome: "Absorver PM", custo: "ç5", descricao: "Depois de sofrer dano, você pode imediatamente recuperar 【NP × 2】 PM." },
      { nome: "Entropismo Ritualista", custo: "—", descricao: "Você pode fazer rituais da disciplina entropismo. Rituais usam 【AST + VON】 no teste de Magia." },
      { nome: "Magia Entrópica", custo: "ç10", descricao: "Sempre que adquirir, aprenda um feitiço de Entropista. Feitiços ofensivos usam 【AST + VON】 no teste de Magia." },
      { nome: "Sete da Sorte", custo: "—", descricao: "Você tem um número da sorte (começa em 7 por sessão). Uma vez por cena, após fazer um teste, pode substituir o valor de um dado pelo seu número da sorte. O valor substituído torna-se seu novo número da sorte." },
      { nome: "Tempo Roubado", custo: "ç4", descricao: "Durante um conflito, use uma ação e gaste até 【NP × 5】 PM: para cada 5 PM, escolha uma opção — deixar uma criatura lenta, remover lentidão, fazer ela agir imediatamente, ou fazer um aliado agir logo após você." }
    ],
    cor: "#1a5a6b",
    emoji: "🎲"
  },
  {
    id: "erudito",
    nome: "Erudito",
    outrosNomes: ["Acadêmico", "Arquivista", "Sábio"],
    citacao: "Ah, eu sabia que isto aconteceria.",
    descricao: "Eruditos são famosos pela sua fome insaciável por descobertas. Eles acreditam com louvor que conhecimento é poder e dariam todo o ouro do mundo para ter a chance de solucionar um bom mistério. Infelizmente, muitos são desligados e se distraem com facilidade.",
    beneficiosIniciais: ["Aumente permanentemente seus PM máximos em 5."],
    perguntas: [
      "Quem é ou era seu mentor? Como é ou era sua relação com essa pessoa?",
      "Você frequentava uma academia ou escola? Que tipo de pessoas conhecia lá?",
      "Há um mistério milenar pelo qual você tem obsessão. O que é?",
      "É verdade que algumas coisas são melhores se esquecidas pelo tempo?"
    ],
    poderes: [
      { nome: "Análise Rápida", custo: "ç6", descricao: "No início de um conflito, gaste até 【NP × 5】 PM: para cada 5 PM, o mestre revela um Traço de uma criatura, ou revela a Afinidade de uma criatura a um tipo de dano escolhido." },
      { nome: "Concentrado", custo: "ç5", descricao: "Ao fazer um teste aberto usando 【AST + AST】, você ganha bônus igual a 【NP】 naquele teste (funciona apenas em testes abertos). Além disso, aumente permanentemente seus PM máximos em 【NP × 3】." },
      { nome: "Conhecimento é Poder", custo: "—", descricao: "Quando faz um teste de Precisão, pode substituir um de seus dados de Atributo por Astúcia." },
      { nome: "Lampejo de Saber", custo: "ç3", descricao: "Quando tira 13 ou mais em um teste de investigação (inclusive ação Estudo), pode fazer até 【NP】 perguntas ao mestre sobre o tópico. Só pode ser usado uma vez para a mesma criatura, item ou local." },
      { nome: "Memória Treinada", custo: "—", descricao: "Você pode lembrar com perfeição dos detalhes de qualquer cena em que tenha estado na última semana. Seu poder Lampejo de Saber também pode ser usado nessas memórias." }
    ],
    cor: "#5a6b1a",
    emoji: "📚"
  },
  {
    id: "esper",
    nome: "Esper",
    outrosNomes: ["Empata", "Psiônico", "Hacker de Almas"],
    citacao: "Paz ditada por uma vontade única não é paz; é apenas uma forma diferente de submissão.",
    descricao: "Desejos, emoções e pensamentos são forças poderosas que influenciam o rio das almas. Espers cultivaram a habilidade de se conectar com essa rede espiritual de sensações e a usam para transmitir informações e aumentar suas habilidades físicas e mentais. Cada esper usa seus poderes de forma nitidamente diferente.",
    beneficiosIniciais: ["Aumente permanentemente seus PM máximos em 5."],
    perguntas: [
      "Como você desenvolveu suas habilidades psíquicas? Alguém o treinou?",
      "Suas habilidades são comuns ou você é uma exceção?",
      "Quais atributos ou poderes você pode fortalecer com suas artes psíquicas?",
      "Que qualidade incomum ou preocupante seus poderes têm?"
    ],
    poderes: [
      { nome: "Dons Psíquicos", custo: "ç5", descricao: "Sempre que adquirir este poder, você recebe um dom. Dons só podem ser usados em reação a eventos específicos, gastando PM igual a 【5 × seções preenchidas no Relógio Mental】 (mínimo 5 PM)." },
      { nome: "Foco Cognitivo", custo: "ç5", descricao: "No início do seu turno em conflito, escolha um aliado ou inimigo abalado/atordoado/enfurecido: essa criatura é seu foco. Bônus de 【NP】 em testes para examinar o foco e em Precisão/Magia contra ele. Curas ao foco recuperam 【NP × 2】 a mais." },
      { nome: "Hipercognição", custo: "ç5", descricao: "O custo total em PM de seus feitiços e versos que têm seu foco entre os alvos é reduzido em 【NP】; ou em 【NP × 2】 se o foco for o único alvo (mínimo 0 PM)." },
      { nome: "Navegador", custo: "—", descricao: "Comunique-se telepaticamente com aliados conscientes a até 1 dia de viagem. Você pode fazer rituais de ritualismo, e pode usar ritualismo para transportar criaturas dentro/fora da rede de almas e rastrear entidades." },
      { nome: "Psicocinese", custo: "—", descricao: "Quando faz um teste de Precisão, pode substituir um dos dados de atributo por Vontade. Além disso, seus ataques corpo a corpo com espadas ou armas arcanas podem atingir criaturas voadoras." }
    ],
    cor: "#8a1a6b",
    emoji: "🧠"
  },
  {
    id: "espiritualista",
    nome: "Espiritualista",
    outrosNomes: ["Bruxa", "Curandeiro", "Sacerdote"],
    citacao: "Mostre-me a verdade do seu coração.",
    descricao: "Os Espiritualistas cultivam uma poderosa conexão com os aspectos brutos da alma: emoção, energia, vida e morte. Eles usam poderes tão milagrosos quanto assustadores e costumam ser afiliados a cultos ou religiões. Não há prova definitiva de que essas habilidades vêm de algo além de disciplina, empatia e foco.",
    beneficiosIniciais: ["Aumente permanentemente seus PM máximos em 5.", "Você pode fazer rituais da disciplina ritualismo."],
    perguntas: [
      "De onde vem a sua magia? Quais são as suas crenças sobre vida e morte?",
      "Como se sente sobre manipular as emoções e a energia vital das pessoas?",
      "O que acha sobre religião? Você é parte de um culto ou igreja em específico?",
      "Qual a aparência de sua magia?"
    ],
    poderes: [
      { nome: "Espiritualismo Ritualista", custo: "—", descricao: "Você pode fazer rituais da disciplina espiritualismo. Rituais usam 【AST + VON】 no teste de Magia." },
      { nome: "Magia de Suporte", custo: "—", descricao: "Ao lançar um feitiço com alvo em um ou mais aliados, com arma arcana equipada, escolha um desses aliados com quem você tenha um Laço. O aliado ganha bônus igual à força do seu Laço no próximo teste até o fim da cena." },
      { nome: "Magia Espiritual", custo: "ç10", descricao: "Sempre que adquirir, aprenda um feitiço de Espiritualista. Feitiços ofensivos usam 【AST + VON】 no teste de Magia." },
      { nome: "Poder Curativo", custo: "ç2", descricao: "Ao lançar feitiço com alvo em aliados, com arma arcana equipada, cada aliado alvo recupera PV igual a 【NP multiplicado pelo número de Laços que você tem】." },
      { nome: "Vismagus", custo: "—", descricao: "Ao lançar um feitiço sem PM suficientes, pode gastar o dobro do custo em PV (não pode fazê-lo com 0 PV). Feitiços conjurados assim não recuperam seus PV." }
    ],
    cor: "#5a1a8a",
    emoji: "🕯️"
  },
  {
    id: "floralista",
    nome: "Floralista",
    outrosNomes: ["Lâmina do Florescer", "Jardineiro", "Herbalista"],
    citacao: "Não há rosas sem espinhos.",
    descricao: "A energia espiritual é bem intensa nas plantas, graças à sua conexão direta com a terra. Disso, brotam as magissementes, portadoras da habilidade única de se nutrir com energia espiritual e florescer num majestoso e efêmero triunfo mágico. Floralistas são capazes de identificar e cultivar tais sementes.",
    beneficiosIniciais: ["Aumente permanentemente seus PV ou PM máximos em 5 (à sua escolha)."],
    perguntas: [
      "Quando e onde você descobriu sua primeira magissemente?",
      "Quem te ensinou a cuidar de plantas e flores?",
      "Como você implementou as magissementes em seu estilo de combate?",
      "Há muitos praticando a sua arte ou você é uma exceção?"
    ],
    poderes: [
      { nome: "Árvore da Vida", custo: "ç5", descricao: "Ao remover uma magissemente do jardim, escolha uma criatura que veja: se estiver em crise, ela recupera 【5 + (NP × 5)】 PV." },
      { nome: "Cloromancia", custo: "ç10", descricao: "Sempre que adquirir, conheça um tipo diferente de magissemente. Durante um conflito, sem magissementes no jardim, use uma ação e gaste 20 PM para plantar uma magissemente de um tipo que conheça." },
      { nome: "Enxerto", custo: "—", descricao: "Com uma magissemente no jardim e 1+ seções do relógio de germinação preenchidas, use uma ação para remover a magissemente e plantar uma diferente (sem alterar as seções do relógio)." },
      { nome: "Influência Verdejante", custo: "—", descricao: "Pode fazer rituais de ritualismo. Também pode usar ritualismo para criar, animar e/ou controlar vegetação, pólen, esporos e toxinas." },
      { nome: "Jardinagem Marcial", custo: "ç3", descricao: "Após plantar uma magissemente via Cloromancia (não Enxerto): faça um ataque livre com arma equipada; ou faça a ação Feitiço sem ação (custo ≤ 【5 + (NP × 5)】 PM). RA = 0 para o dano." }
    ],
    cor: "#2a8a3a",
    emoji: "🌸"
  },
  {
    id: "forjador-de-almas",
    nome: "Forjador de Almas",
    outrosNomes: ["Alma Armada", "Ferreiro Mágico", "Mestre Rúnico"],
    citacao: "Essa arma não pode fazer isso… ainda.",
    descricao: "Como um talento que permite transformar a energia mágica do rio das almas em um poderoso objeto, ou armazenar esse poder em itens comuns; é impossível negar a eficiência e esmero dos forjadores de almas. Renomados mestres das artes mágicas desconfiam de tal capacidade.",
    beneficiosIniciais: ["Aumente permanentemente seus PI máximos em 2."],
    perguntas: [
      "Como você enxerga as implicações éticas de forjar almas?",
      "Qual é a aparência das suas runas espirituais?",
      "Como você aprendeu a forjar armas em formas de armas poderosas?",
      "O que você sacrifica para continuar aprimorando almas?"
    ],
    poderes: [
      { nome: "Espírito Elemental", custo: "—", descricao: "Escolha um elemento (ar, fogo, gelo, raio ou terra). Você recebe Resistência ao elemento escolhido e pode causar dano desse elemento com uma arma fabricada por Forja de Batalha ou com uma runa incrustada." },
      { nome: "Forja de Batalha", custo: "—", descricao: "No seu turno em combate, faça a ação Equipamento e gaste 2 PI para manifestar uma arma básica (substitui a anterior). Se tiver mãos livres, pode equipá-la imediatamente. Com ela, pode trocar um Atributo do teste de Precisão por Vontade." },
      { nome: "Runa Defensiva", custo: "ç5", descricao: "Sempre que adquirir, aprenda uma característica defensiva de armas (custo ≤ 500z + (nível × 40z)). Faça a ação Inventário e gaste 2 PI para incrustar uma runa em uma arma ao alcance, aplicando os efeitos até o fim da cena." },
      { nome: "Runa Elemental", custo: "ç5", descricao: "Sempre que adquirir, escolha um feitiço ofensivo de elementalista. Esse feitiço pode ser incrustado como runa — um personagem equipado com o item pode fazer a ação Feitiço para lançá-lo normalmente. Após isso, o efeito da runa termina." },
      { nome: "Runa Ofensiva", custo: "ç5", descricao: "Sempre que adquirir, aprenda uma característica ofensiva de armas (custo ≤ 500z + (nível × 40z)). Funciona como Runa Defensiva." }
    ],
    cor: "#6b4a1a",
    emoji: "⚒️"
  },
  {
    id: "furioso",
    nome: "Furioso",
    outrosNomes: ["Berserker", "Lutador", "Viking"],
    citacao: "Eu só preciso ficar mais forte que você!",
    descricao: "Furiosos não sabem parar — na guerra e na vida, são enérgicos, determinados e implacáveis. Seja quais forem os seus ideais ou desejos, eles não param por nada e arriscam tudo para conquistá-los. Alguns passam por treinamentos rígidos; outros apenas veem o poder como a solução de todos os problemas.",
    beneficiosIniciais: ["Aumente permanentemente seus PV máximos em 5.", "Você pode equipar armas corpo a corpo e armaduras marciais."],
    perguntas: [
      "Você conta com sua paixão ardente ou tenta mantê-la sob controle?",
      "Tem sempre uma coisa específica que faz você perder a cabeça. O que é?",
      "No passado, seu descontrole teve consequências trágicas. O que você perdeu?",
      "Qual a aparência de suas armas e como é seu estilo de luta?"
    ],
    poderes: [
      { nome: "Adrenalina", custo: "ç5", descricao: "Enquanto estiver em crise, você causa 【NP × 2】 de dano adicional (seja através de ataques, feitiços, Arcanos, itens ou qualquer outro meio)." },
      { nome: "Espírito Indomável", custo: "ç4", descricao: "Quando gasta um ou mais Pontos de Fábula, receba um benefício adicional: recupera 【NP × 5】 PV; ou recupera 【NP × 5】 PM; ou se recupera de uma única condição à sua escolha." },
      { nome: "Frenesi", custo: "—", descricao: "Seus testes de Precisão com adaga, luta, malho e armas de arremesso contam como sucesso crítico se ambos os dados mostrarem o mesmo número (desde que não seja falha crítica)." },
      { nome: "Provocar", custo: "ç5", descricao: "Use uma ação e gaste 5 PM: teste oposto 【VIG + VON】 vs uma criatura. Se passar, o alvo fica enfurecido e compelido a focar em você. Você ganha bônus de 【NP】 neste teste." },
      { nome: "Resistir", custo: "ç5", descricao: "Quando faz a ação Guarda sem dar cobertura: recupera PV igual a 【NP × maior força de Laço】 e escolhe Vigor ou Vontade. Até o fim do próximo turno, o dado do Atributo escolhido é um passo maior." }
    ],
    cor: "#c41a1a",
    emoji: "⚔️"
  },
  {
    id: "gourmet",
    nome: "Gourmet",
    outrosNomes: ["Cervejeiro", "Chef", "Confeiteiro"],
    citacao: "Chefes de verdade respeitam a natureza do que transformam.",
    descricao: "Cozinhar pode ser uma habilidade comum, mas os gourmets refinam o seu conhecimento sobre alimentos a um nível que quase torna-se sobrenatural: aperfeiçoando a arte de extrair a energia espiritual dos ingredientes e infusionando suas refeições com efeitos poderosos.",
    beneficiosIniciais: ["Aumente permanentemente seus Pontos de Inventário em 2.", "Você pode iniciar projetos para criar comidas e bebidas únicas."],
    perguntas: [
      "Quem te ensinou a cozinhar? Qual sua relação com seu mentor?",
      "Sua arte é revolucionária ou você já é estabelecido no meio?",
      "Qual a aparência dos seus pratos? Que ferramentas você usa?",
      "Por qual receita ou ingrediente lendário você está procurando?"
    ],
    poderes: [
      { nome: "Cozinheiro Viajante", custo: "ç3", descricao: "Após cada rolagem de viagem, se tiver o poder Culinária, você recebe 【NP × 2】 ingredientes." },
      { nome: "Culinária", custo: "ç5", descricao: "Ao descansar em um assentamento, receba 【NP】 ingredientes. Use uma ação e combine 2 ou 3 ingredientes para preparar uma iguaria. Escolha: aplique em você e um aliado; ou faça um ataque livre (sem dano) para aplicar em inimigos atingidos." },
      { nome: "Feito com Amor", custo: "ç3", descricao: "Quando usa Culinária para aplicar efeito em aliados, gaste até 【NP × 10】 PM: para cada 10 PM, aplique o efeito em um aliado adicional." },
      { nome: "Garfo e Faca", custo: "—", descricao: "Quando usa Culinária para fazer um ataque livre com apenas 2 ingredientes, o ataque pode causar dano normalmente (RA = 0 para o dano)." },
      { nome: "Sal e Pimenta", custo: "—", descricao: "Ao preparar uma iguaria, gaste 2 PI: mude o sabor de um ingrediente para outro sabor à sua escolha." }
    ],
    cor: "#c47a3a",
    emoji: "🍴"
  },
  {
    id: "guardião",
    nome: "Guardião",
    outrosNomes: ["Paladino", "Soldado", "Yojimbo"],
    citacao: "Deixe-me ser seu escudo.",
    descricao: "Orgulhosos e altruístas, Guardiões sabem o valor da vida... e estão dispostos a se sacrificar por uma pessoa, nação ou ideal que juraram proteger. Costumam ser indivíduos extraordinários e impressionantes, como soldados ou veteranos valentes marcados por centenas de batalhas.",
    beneficiosIniciais: ["Aumente permanentemente seus PV máximos em 5.", "Você pode equipar armaduras e escudos marciais."],
    perguntas: [
      "Por quem ou pelo que você daria sua vida de bom grado para proteger?",
      "Você está ou já esteve a serviço de uma dama ou lorde? Como era essa pessoa?",
      "O que você falhou em proteger? O que você perdeu?",
      "O que você usa de armadura e/ou escudo?"
    ],
    poderes: [
      { nome: "Duplo Escudeiro", custo: "—", descricao: "Você pode equipar um escudo na mão dominante. Com dois escudos, ganha benefícios de ambos e pode usá-los como arma de luta de duas mãos: Escudos Gêmeos — 【VIG + VIG】, 【RA + 5】 físico, dano adicional igual ao seu 【NP】 em Maestria Defensiva." },
      { nome: "Fortaleza", custo: "ç5", descricao: "Aumente permanentemente seus PV máximos em 【NP × 3】." },
      { nome: "Guarda-costas", custo: "—", descricao: "Se você fizer a ação Guarda e escolher dar cobertura a outra criatura, essa criatura ganha Resistência a todos os tipos de dano até o início do seu próximo turno." },
      { nome: "Maestria Defensiva", custo: "ç5", descricao: "Enquanto tiver escudo ou armadura marcial equipada, todo dano sofrido é reduzido em 【NP】 (aplicado antes de Afinidades)." },
      { nome: "Proteger", custo: "—", descricao: "Quando outra criatura é ameaçada por um perigo, você pode tomar o lugar dela. Os testes serão realizados contra você; você pode declarar antes ou depois dos testes. Se o perigo já afetou você, ele o afetará duas vezes." }
    ],
    cor: "#1a5a3a",
    emoji: "🛡️"
  },
  {
    id: "guerreiro-sombrio",
    nome: "Guerreiro Sombrio",
    outrosNomes: ["Cavaleiro da Morte", "Cavaleiro das Trevas", "Vingador"],
    citacao: "Hoje você conhecerá a extensão do meu sofrimento.",
    descricao: "Guerreiros Sombrios são combatentes lúgubres e poderosos que escondem passados tristes. Devido a suas experiências trágicas, sua alma desenvolveu uma afinidade à dor e a energias sombrias. Heróis no mínimo improváveis, Guerreiros Sombrios sacrificam a própria força vital para desferir golpes poderosos.",
    beneficiosIniciais: ["Aumente permanentemente seus PV máximos em 5.", "Você pode equipar armas corpo a corpo e armaduras marciais."],
    perguntas: [
      "Que experiência trágica despertou suas habilidades?",
      "Muitos acreditam que seus poderes são malignos. Como se sente sobre eles?",
      "Qual a aparência de suas armas e como é seu estilo de luta?",
      "Há muitos praticando a sua magia ou você é uma exceção?"
    ],
    poderes: [
      { nome: "Agonia", custo: "ç5", descricao: "Quando causa dano a uma ou mais criaturas, se tiver um Laço com pelo menos uma delas, você recupera 【NP × 2】 PV e 【NP × 2】 PM." },
      { nome: "Coração da Escuridão", custo: "—", descricao: "Uma vez por cena, ao entrar em crise, escolha uma criatura que você veja e com quem não tenha Laço: você cria um Laço de ódio com a criatura escolhida." },
      { nome: "Golpe das Sombras", custo: "ç5", descricao: "Use uma ação: role seu dado de Vigor e perca essa quantidade de PV. Se não reduzir seus PV a 0, faça um ataque livre. Se acertar, cause dano adicional igual a 【NP + número rolado no dado de Vigor】 em trevas (tipo não pode ser alterado)." },
      { nome: "Lição Dolorosa", custo: "ç3", descricao: "Quando outra criatura faz você perder PV, pode fazer a ação Estudo imediatamente, com bônus igual a 【NP】 no teste. Só pode estudar o mesmo aspecto uma vez." },
      { nome: "Sangue das Trevas", custo: "—", descricao: "Enquanto estiver em crise, você tem Resistência a dano de trevas e de veneno." }
    ],
    cor: "#3a1a4a",
    emoji: "💀"
  },
  {
    id: "inventor",
    nome: "Inventor",
    outrosNomes: ["Alquimista", "Engenheiro Tecnomágico", "Mecânico"],
    citacao: "Gosto de imaginar que aquilo que temos hoje não foi um presente dos deuses.",
    descricao: "Inventores têm uma engenhosidade sem igual, conhecidos por suas invenções excêntricas e maravilhosas. Viajam ao redor do mundo em uma busca infindável por teorias perdidas e maquinário antigo. De certo modo, os Inventores são os maiores sonhadores e rebeldes, desafiando as regras da natureza e da sociedade.",
    beneficiosIniciais: ["Aumente permanentemente seus PI máximos em 2.", "Você pode iniciar Projetos."],
    perguntas: [
      "Você aprendeu sua arte com alguém? Qual era sua relação com essa pessoa?",
      "O que você perdeu indo atrás de progresso e inovação?",
      "Sua arte é revolucionária? Ou pertence a uma área bem estabelecida?",
      "Quando um item ou efeito é criado por você, como ele se parece?"
    ],
    poderes: [
      { nome: "Chuva de Poções", custo: "ç2", descricao: "Quando cria uma poção que restaura PV e/ou PM de uma única criatura, pode fazê-la afetar até 【NP】 criaturas adicionais. Se fizer isso, a poção restaura apenas metade da quantidade normal de PV e PM para cada criatura." },
      { nome: "Engenhocas", custo: "ç5", descricao: "Sempre que adquirir pela primeira vez, escolha um tipo de engenhoca: Alquimia, Infusões ou Tecnomagia. Você ganha os benefícios básicos. Ao adquirir novamente, escolha: benefícios básicos de novo tipo; ou benefícios avançados; ou benefícios superiores." },
      { nome: "Fórmula Secreta", custo: "ç5", descricao: "Poções/magisferas que restauram PV/PM restauram 【NP × 5】 a mais. Fragmentos elementais, magisferas e poções que causam dano causam 【NP】 de dano adicional." },
      { nome: "Item Emergencial", custo: "—", descricao: "Uma vez por cena de conflito, quando estiver em crise, pode fazer mais uma ação no seu turno — mas deve ser a ação Inventário." },
      { nome: "Visionário", custo: "ç5", descricao: "Quando trabalha em um projeto, até 【NP × 100】 zênites do custo de material são pagos automaticamente. Além disso, gera mais 【NP】 de progresso por dia. Se vários personagens com este poder trabalharem no mesmo projeto, os efeitos são cumulativos." }
    ],
    cor: "#4a6b1a",
    emoji: "⚙️"
  },
  {
    id: "invocador",
    nome: "Invocador",
    outrosNomes: ["Ascecla", "Canalizador", "Mestre das Cinco Almas"],
    citacao: "Anseie pela compreensão, não pelo controle.",
    descricao: "Invocadores estudam a energia inata das almas e a forma como ela flui e se manifesta espontaneamente em seus arredores. Sua arte se adapta às fontes já existentes em vez de forçar um resultado que não é natural. Detentores de grande flexibilidade e com uma afinidade única para com as criaturas elementais.",
    beneficiosIniciais: ["Aumente permanentemente seus PV ou PM máximos em 5 (à sua escolha)."],
    perguntas: [
      "Como você desenvolveu a arte da invocação?",
      "Há um espírito ou criatura elemental com quem você tem um vínculo único?",
      "Como suas invocações se manifestam?",
      "Suas habilidades são comuns ou você é uma exceção?"
    ],
    poderes: [
      { nome: "Cascata", custo: "ç5", descricao: "Após um inimigo que você veja perder PV graças ao dano de um aliado com dano adicional de uma invocação tipo 'Praga', pode fazer um ataque livre contra esse inimigo com bônus de 【NP】. Se acertar, o dano é do mesmo tipo e as invocações 'Praga' no alvo se dissipam." },
      { nome: "Expandir Manancial", custo: "ç5", descricao: "Com arco, arma arcana, arma arremessável, arma de luta, espada ou mangual equipada: suas invocações 'explosão' causam 【NP】 de dano adicional e o dano adicional de invocações 'praga' aumenta em 【NP】." },
      { nome: "Harmonia Elemental", custo: "ç2", descricao: "Você consegue se comunicar verbalmente com criaturas elementais. Ao restaurar PV de uma criatura com invocação ou feitiço, se houver um elemental na cena, o efeito restaura 【NP × 5】 PV adicionais." },
      { nome: "Invocação", custo: "ç3", descricao: "Use uma ação e gaste 5 PM: faça uma invocação acessando a energia de um dos mananciais presentes na cena. Seu 【NP】 determina a quais invocações você tem acesso." },
      { nome: "Invocações Conectadas", custo: "ç3", descricao: "Ao fazer uma invocação, gaste até 【NP × 10】 PM adicionais: a cada 10 PM, a invocação pode ter uma criatura adicional que você veja como alvo." }
    ],
    cor: "#1a7a6b",
    emoji: "🌊"
  },
  {
    id: "ladino",
    nome: "Ladino",
    outrosNomes: ["Bandido", "Ladrão", "Ninja"],
    citacao: "Eu encontrarei minha própria justiça.",
    descricao: "Sejam criminosos, rebeldes ou espiões, os Ladinos estão mais que dispostos a jogar sujo para conseguirem o que querem. No geral, são rápidos, perspicazes e evasivos. É comum que Ladinos tenham o trágico destino de serem vistos como ameaça pelas mesmas pessoas a quem defendem.",
    beneficiosIniciais: ["Aumente permanentemente seus PI máximos em 2."],
    perguntas: [
      "O que motiva você? Desejo? Vingança? Ou uma ânsia ardente por liberdade?",
      "Você é parte de uma organização criminosa? Ou trabalha por conta própria?",
      "Há algum lugar que você chama de casa? Ou, no final, todos morrem sozinhos?",
      "Qual é a regra mais importante do seu código pessoal?"
    ],
    poderes: [
      { nome: "Alta Velocidade", custo: "ç3", descricao: "No início de um conflito, gaste 10 PM: faça um ataque livre, ou faça a ação Impedimento ou Objetivo — isso acontece antes da primeira rodada. Você também ganha bônus de 【NP】 nos testes da opção escolhida." },
      { nome: "Esquiva", custo: "ç3", descricao: "Enquanto não tiver escudos ou armaduras marciais equipadas, sua Defesa aumenta em 【NP】." },
      { nome: "Golpe Baixo", custo: "ç5", descricao: "Quando atinge uma criatura com um ataque, e apenas ela for o alvo e estiver sofrendo uma ou mais condições, você causa dano adicional igual a 【NP + número de condições】." },
      { nome: "Roubo de Alma", custo: "ç5", descricao: "Use uma ação: teste 【DES + VON】 vs Def.M. Se o alvo for soldado, recupere 【NP】 PI. Se for elite ou campeão, receba o tesouro da alma (item com valor ≤ nível × 30 ou 50 para vilão). Ganha bônus de 【NP】 neste teste." },
      { nome: "Vejo Você Mais Tarde", custo: "—", descricao: "Gaste uma ação e 1 Ponto de Fábula para sumir da cena atual, reaparecendo quando quiser durante uma cena diferente em que outro PJ esteja." }
    ],
    cor: "#2a2a2a",
    emoji: "🗡️"
  },
  {
    id: "lamina-carmesim",
    nome: "Lâmina Carmesim",
    outrosNomes: ["Cavaleiro Vermelho", "Dampiro", "Hemomante"],
    citacao: "Sangue é vivo!",
    descricao: "Seu domínio é o sangue, podendo moldar o fluxo da vida. Dizem que todo lâmina descende de mortos-vivos como vampiros e outros hematófagos. Aprendem a dominar os seus poderes à medida que controlam uma sede de sangue. Outros creem que seus poderes vêm de extensos experimentos alquímicos.",
    beneficiosIniciais: ["Aumente permanentemente seus PV máximos em 5.", "Você pode equipar armas corpo a corpo e escudos marciais."],
    perguntas: [
      "Como você aprendeu a dominar o sangue?",
      "Você tem uma sede insaciável por sangue. Como você lida com ela?",
      "Como você age quanto ao preconceito sobre suas habilidades?",
      "Algo corre em suas veias além de sangue quente. O quê?"
    ],
    poderes: [
      { nome: "Arsenal Vermelho", custo: "—", descricao: "Use uma ação e gaste 5 PV: cubra uma arma corpo a corpo com sangue até o fim da cena. A arma dispara cortes de sangue, atingindo alvos que não podem ser acertados por ataques corpo a corpo. Alvos voadores atingidos são forçados a pousar. Em crise: não gasta PV e pode fazer um ataque livre." },
      { nome: "Dobrar Sangue", custo: "—", descricao: "Use uma ação e gaste 20 PM: escolha um ataque básico ou feitiço de um inimigo que você veja. Teste oposto 【VON + VIG】 vs o inimigo. Se vencer, o alvo é obrigado a usar a ação escolhida contra um alvo à sua escolha." },
      { nome: "Escudo Escarlate", custo: "—", descricao: "Quando outra criatura faz você perder PV, gaste 10 PM: tenha Resistência ao tipo do dano sofrido até o final do seu próximo turno." },
      { nome: "Frenesi Sanguinolento", custo: "ç3", descricao: "Uma vez por cena, ao entrar em crise ou ser reduzido a 0 PV: gaste 1 Ponto de Fábula para recuperar 【NP × 10】 PV." },
      { nome: "Hemofagia", custo: "ç5", descricao: "Uma vez por rodada, quando outra criatura faz você perder PV: gaste 10 PV para fazer um ataque livre contra ela. Se acertar, causa 【NP + RA】 de dano físico (sem dano da arma). Com sucesso crítico, pode recuperar PV iguais ao dano causado." }
    ],
    cor: "#8a1a1a",
    emoji: "🩸"
  },
  {
    id: "malandro",
    nome: "Malandro",
    outrosNomes: ["Pícaro", "Espertalhão", "Raposa"],
    citacao: "Quem tem jogo de cintura nunca fica encurralado.",
    descricao: "Nas vielas, becos e biroscas onde a lei não chega, gingam os malandros. Com chapéu de lado e um sorriso pronto, são mestres da lábia, da artimanha e gambiarra. Fazem dos seus truques um ganha-pão, enganando seu destino como se fosse apenas mais um dos seus alvos.",
    beneficiosIniciais: ["Aumente permanentemente seus PI máximos em 2.", "Você pode equipar armas à distância marciais."],
    perguntas: [
      "Qual a maior mentira que você já contou e todo mundo acredita?",
      "Uma pessoa sempre cai nas suas lorotas. Quem e por quê?",
      "O que você responde quando alguém pergunta no que você trabalha?",
      "Para quantas pessoas você deve algo?"
    ],
    poderes: [
      { nome: "Engabelar", custo: "ç3", descricao: "Uma vez por cena, quando uma criatura na cena faz um teste, gaste 10 PM para fazer o mesmo teste com bônus ou penalidade de 【NP】. Então você pode trocar seu resultado com o do alvo. Até o fim da cena, pode usar o resultado trocado num dos seus testes." },
      { nome: "Explorar Fraqueza", custo: "—", descricao: "Gaste 10 PM para fazer a ação Estudo sem usar uma ação. Se fizer isso, deve usar 【AST + DES】 como fórmula do teste aberto." },
      { nome: "Gambiarra", custo: "ç4", descricao: "Uma vez por cena, faça a ação Inventário e gaste até 【NP × 2】 PI para modificar uma arma equipada. Para cada 2 PI: +1 em Precisão; ou +2 de dano; ou +1 em testes de Objetivo; ou troca o alcance. As modificações duram até o fim da cena." },
      { nome: "Golpe Aproveitador", custo: "ç3", descricao: "Quando faz um ataque contra uma única criatura sofrendo uma ou mais condições, pode trocar um atributo do teste de Precisão por DES e recebe bônus de 【NP】 no teste." },
      { nome: "Jeitinho", custo: "ç2", descricao: "Quando um aliado passar em um teste para preencher/apagar seções de um relógio, gaste até 【NP × 20】 PM: você não pode fazer testes para influenciar o relógio nesta rodada, mas preenche/apaga uma seção para cada 20 PM gastos." }
    ],
    cor: "#5a4a1a",
    emoji: "🎩"
  },
  {
    id: "mercador",
    nome: "Mercador",
    outrosNomes: ["Antiquário", "Colecionador", "Farmacêutico"],
    citacao: "Antes de mais nada, pense: como isso vai ajudar a quem precisa?",
    descricao: "Mesmo em mundos transbordando magia, o dinheiro ainda tem muita influência. Comércio é um aspecto essencial ao desenvolvimento de nações e reinos. Quem resiste à tentação da ganância como eles e conta com o comércio para incentivar as trocas de ideias e o diálogo entre pessoas de fato está lutando em sua própria revolução.",
    beneficiosIniciais: ["Aumente permanentemente seus PI máximos em 2."],
    perguntas: [
      "O que te apresentou arte do comércio? São negócios de família?",
      "O mundo seria melhor sem dinheiro? Se sim, por que você ainda é um mercador?",
      "O que você mais ama no comércio? E o que você detesta nele?",
      "Você tem algum rival de negócios? Qual é sua relação com seu rival?"
    ],
    poderes: [
      { nome: "Data de Validade", custo: "ç3", descricao: "Quando uma poção ou iguaria que você criou não causar dano, mas fizer criaturas recuperarem PV: pode fazê-la causar dano de veneno igual a 【metade do nível + (NP × 10)】 a essas criaturas (dividido à metade para 2+ criaturas)." },
      { nome: "Estoque Pessoal", custo: "ç3", descricao: "Quando você ou outro PJ for gastar 【NP + 2】 ou menos Pontos de Inventário, você pode gastar 1 Ponto de Comércio para o alvo ignorar esse custo." },
      { nome: "Já Ouvi Falar", custo: "ç3", descricao: "Quando você ou um aliado fizer um teste para examinar uma criatura, item ou local, gaste 1 Ponto de Comércio para conferir bônus de 【NP + 2】 ao resultado do teste." },
      { nome: "Ventos do Comércio", custo: "ç3", descricao: "Após descansar numa área de comércio, receba 【NP + 1】 Pontos de Comércio (máximo 【NP + 3】). Em cenas sem conflito, gaste 2 Pontos de Comércio para criar um item raro (valor ≤ nível × 30z) ou criar um NPC com serviços." },
      { nome: "Verdadeiro Tesouro", custo: "ç3", descricao: "Uma vez por sessão, ao ajudar um NPC ou comunidade a superar ganância ou melhorar a qualidade de vida, se tiver Ventos do Comércio, receba 【NP + 1】 Pontos de Comércio." }
    ],
    cor: "#6b5a1a",
    emoji: "💰"
  },
  {
    id: "mestre-de-armas",
    nome: "Mestre de Armas",
    outrosNomes: ["Guerreiro", "Lutador", "Ronin"],
    citacao: "As lâminas mais afiadas nunca são desembainhadas.",
    descricao: "Os Mestres de Armas devotam anos e anos ao aperfeiçoamento das suas artes de combate a curto alcance. A maioria tem uma habilidade notável com diversas armas; outros treinaram para se tornarem um com um armamento específico. Alguns seguem e protegem alguém por amor ou por lealdade.",
    beneficiosIniciais: ["Aumente permanentemente seus PV máximos em 5.", "Você pode equipar armas corpo a corpo e escudos marciais."],
    perguntas: [
      "Qual é sua relação com as armas? São meros objetos ou algo maior?",
      "Você procura batalhas ou tenta evitá-las?",
      "Você está ou já esteve a serviço de uma dama ou lorde? Como era essa pessoa?",
      "Qual a aparência de suas armas e como é seu estilo de luta?"
    ],
    poderes: [
      { nome: "Chuva de Lâminas", custo: "—", descricao: "Quando faz um ataque corpo a corpo, gaste 10 PM: o ataque ganha multi (2), ou você aumenta em +1 a propriedade multi (máximo multi 3)." },
      { nome: "Contra-ataque", custo: "—", descricao: "Quando um inimigo atinge ou erra um ataque corpo a corpo contra você, se o resultado do teste de Precisão for número par: faça um ataque livre corpo a corpo contra esse inimigo (RA = 0 para o dano)." },
      { nome: "Quebra-ossos", custo: "ç4", descricao: "Quando atinge alvos com ataque corpo a corpo, pode escolher não causar dano: cada alvo atingido fica atordoado; ou fica fraco; ou perde 【NP × 10】 PM." },
      { nome: "Maestria com Armas Corpo a Corpo", custo: "ç4", descricao: "Você ganha bônus igual a 【NP】 em testes de Precisão corpo a corpo." },
      { nome: "Trespassar", custo: "ç3", descricao: "Use uma ação e gaste 5 PM: faça um ataque livre corpo a corpo contra um único alvo. Se acertar, sem causar dano, escolha: destrua um escudo; ou destrua a armadura do alvo; ou o alvo sofre 【NP × 2】 de dano adicional toda vez que sofrer dano antes do início do próximo turno." }
    ],
    cor: "#4a3a1a",
    emoji: "🗡️"
  },
  {
    id: "mutante",
    nome: "Mutante",
    outrosNomes: ["Abominação", "Experimento", "Licantropo"],
    citacao: "Olhe para mim, covarde! Contemple o que seu silêncio permitiu que criassem!",
    descricao: "Mutantes são testemunhas vivas de arrogância impiedosa: pessoas cujo corpo e alma carregam os sinais da poluição tecnológica ou mágica. Cada mutante é um ser único capaz de metamorfosear o próprio corpo de formas estranhas e sem precedentes, mas seus poderes têm um custo alto.",
    beneficiosIniciais: ["Aumente permanentemente seus PV máximos em 5."],
    perguntas: [
      "Suas mutações advém de experiências científicas ou através de magia?",
      "Quem é o responsável por suas mutações? O que você sente por essa pessoa?",
      "Quem foi a primeira pessoa a ser gentil com você? O que isso custou a ela?",
      "Como suas mutações se manifestam? O que lhes dá uma estranha beleza?"
    ],
    poderes: [
      { nome: "Acromorfose", custo: "ç3", descricao: "Seus testes de Precisão para ataques desarmados recebem bônus de 【NP】 e causam 【6 + (NP × 2)】 de dano adicional. No início do turno em conflito, pode escolher uma categoria de arma — seus ataques desarmados pertencem a essa categoria até o início do próximo turno." },
      { nome: "Biofagia", custo: "ç4", descricao: "Se estiver em crise, recupere 【NP × 5】 PV depois que um de seus ataques ou feitiços ofensivos fizer um ou mais inimigos perderem PV." },
      { nome: "Ecdise", custo: "—", descricao: "Após perder PV por dano não-físico, gaste 10 PV: receba Resistência ao tipo do dano sofrido até usar este poder novamente." },
      { nome: "Genoclepse", custo: "ç2", descricao: "Quando causar dano a um ou mais NPCs, você pode descobrir sua espécie. O mestre deve escolher 【NP】 terioformas que reflitam esses NPCs. Se tiver Teriomorfose, pode pagar o custo em PV imediatamente para usá-las." },
      { nome: "Teriomorfose", custo: "ç6", descricao: "Sempre que adquirir, aprenda uma terioforma. Use uma ação e gaste um terço dos seus PV atuais para manifestar os efeitos de até duas terioformas que aprendeu. Os efeitos duram até o fim da cena." }
    ],
    cor: "#3a5a1a",
    emoji: "🧬"
  },
  {
    id: "necromante",
    nome: "Necromante",
    outrosNomes: ["Monarca Tumular", "Reanimador", "Vampiro"],
    citacao: "Nunca desperdice, nunca precise.",
    descricao: "Necromantes ceifam a energia espiritual momentos antes da morte, quando ela está mais brilhante. Este precioso poder pode ser usado como energia para controlar o equilíbrio entre a vida e a morte, ou até mesmo para envolver um corpo e fazê-lo voltar a se mover.",
    beneficiosIniciais: ["Aumente permanentemente seus PV ou PM máximos em 5 (à sua escolha)."],
    perguntas: [
      "Quem ensinou necromancia a você? Está vivo, morto... ou não vivo?",
      "Seus poderes quebram o ciclo natural das almas. Como você lida com isso?",
      "Você é frio e lúgubre ou decadente e sarcástico?",
      "Quem você perdeu? Quem ressuscitaria se tivesse poder para tal?"
    ],
    poderes: [
      { nome: "Além do Reino da Morte", custo: "ç5", descricao: "Quando outra criatura em crise perde PV e não for morto-vivo, receba 1 Ponto de Túmulo (máximo NP + 1). Ao ser reduzido a 0 PV, perde todos os Pontos de Túmulo; se for a primeira vez na cena, em vez de se render, recupera PV igual a 【NP × Pontos de Túmulo perdidos】." },
      { nome: "Filhos da Sepultura", custo: "—", descricao: "Você pode se comunicar verbalmente com mortos-vivos. Uma vez por cena, pode fazer uma pergunta a um morto-vivo, que deve responder sinceramente." },
      { nome: "Medo é a Chave", custo: "ç3", descricao: "Após fazer um ou mais inimigos perderem PV, se tiver Além do Reino da Morte e ao menos um desses inimigos estiver abalado e/ou fraco, você recebe 1 Ponto de Túmulo e recupera 【NP × 2】 PV e PM." },
      { nome: "Por Quem os Sinos Dobram", custo: "ç3", descricao: "Ao causar dano com feitiço a uma única criatura, gaste 1 Ponto de Túmulo: se estiver sofrendo condições, o feitiço causa dano adicional de 【(NP × 2) + número de condições】; ou se não tiver condições, ela fica abalada." },
      { nome: "Rondó do Pesadelo", custo: "—", descricao: "Ao lançar feitiço ofensivo com alvo 'uma criatura', gaste 2 Pontos de Túmulo: o feitiço atinge todas as criaturas na cena que você veja (um único teste de Magia). Todo dano torna-se de trevas e não pode ser alterado." }
    ],
    cor: "#2a1a3a",
    emoji: "💀"
  },
  {
    id: "orador",
    nome: "Orador",
    outrosNomes: ["Artista", "Diplomata", "Embaixador"],
    citacao: "Palavras só servem de algo se as ações subsequentes também servirem.",
    descricao: "Alguns Oradores são graciosos e de sorriso cheio, outros são sutis e perspicazes, mas todos são igualmente habilidosos em ler emoções e reunir aliados em prol de suas causas. As palavras de um Orador podem reacender a coragem ou causar desespero aos oponentes.",
    beneficiosIniciais: ["Aumente permanentemente seus PM máximos em 5."],
    perguntas: [
      "Você acha que qualquer um pode ser persuadido? Todos têm um preço?",
      "Você foi traído por alguém que parecia estar do seu lado. Quem era?",
      "Como você se sente sobre manipular pessoas, ainda que por uma boa causa?",
      "No passado, suas palavras colocaram você em apuros. O que aconteceu?"
    ],
    poderes: [
      { nome: "Aliado Inesperado", custo: "—", descricao: "Gaste uma ação e 1 Ponto de Fábula: escolha uma criatura não hostil que possa ouvir e entender você. Ela torna-se solícita, desde que tratada com respeito e gentileza e você faça pedidos razoáveis." },
      { nome: "Condenar", custo: "ç4", descricao: "Use uma ação e gaste 5 PM: teste oposto 【AST + VON】 vs criatura que possa ouvir e entender suas acusações. Se vencer, o alvo perde 【NP × 10】 PM e fica abalado ou atordoado. Ganha bônus de 【NP】 neste teste." },
      { nome: "Confio em Você", custo: "ç2", descricao: "Quando outro PJ que pode ouvi-lo fizer um teste, gaste 1 Ponto de Fábula para convocar um Traço ou Laço dele, permitindo que role os dados novamente. Se você tem um Laço com o alvo, ele recupera 【NP × 10】 PM." },
      { nome: "Encorajar", custo: "ç6", descricao: "Durante um conflito, use uma ação e gaste 5 PM: uma criatura que possa ver e entender você recupera 【NP × 5】 PV. Ela escolhe um Atributo — o dado atual desse Atributo é um passo maior até o início do seu próximo turno." },
      { nome: "Persuasivo", custo: "ç2", descricao: "Quando passar em um teste para preencher/apagar seções de um relógio via charme, diplomacia, enganação ou intimidação, gaste até 【NP × 20】 PM: preenche/apaga uma seção adicional para cada 20 PM gastos." }
    ],
    cor: "#1a4a6b",
    emoji: "🗣️"
  },
  {
    id: "piloto",
    nome: "Piloto",
    outrosNomes: ["Motoqueiro", "Piloto de Mecha", "Pirata do Céu"],
    citacao: "Dentro deste aço batem os corações e esperanças de todos em Minerva IV. O Império já perdeu, só não sabe disso ainda.",
    descricao: "Corredores audaciosos, soldados treinados ou choferes elegantes, pilotos desenvolvem um elo especial com o seu veículo — de certa forma, ele se torna uma extensão de seus corpos. Os veículos dos pilotos são únicos e insubstituíveis: podem ser o mesmo mecha que a mãe pilotou em uma batalha, ou uma aeromoto turbinada que não deveria sequer conseguir voar.",
    beneficiosIniciais: ["Aumente permanentemente seus PV máximos em 5.", "Você pode equipar armas corpo a corpo e à distância marciais."],
    perguntas: [
      "Onde você aprendeu a pilotar? A pessoa que ensinou ainda está viva?",
      "Como conseguiu seu veículo? Você o construiu por conta própria? O herdou?",
      "Qual toque pessoal faz seu veículo se destacar dos outros?",
      "Quem ou o que você jamais deixaria entrar no seu veículo?"
    ],
    poderes: [
      { nome: "Compressão Tecnológica", custo: "—", descricao: "Quando não tiver ninguém a bordo do seu veículo pessoal, você pode fazê-lo desaparecer do mundo de jogo. Se em espaço grande o suficiente, use a ação Inventário e gaste 2 PI para fazê-lo aparecer perto de você." },
      { nome: "Configuração Flexível", custo: "ç4", descricao: "Ao usar a ação Equipamento ou Guarda enquanto pilota seu veículo pessoal, escolha até 【NP】 módulos ativos e desative-os. Escolha um número igual de módulos inativos e os ative." },
      { nome: "Coração no Motor", custo: "ç3", descricao: "No início do seu turno em conflito, se estiver pilotando seu veículo pessoal, gaste 10 PM: na próxima vez que causar dano, cause 【NP × 2】 adicional; ou reduza o próximo dano sofrido em 【NP × 2】; ou se recupere de lento ou fraco." },
      { nome: "Pulso Firme", custo: "—", descricao: "Ao fazer um teste de Precisão com um módulo de arma, pode substituir um de seus atributos por Vigor." },
      { nome: "Veículo Pessoal", custo: "ç5", descricao: "Ao adquirir este poder, você recebe um veículo pessoal com uma estrutura à sua escolha (Montaria, Exoesqueleto ou Mecha) e três módulos diferentes. Ao adquirir novamente, escolha dois módulos adicionais." }
    ],
    cor: "#1a3a6b",
    emoji: "🚀"
  },
  {
    id: "quimerista",
    nome: "Quimerista",
    outrosNomes: ["Druida", "Mago Selvagem", "Metamorfo"],
    citacao: "Poder sem harmonia só leva ao sofrimento.",
    descricao: "Os Quimeristas obtêm seu poder das almas dos monstros e feras que encontram. Ao manipular sua selvagem energia interior, esses magos podem imitar as habilidades mágicas dos monstros e alcançar compreensão sobrenatural sobre criaturas ferais.",
    beneficiosIniciais: ["Aumente permanentemente seus PM máximos em 5.", "Você pode fazer rituais da disciplina ritualismo."],
    perguntas: [
      "Quem lhe ensinou a arte do quimerismo? Seu mentor é humano ou monstruoso?",
      "Pessoas e monstros podem viver em harmonia ou seu destino é a ameaça mútua?",
      "Qual a aparência de sua magia?",
      "Há muitos praticando a sua arte ou você é uma exceção?"
    ],
    poderes: [
      { nome: "Consumir", custo: "ç5", descricao: "Quando causa dano a uma ou mais criaturas usando um feitiço, caso tenha uma adaga, arma arcana ou malho equipada, você recupera 【NP × 2】 PM." },
      { nome: "Imitação Mágica", custo: "ç10", descricao: "Quando vê um feitiço sendo lançado por uma criatura fera, monstro ou planta, pode aprendê-lo imediatamente. Você pode memorizar até 【NP + 2】 feitiços de Quimerista. Feitiços ofensivos usam 【AST + VON】 ou 【VIG + VON】 (escolha ao adquirir o poder)." },
      { nome: "Língua das Feras", custo: "—", descricao: "Você pode se comunicar com criaturas das espécies fera, monstro e planta." },
      { nome: "Patogênese", custo: "—", descricao: "Quando causa dano a uma ou mais criaturas com um de seus feitiços de Quimerista, alvos da mesma espécie da criatura com a qual você aprendeu o feitiço ficam envenenados." },
      { nome: "Quimerismo Ritualista", custo: "—", descricao: "Você pode fazer rituais da disciplina quimerismo. Rituais usam 【AST + VON】 ou 【VIG + VON】 (escolha ao adquirir o poder)." }
    ],
    cor: "#2a5a2a",
    emoji: "🐉"
  },
  {
    id: "simbolista",
    nome: "Simbolista",
    outrosNomes: ["Calígrafo", "Pintor", "Runomante"],
    citacao: "Para que serve um pincel se o seu coração é movido pela motivação errada?",
    descricao: "Símbolos e imagens portam imenso poder. Em vez de uma disciplina mágica, o simbolismo é mais como um estudo da forma de tecer energias sobrenaturais em sigilos e ícones: podem ser runas, pinturas, talismãs etc. A maior parte dos simbolistas desenvolve as suas habilidades com prática constante e intensiva.",
    beneficiosIniciais: ["Aumente permanentemente seus PI máximos em 2."],
    perguntas: [
      "Quem ou o quê lhe ensinou a tecer a magia em símbolos?",
      "Você se vê mais como um conjurador ou como um artista?",
      "Muitas pessoas praticam sua arte, ou você é uma exceção?",
      "Qual é a aparência de seus símbolos e como você os usa nas criaturas?"
    ],
    poderes: [
      { nome: "Conexão Simbólica", custo: "—", descricao: "Você sempre sabe a direção exata de qualquer criatura que esteja com um de seus símbolos, desde que ela esteja a até 2 dias de viagem de sua posição." },
      { nome: "Miragem", custo: "—", descricao: "Você pode fazer rituais da disciplina ritualismo; além disso, também pode usar ritualismo para criar ilusões visuais." },
      { nome: "Simbolismo", custo: "ç5", descricao: "Sempre que adquirir, aprenda dois símbolos. Você pode ter até 【NP + 1】 símbolos ativos. Faça a ação Inventário e gaste 2 PI: aplique um símbolo em si mesmo, em um aliado, ou faça um ataque livre (sem dano) para aplicar em inimigos atingidos." },
      { nome: "Símbolos Mágicos", custo: "ç3", descricao: "Se um aliado estiver com um de seus símbolos, ele pode fazer a ação Feitiço para destruir o símbolo e lançar um feitiço que você conhece (custo ≤ 【NP × 10】 PM, pago pelo aliado)." },
      { nome: "Toque Pessoal", custo: "ç5", descricao: "Quando uma criatura que você veja e que tenha um de seus símbolos sofrer dano ou recuperar PV/PM, você pode fazer a criatura sofrer 【NP】 de dano adicional ou recuperar 【NP】 PV e/ou PM." }
    ],
    cor: "#4a1a5a",
    emoji: "🎨"
  },
  {
    id: "virtuoso",
    nome: "Virtuoso",
    outrosNomes: ["Bardo", "Idol", "Trovador"],
    citacao: "O show mal começou e sua cortina já está abaixando!",
    descricao: "Seja dedilhando uma harpa delicada, encantando o público com sua potência vocal ou se jogando de um palco sobre uma multidão de fãs enlouquecidos, virtuosos podem ser descritos como orquestras mágicas de uma pessoa só! Eles contam com a força de suas almas e tecem a energia mágica em suas canções.",
    beneficiosIniciais: ["Aumente permanentemente seus PM máximos em 5."],
    perguntas: [
      "Quem te ensinou a combinar magia e música? É um talento natural?",
      "Você é uma celebridade ou um músico viajante?",
      "Quem é seu maior rival na música? Quem te inspira a ser quem é?",
      "Como são seus instrumentos e estilo de canto?"
    ],
    poderes: [
      { nome: "Barreira Sonora", custo: "ç5", descricao: "Após cantar um verso em volume médio ou forte, qualquer quantidade de dano físico que você sofrer até o início do seu próximo turno é reduzido em 【NP】 (antes de Afinidades)." },
      { nome: "Canto da Sereia", custo: "—", descricao: "Você pode fazer rituais da disciplina ritualismo; além disso, também pode usar ritualismo para criar ilusões sonoras." },
      { nome: "Harmonia", custo: "ç3", descricao: "Após afetar um ou mais inimigos com um verso, com arma arcana equipada: até o início do próximo turno, seus aliados causam 【NP】 de dano adicional a esses inimigos; ou você recupera 【NP】 PM cada vez que esses inimigos sofrerem dano." },
      { nome: "Magicanto", custo: "ç10", descricao: "Em seu turno em conflito, use uma ação e gaste PM variável para cantar um verso (combinação de volume, escala e tom). Ao adquirir este poder, você aprende todos os três volumes, uma escala e um tom. Ao adquirir novamente, aprenda mais uma escala ou tom." },
      { nome: "Vibrato", custo: "—", descricao: "Após cantar um verso em volume fraco ou médio, você pode fazer um ataque livre com uma arma equipada, considerando sua RA como 0 ao calcular o dano." }
    ],
    cor: "#6b1a4a",
    emoji: "🎵"
  }
];

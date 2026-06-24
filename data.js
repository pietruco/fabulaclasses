/* ── EXTRA DATA: Danças, Feitiços, Magissementes, Terioformas, Símbolos, Versos, Invocações, Infusões ── */

const DANCAS = [
  { nome: "Dança do Anjo", duracao: "Até o início do próximo turno", tipo: "buff", descricao: "Escolha um: você se torna Resistente a dano de luz; ou todos os danos causados por seus ataques e magias se tornam dano de luz." },
  { nome: "Dança da Banshee", duracao: "Instantânea", tipo: "debuff", descricao: "Escolha uma criatura que possa ver você. Se ela já estiver lenta, imediatamente fica abalada." },
  { nome: "Dança da Fênix", duracao: "Até o início do próximo turno", tipo: "buff", descricao: "Escolha um: você se torna Resistente a dano de fogo; ou todos os danos causados por seus ataques e magias se tornam dano de fogo." },
  { nome: "Dança do Golem", duracao: "Até o início do próximo turno", tipo: "buff", descricao: "Escolha um: você se torna Resistente a dano de raio; ou todos os danos causados por seus ataques e magias se tornam dano de raio." },
  { nome: "Dança do Grifo", duracao: "Até o início do próximo turno", tipo: "buff", descricao: "Escolha um: você se torna Resistente a dano de ar; ou todos os danos causados por seus ataques e magias se tornam dano de ar." },
  { nome: "Dança da Hidra", duracao: "Até o início do próximo turno", tipo: "cura", descricao: "Após sofrer dano, escolha um: você recupera 5 PV; ou você recupera 5 PM." },
  { nome: "Dança do Ieti", duracao: "Até o início do próximo turno", tipo: "buff", descricao: "Escolha um: você se torna Resistente a dano de gelo; ou todos os danos causados por seus ataques e magias se tornam dano de gelo." },
  { nome: "Dança do Kraken", duracao: "Instantânea", tipo: "debuff", descricao: "Escolha uma criatura que possa ver você. Se ela já estiver atordoada, imediatamente fica lenta." },
  { nome: "Dança do Leão", duracao: "Instantânea", tipo: "cura", descricao: "Você se recupera imediatamente de uma única condição a sua escolha." },
  { nome: "Dança da Mênade", duracao: "Instantânea", tipo: "debuff", descricao: "Escolha uma criatura que possa ver você. Essa criatura perde uma quantidade de PM igual ao seu dado atual de Destreza." },
  { nome: "Dança do Mirmidão", duracao: "Até o início do próximo turno", tipo: "buff", descricao: "Escolha um: você se torna Resistente a dano de terra; ou todos os danos causados por seus ataques e magias se tornam dano de terra." },
  { nome: "Dança do Morcego", duracao: "Até o início do próximo turno", tipo: "buff", descricao: "Escolha um: você se torna Resistente a dano de trevas; ou todos os danos causados por seus ataques e magias se tornam dano de trevas." },
  { nome: "Dança do Ouroboros", duracao: "Instantânea", tipo: "suporte", descricao: "Escolha um aliado que você possa ver e ainda não teve seu turno nesta rodada. O turno desse aliado acontece imediatamente após o seu nesta rodada." },
  { nome: "Dança do Pavão", duracao: "Instantânea", tipo: "debuff", descricao: "Escolha uma criatura que possa ver você. Da próxima vez nesta cena que ela fizer um ataque ou feitiço ofensivo, esse ataque ou feitiço deve ter você entre os alvos, se possível." },
  { nome: "Dança do Pesadelo", duracao: "Instantânea", tipo: "debuff", descricao: "Escolha uma criatura que possa ver você. Se ela já estiver abalada, imediatamente fica fraca." },
  { nome: "Dança do Sátiro", duracao: "Instantânea", tipo: "debuff", descricao: "Escolha uma criatura que possa ver você. Se ela já estiver fraca, imediatamente fica atordoada." },
  { nome: "Dança do Unicórnio", duracao: "Instantânea", tipo: "cura", descricao: "Escolha um aliado que possa vê-lo e que tenha um Laço com você: vocês dois recuperam PV igual ao seu dado atual de Destreza. No 20° nível, aumenta em 5 PV; no 40° nível, aumenta em 10 PV." }
];

const FEITICOS = {
  elementalista: [
    { nome: "Arma Elemental", pm: "10", alvo: "Uma arma", duracao: "Cena", ofensivo: false, descricao: "Você imbui a arma com energia elemental. Escolha um tipo de dano: ar, fogo, gelo, raio ou terra. Enquanto durar, todo dano causado pela arma torna-se do tipo escolhido. Se estiver com essa arma equipada ao lançar, pode fazer um ataque livre com ela como parte da mesma ação." },
    { nome: "Clarão", pm: "20", alvo: "Uma criatura", duracao: "Instantânea", ofensivo: true, descricao: "Você canaliza um único raio de fogo a temperatura tão alta que supera as defesas do adversário. O alvo sofre 【RA + 25】 de dano de fogo (ignora Resistências)." },
    { nome: "Fulgur", pm: "10 × A", alvo: "Até três criaturas", duracao: "Instantânea", ofensivo: true, descricao: "Você manipula eletricidade para criar uma onda de raios crepitantes. Cada alvo sofre 【RA + 15】 de dano de raio. Oportunidade: alvos também ficam atordoados." },
    { nome: "Glacies", pm: "10 × A", alvo: "Até três criaturas", duracao: "Instantânea", ofensivo: true, descricao: "Você cobre os adversários com uma densa camada de gelo. Cada alvo sofre 【RA + 15】 de dano de gelo. Oportunidade: alvos também ficam lentos." },
    { nome: "Golpe de Sobrevoo", pm: "10", alvo: "Pessoal", duracao: "Instantânea", ofensivo: false, descricao: "O vento carrega seus ataques pelo campo de batalha. Faça um ataque livre com uma arma corpo a corpo — pode atingir criaturas que só seriam acertadas à distância. Com lança ou luta, causa 5 pontos de dano adicionais. Um alvo voador atingido é forçado a pousar." },
    { nome: "Iceberg", pm: "20", alvo: "Uma criatura", duracao: "Instantânea", ofensivo: true, descricao: "Um pilar mágico de gelo cerca o adversário, baixando a temperatura a um nível crítico. O alvo sofre 【RA + 25】 de dano de gelo (ignora Resistências)." },
    { nome: "Ignis", pm: "10 × A", alvo: "Até três criaturas", duracao: "Instantânea", ofensivo: true, descricao: "Você conjura chamas e libera uma chuva de fogo contra os inimigos. Cada alvo sofre 【RA + 15】 de dano de fogo. Oportunidade: cada alvo atingido fica abalado." },
    { nome: "Mortalha Elemental", pm: "5 × A", alvo: "Até três criaturas", duracao: "Cena", ofensivo: false, descricao: "Você manipula energia mágica e protege os alvos contra a fúria dos elementos. Escolha um tipo de dano: ar, fogo, gelo, raio ou terra. Enquanto durar, cada alvo se torna Resistente ao tipo escolhido." },
    { nome: "Raio", pm: "20", alvo: "Uma criatura", duracao: "Instantânea", ofensivo: true, descricao: "Você lança um relâmpago contra o adversário. O alvo sofre 【RA + 25】 de dano de raio (ignora Resistências)." },
    { nome: "Terra", pm: "10 × A", alvo: "Até três criaturas", duracao: "Instantânea", ofensivo: true, descricao: "Pináculos de rocha pontiaguda irrompem do chão. Cada alvo sofre 【RA + 15】 de dano de terra. Criaturas no ar não podem ser alvo. Oportunidade: alvos fazem uma ação a menos no próximo turno." },
    { nome: "Ventus", pm: "10 × A", alvo: "Até três criaturas", duracao: "Instantânea", ofensivo: true, descricao: "Você invoca o poder dos ventos contra o inimigo. Cada alvo sofre 【RA + 15】 de dano de ar. Oportunidade: alvos voadores são imediatamente forçados a pousar." },
    { nome: "Vórtice", pm: "10", alvo: "Pessoal", duracao: "Cena", ofensivo: false, descricao: "Um vendaval furioso cerca você, soprando flechas e balas para longe. Enquanto durar, você ganha +2 em Defesa contra ataques à distância." }
  ],
  entropista: [
    { nome: "Aceleração", pm: "20", alvo: "Uma criatura", duracao: "Cena", ofensivo: false, descricao: "Você distorce o tecido do tempo. Enquanto durar, o alvo pode fazer uma única ação adicional em seus turnos. O feitiço termina após o alvo ter feito duas ações adicionais em uma mesma cena." },
    { nome: "Adivinhação", pm: "10", alvo: "Pessoal", duracao: "Cena", ofensivo: false, descricao: "Você tem um breve vislumbre do futuro. Enquanto durar, quando uma criatura que você veja faz um teste (sem ser crítico), pode forçá-la a rolar ambos os dados novamente. O feitiço termina após duas novas rolagens forçadas." },
    { nome: "Anomalia", pm: "20", alvo: "Uma criatura", duracao: "Cena", ofensivo: true, descricao: "Você altera a essência natural do alvo. Enquanto durar, se o alvo fosse sofrer dano de um tipo contra o qual é Absorvedor ou Imune, em vez disso é considerado Vulnerável. Quando isso acontecer, o feitiço termina." },
    { nome: "Apostar", pm: "até 20", alvo: "Especial", duracao: "Instantânea", ofensivo: false, descricao: "Role seu dado de Vontade para cada 10 PM gastos e escolha um resultado. 1: perde metade dos PV e PM. 2–3: todos ficam envenenados. 4–6: todos ficam lentos. 7–8: até três criaturas recuperam 50 PV e condições. 9+: número qualquer de criaturas sofre 30 de dano (tipo aleatório no d6)." },
    { nome: "Arma das Trevas", pm: "10", alvo: "Uma arma equipada", duracao: "Cena", ofensivo: false, descricao: "Você imbui a arma com energia das trevas. Enquanto durar, o dano torna-se de trevas. Se estiver com essa arma equipada ao lançar, pode fazer um ataque livre como parte da mesma ação." },
    { nome: "Dissipar", pm: "10", alvo: "Uma criatura", duracao: "Instantânea", ofensivo: false, descricao: "Você libera uma onda de energia negativa e remove toda magia de uma criatura. Se o alvo estiver sob efeito de um ou mais feitiços com duração 'Cena', esses efeitos terminam." },
    { nome: "Drenar Espírito", pm: "5", alvo: "Uma criatura", duracao: "Instantânea", ofensivo: true, descricao: "Você consome a psique de uma criatura. O alvo perde 【RA + 15】 PM. Você recupera PM igual à metade dos PM perdidos pelo alvo." },
    { nome: "Drenar Vigor", pm: "10", alvo: "Uma criatura", duracao: "Instantânea", ofensivo: true, descricao: "Você rouba a força vital de outra criatura. O alvo sofre 【RA + 15】 de dano de trevas. Você recupera PV igual à metade do dano causado." },
    { nome: "Espelhar", pm: "10", alvo: "Uma criatura", duracao: "Cena", ofensivo: false, descricao: "Você distorce as leis mágicas. Enquanto durar, se um feitiço ofensivo for lançado contra o alvo, a criatura que o lançou se torna o alvo em seu lugar. Quando isso acontecer, o feitiço termina." },
    { nome: "Parar", pm: "10", alvo: "Uma criatura", duracao: "Instantânea", ofensivo: true, descricao: "Você aprisiona o adversário em um círculo de tempo e espaço alterados. O alvo faz uma ação a menos no próximo turno dele (mínimo de 0 ação)." },
    { nome: "Umbra", pm: "10 × A", alvo: "Até três criaturas", duracao: "Instantânea", ofensivo: true, descricao: "Uma tempestade de energia das trevas transforma a matéria em cinzas. Cada alvo sofre 【RA + 15】 de dano de trevas. Oportunidade: alvos também ficam fracos." },
    { nome: "Ômega", pm: "20", alvo: "Uma criatura", duracao: "Instantânea", ofensivo: true, descricao: "Você invoca a ruína contra o adversário, transformando força em fraqueza. O alvo perde PV igual a 【20 + metade do nível do alvo】." }
  ],
  espiritualista: [
    { nome: "Alucinação", pm: "5 × A", alvo: "Até três criaturas", duracao: "Instantânea", ofensivo: true, descricao: "Você altera os sentidos dos inimigos. Escolha abalado ou atordoado: cada alvo atingido é afligido pela condição escolhida." },
    { nome: "Arma Espiritual", pm: "10", alvo: "Uma arma equipada", duracao: "Cena", ofensivo: false, descricao: "Você imbui a arma com a energia purificadora de seu espírito. Enquanto durar, todo dano torna-se de luz. Se estiver com a arma equipada ao lançar, pode fazer um ataque livre como parte da mesma ação." },
    { nome: "Aura", pm: "5 × A", alvo: "Até três criaturas", duracao: "Cena", ofensivo: false, descricao: "Você projeta a alma para fora do corpo e a instrui a cercar os alvos, protegendo-os de magias perigosas. Enquanto durar, a Defesa Mágica dos alvos se torna 12 (se for maior, pode usá-la)." },
    { nome: "Barreira", pm: "5 × A", alvo: "Até três criaturas", duracao: "Cena", ofensivo: false, descricao: "Você projeta a alma para fora do corpo e a transforma em uma barreira. Enquanto durar, a Defesa dos alvos se torna 12 (se for maior, pode usá-la)." },
    { nome: "Curar", pm: "10 × A", alvo: "Até três criaturas", duracao: "Instantânea", ofensivo: false, descricao: "Você revigora seus companheiros. Cada alvo recupera 40 PV. No 20° nível, aumenta para 50 PV; no 40° nível, aumenta para 60 PV." },
    { nome: "Despertar", pm: "20", alvo: "Uma criatura", duracao: "Cena", ofensivo: false, descricao: "Escolha um Atributo: Destreza, Vigor, Astúcia ou Vontade. Enquanto durar, o alvo considera o dado do Atributo escolhido como se fosse um passo maior (máximo de d12)." },
    { nome: "Enfurecer", pm: "10", alvo: "Uma criatura", duracao: "Instantânea", ofensivo: true, descricao: "Você faz uma criatura perder a compostura. O alvo fica enfurecido e não pode fazer Guarda ou Feitiço durante seu próximo turno." },
    { nome: "Lux", pm: "10 × A", alvo: "Até três criaturas", duracao: "Instantânea", ofensivo: true, descricao: "Você foca sua energia interior em uma barragem de raios solares cegantes. Cada alvo sofre 【RA + 15】 de dano de luz. Oportunidade: alvos também ficam atordoados." },
    { nome: "Piedade", pm: "20", alvo: "Uma criatura", duracao: "Cena", ofensivo: false, descricao: "Você fortalece a coragem de uma criatura contra sofrimento e desespero. Enquanto durar, se o alvo ficaria com 0 PV, em vez disso fica com exatamente 1 PV. Quando isso acontecer, o feitiço termina." },
    { nome: "Purificar", pm: "5 × A", alvo: "Até três criaturas", duracao: "Instantânea", ofensivo: false, descricao: "Você fortifica e purifica a energia da alma que flui por seus companheiros. Todos os alvos se recuperam de todas as condições." },
    { nome: "Reforçar", pm: "5 × A", alvo: "Até três criaturas", duracao: "Cena", ofensivo: false, descricao: "Você protege os alvos contra ataques que corromperiam seu corpo e espírito. Escolha uma condição: abalado, atordoado, enfurecido, envenenado, fraco ou lento. Enquanto durar, cada alvo se torna imune à condição escolhida." },
    { nome: "Torpor", pm: "5 × A", alvo: "Até três criaturas", duracao: "Instantânea", ofensivo: true, descricao: "Você sufoca a energia da alma que flui pelos corpos dos adversários. Escolha fraco ou lento: cada alvo atingido é afligido pela condição escolhida." }
  ]
};

const MAGISSEMENTES = [
  { nome: "Asfódelo-do-Cemitério", tipo: "debuff", descricao: "Solene e elegante, representa a inevitabilidade da morte.", efeitos: [
    { secoes: "1", desc: "No fim do seu turno, você pode escolher um inimigo que você possa ver. Se o fizer, esse inimigo fica abalado." },
    { secoes: "2", desc: "No fim do seu turno, todos os inimigos que você possa ver ficam abalados." },
    { secoes: "3", desc: "No fim do seu turno, você causa dano de trevas igual a (15 + NP em Cloromancia) a cada inimigo abalado que você possa ver." }
  ]},
  { nome: "Beladona-de-Folha-Curva", tipo: "dano", descricao: "Seus frutos arroxeados contêm um veneno mágico mortal.", efeitos: [
    { secoes: "0–1", desc: "Todo dano que você causa torna-se de veneno (ignora Imunidades e Resistências)." },
    { secoes: "2–3", desc: "O dano dos seus ataques torna-se de veneno (ignora Imunidades e Resistências). Além disso, ao causar dano de veneno pela primeira vez no turno, causa dano adicional igual ao NP em Cloromancia e cada criatura que perder PV fica envenenada." }
  ]},
  { nome: "Cravo-Furioso", tipo: "controle", descricao: "Apesar da beleza, suas flores amarelas emitem odores desagradáveis.", efeitos: [
    { secoes: "0–1", desc: "Quando esta magissemente deixar seu jardim, escolha um inimigo que você possa ver. Até o fim do seu próximo turno, quando o inimigo escolhido fizer um ataque ou feitiço ofensivo, ele deve incluir você entre os alvos (se possível)." },
    { secoes: "0–1 (alt)", desc: "Até o fim do seu turno, você pode remover esta magissemente do jardim. Se o fizer, apague todas as seções do relógio de germinação." }
  ]},
  { nome: "Crisântemo-Ardente", tipo: "dano", descricao: "Suas pétalas grossas lembram um vulcão em erupção.", efeitos: [
    { secoes: "1–3", desc: "No fim do seu turno, escolha entre terra ou fogo. Até você usar esse efeito novamente ou a magissemente sair do jardim, todo dano causado por você e cada aliado presente na cena torna-se do tipo escolhido (ignora Resistências)." }
  ]},
  { nome: "Dália-do-Deserto", tipo: "buff", descricao: "Uma planta resistente que não teme a aridez.", efeitos: [
    { secoes: "0–1", desc: "Você tem Resistência a dano de ar e de fogo." },
    { secoes: "2–3", desc: "Você e aliados presentes na cena têm Resistência a dano de ar e de fogo." }
  ]},
  { nome: "Dente-de-Leão-Saltitante", tipo: "dano", descricao: "Este símbolo de alegria espalha suas sementes em meio à tempestade.", efeitos: [
    { secoes: "1–3", desc: "No fim do seu turno, escolha entre ar ou raio. Até você usar esse efeito novamente ou a magissemente sair do jardim, todo dano causado por você e cada aliado presente na cena torna-se do tipo escolhido (ignora Resistências)." }
  ]},
  { nome: "Espinheiro-Chifrudo", tipo: "buff", descricao: "Disputado por bruxas e cirurgiões graças a suas propriedades purificantes.", efeitos: [
    { secoes: "0–1", desc: "Você tem Resistência a dano de trevas e de veneno." },
    { secoes: "2–3", desc: "Você e aliados presentes na cena têm Resistência a dano de trevas e de veneno." }
  ]},
  { nome: "Estrelícia-Prateada", tipo: "buff", descricao: "Seus botões prateados são facilmente confundidos com joias.", efeitos: [
    { secoes: "0–1", desc: "Você tem Resistência a dano de raio e de luz." },
    { secoes: "2–3", desc: "Você e aliados presentes na cena têm Resistência a dano de raio e de luz." }
  ]},
  { nome: "Gazânia Peregrina", tipo: "suporte", descricao: "Suas pétalas exuberantes são sinônimo de abundância.", efeitos: [
    { secoes: "1–2", desc: "No final do seu turno, escolha você ou outro personagem que puder ver. O personagem escolhido recupera 2 Pontos de Inventário." },
    { secoes: "3", desc: "No fim do seu turno, você e todos os outros personagens que você possa ver recuperam 1 Ponto de Inventário." }
  ]},
  { nome: "Ginkgo-Dourado", tipo: "cura", descricao: "Suas folhas e cores vibrantes representam a resistência.", efeitos: [
    { secoes: "1", desc: "No fim do seu turno, você e todos os aliados que você possa ver se recuperam das condições abalados, atordoados e/ou enfurecidos." },
    { secoes: "2–3", desc: "No fim do seu turno, você e todos aliados que você possa ver recuperam PM igual a (5 + NP em Cloromancia)." }
  ]},
  { nome: "Íris-Eremita", tipo: "suporte", descricao: "Suas folhas trazem sussurros de conhecimentos antigos.", efeitos: [
    { secoes: "1", desc: "No fim do seu turno, escolha um inimigo que você possa ver. O mestre deve revelar seu nível, patente, espécie, PV máximos, PM máximos, Traços, Atributos, Defesa e Defesa Mágica." },
    { secoes: "2–3", desc: "Mesmo que acima, mas também revela as Afinidades." }
  ]},
  { nome: "Lírio-Medicinal", tipo: "cura", descricao: "Suas folhas elegantes filtram e purificam a energia espiritual.", efeitos: [
    { secoes: "0–1", desc: "No fim do seu turno, você e todos os aliados que você possa ver se recuperam das condições envenenado, fraco e lento." },
    { secoes: "2–3", desc: "No fim do seu turno, você e todos aliados que você possa ver recuperam PV igual a (15 + NP em Cloromancia)." }
  ]},
  { nome: "Lótus-Oceânica", tipo: "buff", descricao: "Um símbolo gracioso de serenidade e sabedoria.", efeitos: [
    { secoes: "0–1", desc: "Você é imune às condições atordoado e lento." },
    { secoes: "2", desc: "Você considera seus dados de Destreza e Astúcia como um passo maior (máximo de d12)." },
    { secoes: "3", desc: "Você e todos os aliados que você possa ver consideram seus dados de Destreza e Astúcia como um passo maior (máximo de d12)." }
  ]},
  { nome: "Magnólia-Lunar", tipo: "dano", descricao: "Ela floresce nas horas mais escuras da noite.", efeitos: [
    { secoes: "1–3", desc: "No fim do seu turno, escolha entre gelo ou luz. Até usar esse efeito novamente ou a magissemente sair do jardim, todo dano causado por você e seus aliados na cena torna-se do tipo escolhido (ignora Resistências)." }
  ]},
  { nome: "Muralha-de-Espinhos", tipo: "defesa", descricao: "Um emaranhado espinhento de galhos robustos que secretam veneno.", efeitos: [
    { secoes: "0–1", desc: "Você tem Resistência a dano físico." },
    { secoes: "2", desc: "Você tem Resistência a dano físico. Além disso, após ser atingido por um ataque corpo a corpo, você causa dano físico igual a (5 + NP em Cloromancia) à criatura atacante." },
    { secoes: "3", desc: "Você tem Resistência a dano físico. Após ser atingido por um ataque corpo a corpo, você causa dano físico igual a (5 + NP em Cloromancia) duas vezes à criatura atacante." }
  ]},
  { nome: "Narciso-do-Ártico", tipo: "buff", descricao: "Sobrevive, firme e forte, em territórios congelados.", efeitos: [
    { secoes: "0–1", desc: "Você tem Resistência a dano de terra e de gelo." },
    { secoes: "2–3", desc: "Você e aliados presentes na cena têm Resistência a dano de terra e de gelo." }
  ]},
  { nome: "Orquídea-Listrada", tipo: "debuff", descricao: "Todas as partes dessa planta estão cobertas de toxinas.", efeitos: [
    { secoes: "1", desc: "No fim do seu turno, você pode escolher um inimigo que você possa ver. Se o fizer, esse inimigo fica fraco." },
    { secoes: "2", desc: "No fim do seu turno, todos os inimigos que você possa ver ficam fracos." },
    { secoes: "3", desc: "No fim do seu turno, você causa dano de veneno igual a (15 + NP em Cloromancia) a cada inimigo fraco que você possa ver." }
  ]},
  { nome: "Peônia-Estrelada", tipo: "debuff", descricao: "Ela fita silenciosamente as profundezas celestiais.", efeitos: [
    { secoes: "1", desc: "No fim do seu turno, você pode escolher um inimigo que você possa ver. Se o fizer, esse inimigo fica atordoado." },
    { secoes: "2", desc: "No fim do seu turno, todos os inimigos que você possa ver ficam atordoados." },
    { secoes: "3", desc: "No fim do seu turno, você causa dano de luz igual a (15 + NP em Cloromancia) a cada inimigo atordoado que você possa ver." }
  ]},
  { nome: "Protea-Real", tipo: "buff", descricao: "Uma flor colorida e resistente, símbolo de uma dinastia antiga.", efeitos: [
    { secoes: "0–1", desc: "Você é imune às condições abalado e fraco." },
    { secoes: "2", desc: "Você considera seus dados de Vigor e Vontade como um passo maior (máximo de d12)." },
    { secoes: "3", desc: "Você e todos os aliados que você possa ver consideram seus dados de Vigor e Vontade como um passo maior (máximo de d12)." }
  ]},
  { nome: "Rosa-Serrilhada", tipo: "debuff", descricao: "Seus espinhos formam um emaranhado tão encantador quanto perigoso.", efeitos: [
    { secoes: "1", desc: "No fim do seu turno, você pode escolher um inimigo que você possa ver. Se o fizer, esse inimigo fica lento." },
    { secoes: "2", desc: "No fim do seu turno, todos os inimigos que você possa ver ficam lentos." },
    { secoes: "3", desc: "No fim do seu turno, você causa dano de luz igual a (15 + NP em Cloromancia) a cada inimigo lento que você possa ver." }
  ]}
];

const TERIOFORMAS = [
  { nome: "Anfíbia", sugestoes: "Anfíbios, criaturas com regeneração, monstros aquáticos", descricao: "Você pode respirar sob a água e seus olhos veem com perfeição em luz fraca. Quando você recupera PV, recupera 5 PV adicionais e pode se recuperar imediatamente de uma única condição à sua escolha." },
  { nome: "Arpátida", sugestoes: "Lobos, aves de rapina, criaturas com sentidos de caça aguçados", descricao: "Considere sua Astúcia como um tipo de dado maior (até d12). Ao causar dano a criaturas pela primeira vez no seu turno, se ao menos uma delas estiver em crise, você causa 5 pontos de dano adicional a cada uma dessas criaturas." },
  { nome: "Dinamotéria", sugestoes: "Ursos, dinossauros, criaturas de tamanho e força descomunais", descricao: "Seu dado atual de Vigor é considerado um passo maior (máximo d12). Ao ter sucesso em um teste para avançar ou retroceder um relógio que inclua Vigor, você pode preencher ou apagar 1 seção adicional desse relógio." },
  { nome: "Eletrófora", sugestoes: "Criaturas elétricas, elementais do raio, robôs", descricao: "Ao causar dano com um ataque ou feitiço, todo dano torna-se de raio. Enquanto seus ataques desarmados causarem dano de raio, inimigos que perderem 20 PV ou mais também ficam lentos." },
  { nome: "Neurofagoida", sugestoes: "Parasitas, mortos-vivos, criaturas que se alimentam de almas", descricao: "Quando usa Biofagia, você também recupera PM igual a (4 + NP em Teriomorfose)." },
  { nome: "Pirófora", sugestoes: "Besouros-bombardeiros, camarões-de-estalo, elementais de fogo", descricao: "Ao causar dano com um ataque ou feitiço, todo dano torna-se de fogo. Enquanto seus ataques desarmados causarem dano de fogo, inimigos que perderem 20 PV ou mais também ficam atordoados." },
  { nome: "Placófora", sugestoes: "Crustáceos, tartarugas, criaturas blindadas e veículos", descricao: "Sua Defesa é considerada igual a (13 + metade do seu NP em Teriomorfose). Se seu valor atual for melhor, você ainda pode usá-lo." },
  { nome: "Pneumófora", sugestoes: "Moluscos com propulsão a jato, grandes feras aladas, foguetes", descricao: "Ao causar dano com um ataque ou feitiço, todo dano torna-se de ar. Enquanto seus ataques desarmados causarem dano de ar, inimigos que perderem 20 PV ou mais também ficam fracos." },
  { nome: "Polípoda", sugestoes: "Lulas, polvos, criaturas com tentáculos ou vinhas", descricao: "Seus ataques desarmados recebem a propriedade multi (3)." },
  { nome: "Pterotéria", sugestoes: "Morcegos, pássaros, insetos alados, criaturas voadoras", descricao: "Você pode voar. Seus ataques corpo a corpo podem atingir criaturas voadoras e você não pode ser atingido por ataques corpo a corpo a menos que o atacante seja voador. Esses benefícios não se aplicam se você for incapaz de voar livremente." },
  { nome: "Taquitéria", sugestoes: "Gatos, gazelas, lebres, criaturas ágeis e rápidas", descricao: "Seu dado atual de Destreza é considerado um passo maior (máximo d12). Ao ter sucesso em um teste para avançar ou retroceder um relógio que inclua Destreza, você pode preencher ou apagar 1 seção adicional." },
  { nome: "Toxicófora", sugestoes: "Aranhas, cobras, gosmas tóxicas e outras criaturas venenosas", descricao: "Ao causar dano com um ataque ou feitiço, todo dano torna-se de veneno. Enquanto seus ataques desarmados causarem dano de veneno, inimigos que perderem 20 PV ou mais também ficam envenenados." }
];

const SIMBOLOS = [
  { nome: "Símbolo das Amarras", tipo: "controle", descricao: "O dado atual dos Atributos da criatura com este símbolo nunca pode ser maior que os respectivos dados básicos (isso não encerra qualquer efeito ou feitiço, mas impede sua influência sobre os Atributos)." },
  { nome: "Símbolo do Crescimento", tipo: "buff", descricao: "Magias com 'até três criaturas' como alvo lançadas pela criatura com este símbolo passam a ter 'até quatro criaturas' como alvo. A criatura ainda deve gastar o PM necessário para atingir um quarto alvo." },
  { nome: "Símbolo da Criação", tipo: "suporte", descricao: "Quando a criatura com este símbolo precisar gastar Pontos de Inventário em um conflito, ela pode destruir este símbolo para não precisar gastar PI." },
  { nome: "Símbolo do Desespero", tipo: "debuff", descricao: "Quando a criatura com este símbolo recuperar PV e/ou PM durante conflitos, ela recupera apenas a metade da quantidade normal de PV e/ou PM." },
  { nome: "Símbolo do Destino", tipo: "controle", descricao: "Depois que a criatura com este símbolo fizer um teste, se você puder vê-la, pode gastar 1 Ponto de Fábula para forçá-la a rolar novamente ambos os dados. Só pode ser feito uma vez por teste e não se aplica a críticos." },
  { nome: "Símbolo dos Elementos", tipo: "dano", descricao: "Ao criar, escolha um tipo de dano. Se puder ver a criatura com este símbolo ao causar dano, gaste PM igual a 1/3 do total de dano causado. Se fizer isso, todo dano se transforma no tipo escolhido ao criar o símbolo." },
  { nome: "Símbolo da Feitiçaria", tipo: "suporte", descricao: "O custo total em PM de magias que têm a criatura com este símbolo como alvo é reduzido em 5 PM (mínimo de 5 PM). Se o feitiço tiver mais de uma criatura com esse símbolo como alvo, o efeito é cumulativo." },
  { nome: "Símbolo do Fluxo", tipo: "controle", descricao: "Ao criar, escolha uma condição: abalado, atordoado, lento ou fraco. Então, escolha: a criatura torna-se Imune à condição escolhida; ou a criatura perde sua Imunidade à condição escolhida e não pode recuperá-la." },
  { nome: "Símbolo da Fraqueza", tipo: "debuff", descricao: "Ao criar, escolha um tipo de dano. A criatura com este símbolo sofre 5 pontos de dano adicional de fontes causando dano do tipo escolhido." },
  { nome: "Símbolo da Inimizade", tipo: "controle", descricao: "Enquanto a criatura com este símbolo estiver em crise, qualquer inimigo da criatura que possa vê-la deve incluí-la entre os alvos de seus ataques e magias ofensivas, se possível." },
  { nome: "Símbolo da Metamorfose", tipo: "controle", descricao: "Ao criar, escolha uma espécie: fera, construto, demônio, elemental, monstro, planta ou morto-vivo. A criatura com este símbolo é considerada como pertencente à espécie escolhida para efeitos e poderes. Não pode ser aplicado a PJs." },
  { nome: "Símbolo da Proibição", tipo: "debuff", descricao: "Ao criar, escolha uma ação: Ataque, Guarda, Feitiço, Objetivo ou Poder. Quando a criatura com este símbolo fizer a ação escolhida, ela perde 5 PV e 5 PM (antes de fazer a ação). No 20°+ nível, ambos aumentam em 10; no 40°+, em 20." },
  { nome: "Símbolo da Prosperidade", tipo: "suporte", descricao: "Quando a criatura com este símbolo gastar 1 Ponto de Fábula para invocar um Traço ou Laço, ela também recebe 100 zênites." },
  { nome: "Símbolo da Proteção", tipo: "buff", descricao: "Ao criar, escolha um tipo de dano. A criatura com este símbolo se torna Resistente ao tipo de dano escolhido." },
  { nome: "Símbolo da Rebelião", tipo: "buff", descricao: "Se um vilão estiver na cena, quaisquer testes opostos feitos pela criatura com este símbolo têm sucesso crítico quando ambos os dados exibirem o mesmo número (desde que não seja falha crítica)." },
  { nome: "Símbolo do Renascimento", tipo: "suporte", descricao: "Se a criatura com este símbolo estiver prestes a chegar a 0 PV, ela pode destruir este símbolo: seus PV são reduzidos exatamente para 1 em vez disso." },
  { nome: "Símbolo do Sacrifício", tipo: "suporte", descricao: "Quando uma criatura com este símbolo sofrer dano, se puder vê-la, você pode destruir este símbolo: em vez da criatura, você sofre a mesma quantidade de dano que ela receberia." },
  { nome: "Símbolo da Verdade", tipo: "buff", descricao: "Testes para examinar ou localizar a criatura com este símbolo, bem como testes de Precisão e Magia para ataques e feitiços ofensivos que a tiverem entre os alvos, recebem bônus de +2. O efeito é cumulativo para múltiplas criaturas com o símbolo." },
  { nome: "Símbolo da Vingança", tipo: "cura", descricao: "Quando uma criatura em crise atingir a criatura com este símbolo com um ataque ou feitiço ofensivo, a criatura em crise recupera 5 PV e 5 PM." }
];

const VERSOS = {
  volumes: [
    { nome: "Fraco", pm: "10", alvos: "Você ou uma criatura que você possa ver e que possa ouvi-lo." },
    { nome: "Médio", pm: "20", alvos: "Todos os aliados capazes de ouvi-lo." },
    { nome: "Forte", pm: "30", alvos: "Todos os inimigos capazes de ouvi-lo." }
  ],
  escalas: [
    { nome: "Chama", tipo: "fogo", condicao: "abalado", atributo: "Vigor", recuperacao: "PV" },
    { nome: "Geada", tipo: "gelo", condicao: "fraco", atributo: "Vontade", recuperacao: "PM" },
    { nome: "Ferro", tipo: "físico", condicao: "lento", atributo: "Vontade", recuperacao: "PM" },
    { nome: "Resplendor", tipo: "luz", condicao: "atordoado", atributo: "Astúcia", recuperacao: "PV" },
    { nome: "Sombra", tipo: "trevas", condicao: "fraco", atributo: "Destreza", recuperacao: "PM" },
    { nome: "Pedra", tipo: "terra", condicao: "atordoado", atributo: "Vigor", recuperacao: "PV" },
    { nome: "Trovão", tipo: "raio", condicao: "abalado", atributo: "Destreza", recuperacao: "PV" },
    { nome: "Vento", tipo: "ar", condicao: "lento", atributo: "Astúcia", recuperacao: "PM" }
  ],
  tons: [
    { nome: "Agitado", descricao: "Cada alvo sofre dano de (tipo da escala) equivalente ao dobro de seu dado atual de Vontade. No 20°+ nível, +10 de dano; no 40°+ nível, +20." },
    { nome: "Ameaçador", descricao: "Na primeira vez que o alvo sofrer dano antes do início do seu próximo turno, esse dano se torna (tipo da escala). Esse efeito pode se ativar separadamente, uma vez para cada alvo do verso." },
    { nome: "Animado", descricao: "Até o início do seu próximo turno, quando um alvo passar em um teste com (atributo da escala) que o permita avançar ou recuar um Relógio, o alvo pode preencher ou apagar uma seção adicional." },
    { nome: "Calmo", descricao: "Cada alvo recupera (recuperação da escala) igual a (10 + o dobro de seu dado de Vontade). No 20°+ nível, +10; no 40°+ nível, +20. Se recuperar PM, não afeta quem cantou." },
    { nome: "Mórbido", descricao: "Cada alvo sofre (condição da escala) e também perde sua Resistência a dano de (tipo da escala), se a tiver, até o início de seu próximo turno." },
    { nome: "Solene", descricao: "Cada alvo se recupera de (condição da escala) e também torna-se Resistente a dano de (tipo da escala) até o início de seu próximo turno." },
    { nome: "Vibrante", descricao: "Cada alvo trata seu (atributo da escala) como sendo um tipo maior (até d12) até o início do seu próximo turno." }
  ]
};

const INVOCACOES = [
  { manancial: "Ar", tipo: "dano", nome: "Aero Explosão", descricao: "Você causa 20 pontos de dano de ar ao alvo." },
  { manancial: "Ar", tipo: "debuff", nome: "Aero Praga", descricao: "Até o início do seu próximo turno, o alvo sofre 5 pontos de dano adicional de todas as fontes que causam dano de raio e fogo." },
  { manancial: "Ar", tipo: "cura", nome: "Brisa", descricao: "O alvo recupera 30 Pontos de Vida." },
  { manancial: "Ar", tipo: "debuff", nome: "Tornado", descricao: "Você causa 10 pontos de dano de ar e o alvo fica atordoado." },
  { manancial: "Terra", tipo: "dano", nome: "Geo Explosão", descricao: "Você causa 20 pontos de dano de terra ao alvo." },
  { manancial: "Terra", tipo: "debuff", nome: "Geo Praga", descricao: "Até o início do seu próximo turno, o alvo sofre 5 pontos de dano adicional de todas as fontes que causam dano de ar e gelo." },
  { manancial: "Terra", tipo: "cura", nome: "Germinar", descricao: "O alvo recupera 30 Pontos de Vida." },
  { manancial: "Terra", tipo: "debuff", nome: "Areia Movediça", descricao: "Você causa 10 pontos de dano de terra e o alvo fica lento." },
  { manancial: "Fogo", tipo: "dano", nome: "Pyro Explosão", descricao: "Você causa 20 pontos de dano de fogo ao alvo." },
  { manancial: "Fogo", tipo: "debuff", nome: "Pyro Praga", descricao: "Até o início do seu próximo turno, o alvo sofre 5 pontos de dano adicional de todas as fontes que causam dano de terra e gelo." },
  { manancial: "Fogo", tipo: "debuff", nome: "Centelha", descricao: "Você causa 10 pontos de dano de fogo e o alvo fica abalado." },
  { manancial: "Fogo", tipo: "debuff", nome: "Fumaça", descricao: "O alvo perde 20 Pontos de Mana e fica fraco." },
  { manancial: "Raio", tipo: "dano", nome: "Electro Explosão", descricao: "Você causa 20 pontos de dano de raio ao alvo." },
  { manancial: "Raio", tipo: "debuff", nome: "Electro Praga", descricao: "Até o início do seu próximo turno, o alvo sofre 5 pontos de dano adicional de todas as fontes que causam dano de terra e fogo." },
  { manancial: "Raio", tipo: "debuff", nome: "Estática", descricao: "Você causa 10 pontos de dano de raio e o alvo fica lento." },
  { manancial: "Raio", tipo: "debuff", nome: "Trovão", descricao: "O alvo perde 20 Pontos de Mana e fica atordoado." },
  { manancial: "Água", tipo: "dano", nome: "Hidro Explosão", descricao: "Você causa 20 pontos de dano de gelo ao alvo." },
  { manancial: "Água", tipo: "debuff", nome: "Hidro Praga", descricao: "Até o início do seu próximo turno, o alvo sofre 5 pontos de dano adicional de todas as fontes que causam dano de ar e raio." },
  { manancial: "Água", tipo: "debuff", nome: "Calafrio", descricao: "O alvo perde 20 Pontos de Mana e fica atordoado." },
  { manancial: "Água", tipo: "debuff", nome: "Congelamento", descricao: "Você causa 10 pontos de dano de gelo e o alvo fica fraco." }
];

const INFUSOES = [
  { nivel: "Básica", nome: "Crio", descricao: "O ataque causa 5 de dano adicional e o dano torna-se de gelo." },
  { nivel: "Básica", nome: "Piro", descricao: "O ataque causa 5 de dano adicional e o dano torna-se de fogo." },
  { nivel: "Básica", nome: "Volt", descricao: "O ataque causa 5 de dano adicional e o dano torna-se de raio." },
  { nivel: "Avançada", nome: "Ciclone", descricao: "O ataque causa 5 de dano adicional e o dano torna-se de ar." },
  { nivel: "Avançada", nome: "Exorcismo", descricao: "O ataque causa 5 de dano adicional e o dano torna-se de luz." },
  { nivel: "Avançada", nome: "Sísmico", descricao: "O ataque causa 5 de dano adicional e o dano torna-se de terra." },
  { nivel: "Avançada", nome: "Sombra", descricao: "O ataque causa 5 de dano adicional e o dano torna-se de trevas." },
  { nivel: "Superior", nome: "Vampiro", descricao: "Escolha um: você recupera PV igual à metade dos PV perdidos pelo alvo; ou você recupera PM igual à metade dos PV perdidos pelo alvo. Esta infusão só pode ser usada se o ataque tiver apenas uma criatura como alvo." },
  { nivel: "Superior", nome: "Peçonha", descricao: "O ataque causa 5 de dano adicional, o dano torna-se de veneno e cada criatura atingida pelo ataque fica envenenada." }
];

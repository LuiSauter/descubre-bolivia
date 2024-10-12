export const departamentos = [
  { nombre: "La Paz", capital: "La Paz" },
  { nombre: "Santa Cruz", capital: "Santa Cruz de la Sierra" },
  { nombre: "Cochabamba", capital: "Cochabamba" },
  { nombre: "Potosí", capital: "Potosí" },
  { nombre: "Chuquisaca", capital: "Sucre" },
  { nombre: "Oruro", capital: "Oruro" },
  { nombre: "Tarija", capital: "Tarija" },
  { nombre: "Beni", capital: "Trinidad" },
  { nombre: "Pando", capital: "Cobija" },
]

export type FechaCivica = {
  fecha: string;
  titulo: string;
  descripcion: string;
}

export interface FechasCivicas {
  [departamento: string]: FechaCivica[]
}

export const fechasCivicas: FechasCivicas = {
  "La Paz": [
    {
      fecha: "24 de enero",
      titulo: "Fundación de La Paz",
      descripcion: "La Paz fue fundada el 20 de octubre de 1548 por el capitán español Alonso de Mendoza, bajo el nombre de 'Nuestra Señora de La Paz', en conmemoración de la pacificación entre las fuerzas de Pizarro y Almagro. La ciudad es hoy la sede del gobierno de Bolivia y uno de los principales centros políticos y culturales del país."
    },
    {
      fecha: "2 de febrero",
      titulo: "Fiesta de la Virgen de la Candelaria (Copacabana)",
      descripcion: "La Fiesta de la Virgen de la Candelaria es una de las celebraciones religiosas más importantes en Bolivia, especialmente en la ciudad de Copacabana. La Virgen es considerada la patrona de la región del altiplano y de los pueblos aymaras. La festividad incluye procesiones, danzas folclóricas y peregrinaciones, atrayendo a miles de fieles y turistas."
    },
    {
      fecha: "16 de julio",
      titulo: "Aniversario de la Revolución de La Paz",
      descripcion: "El 16 de julio de 1809 marca uno de los primeros levantamientos independentistas en América del Sur. Liderada por Pedro Domingo Murillo, la revolución de La Paz encendió la llama de la lucha por la independencia de Bolivia del dominio español. Aunque inicialmente fue sofocada, su impacto fue profundo y Murillo es considerado uno de los grandes héroes nacionales."
    },
    {
      fecha: "6 de agosto",
      titulo: "Día de la Independencia de Bolivia",
      descripcion: "Este día conmemora la declaración de independencia de Bolivia el 6 de agosto de 1825, tras más de 15 años de guerra contra el dominio español. Es una fiesta nacional que se celebra en todo el país con actos oficiales y desfiles."
    },
    {
      fecha: "20 de octubre",
      titulo: "Día del departamento de La Paz",
      descripcion: "Este día conmemora la creación del departamento de La Paz, uno de los más importantes de Bolivia. Se organizan actividades cívicas, culturales y deportivas en toda la región."
    },
    {
      fecha: "8 de diciembre",
      titulo: "Fiesta de la Virgen de Copacabana",
      descripcion: "La Virgen de Copacabana es venerada como la patrona de Bolivia. Esta festividad atrae a miles de peregrinos a su santuario en la ciudad de Copacabana, a orillas del lago Titicaca, con rituales religiosos, procesiones y danzas."
    }
  ],
  "Santa Cruz": [
    {
      fecha: "26 de febrero",
      titulo: "Fundación de Santa Cruz de la Sierra",
      descripcion: "Santa Cruz de la Sierra fue fundada el 26 de febrero de 1561 por el conquistador Ñuflo de Chávez. Actualmente es la ciudad más grande de Bolivia y su principal motor económico."
    },
    {
      fecha: "21 de mayo",
      titulo: "Día de la Tradición Cruceña",
      descripcion: "Esta fecha celebra las costumbres y tradiciones cruceñas, destacando su cultura regional a través de actividades folclóricas, desfiles de trajes típicos y ferias gastronómicas."
    },
    {
      fecha: "17 de agosto",
      titulo: "Día de la Bandera Cruceña",
      descripcion: "En esta fecha se rinde homenaje a la bandera verde, blanco y verde de Santa Cruz, símbolo de la identidad regional. Se realizan eventos cívicos, incluyendo la izada de la bandera."
    },
    {
      fecha: "14 de septiembre",
      titulo: "Aniversario de la Revolución de Ñuflo de Chávez",
      descripcion: "Conmemoración de la revolución independentista de Santa Cruz, que fue un precursor de la independencia de Bolivia. Ñuflo de Chávez es una figura central en la historia de la región."
    },
    {
      fecha: "24 de septiembre",
      titulo: "Día del departamento de Santa Cruz",
      descripcion: "El 24 de septiembre se celebra el levantamiento de Santa Cruz contra el dominio español en 1810. Es una de las fechas más importantes del departamento, con desfiles y eventos cívicos."
    },
    {
      fecha: "30 de noviembre",
      titulo: "Día de la Cultura Guaraní",
      descripcion: "Día dedicado a la preservación y celebración de la cultura guaraní, una de las etnias indígenas más importantes de Bolivia. Incluye ceremonias tradicionales y actividades culturales."
    }
  ],
  "Cochabamba": [
    {
      fecha: "11 de enero",
      titulo: "Aniversario de la Batalla de Aroma",
      descripcion: "La Batalla de Aroma, librada el 14 de noviembre de 1810, fue un enfrentamiento clave en la lucha por la independencia de Bolivia. Aunque no fue decisiva, representó un importante acto de resistencia frente a las fuerzas españolas."
    },
    {
      fecha: "27 de mayo",
      titulo: "Aniversario de la Coronación de la Virgen de Urkupiña",
      descripcion: "La Virgen de Urkupiña es una de las advocaciones más veneradas de Bolivia. Cada año, miles de peregrinos acuden a Quillacollo para participar en una de las manifestaciones religiosas más grandes del país, donde se celebran misas y procesiones."
    },
    {
      fecha: "15 de agosto",
      titulo: "Fundación de Cochabamba",
      descripcion: "Cochabamba fue fundada el 15 de agosto de 1571 bajo el nombre de Villa de Oropesa. Es una ciudad clave en la historia de Bolivia, conocida por su fértil valle y su clima templado."
    },
    {
      fecha: "14 de septiembre",
      titulo: "Día del departamento de Cochabamba",
      descripcion: "Se celebra la creación del departamento de Cochabamba, una región agrícola vital para el país, conocida como el granero de Bolivia."
    },
    {
      fecha: "21 de septiembre",
      titulo: "Día de la Primavera y de la Juventud",
      descripcion: "Este día celebra la llegada de la primavera y es también el día dedicado a la juventud boliviana. En Cochabamba se realizan actividades recreativas, culturales y deportivas."
    },
    {
      fecha: "5 de octubre",
      titulo: "Fiesta de la Virgen de la Merced",
      descripcion: "Festividad religiosa en honor a la Virgen de la Merced, venerada por los cochabambinos. Se celebran procesiones y ceremonias religiosas en su honor."
    }
  ],
  "Potosí": [
    {
      fecha: "19 de marzo",
      titulo: "Fiesta de San José (Patrono de Potosí)",
      descripcion: "San José es el patrono de Potosí, una ciudad famosa por su riqueza histórica y minera. La fiesta se celebra con actividades religiosas, procesiones y eventos culturales."
    },
    {
      fecha: "1 de abril",
      titulo: "Fundación de la Villa Imperial de Potosí",
      descripcion: "La Villa Imperial de Potosí fue fundada en 1545 y se convirtió en una de las ciudades más ricas del mundo durante la época colonial debido a su mina de plata. Su riqueza contribuyó al auge del Imperio español."
    },
    {
      fecha: "6 de agosto",
      titulo: "Día de la Independencia de Bolivia",
      descripcion: "Potosí celebra junto con el resto del país la independencia de Bolivia, proclamada el 6 de agosto de 1825, con desfiles y actos cívicos que resaltan su contribución histórica al país."
    },
    {
      fecha: "10 de noviembre",
      titulo: "Día del departamento de Potosí",
      descripcion: "El 10 de noviembre conmemora el levantamiento de Potosí en 1810, un hito en la lucha por la independencia de Bolivia. Potosí, con su historia minera, ha sido fundamental en la economía y la política del país."
    },
    {
      fecha: "15 de noviembre",
      titulo: "Día de la Revolución Nacional en Potosí",
      descripcion: "Este día celebra el levantamiento patriótico en Potosí contra las fuerzas coloniales españolas en 1810, un evento clave en la historia de la independencia boliviana."
    },
    {
      fecha: "8 de diciembre",
      titulo: "Fiesta de la Virgen de la Concepción",
      descripcion: "Fiesta religiosa en honor a la Virgen de la Concepción, celebrada con fervor en Potosí. Se realizan procesiones, misas y otras actividades religiosas."
    }
  ]
};

export const departamentosArr = [
  "La Paz", "Santa Cruz", "Cochabamba", "Potosí", "Chuquisaca", "Oruro", "Tarija", "Beni", "Pando"
];

export interface MitosLeyendas {
  [key: string]: { titulo: string; descripcion: string; tipo: "Mito" | "Leyenda"; imagen: string }[];
};

export const mitosLeyendas: MitosLeyendas = {
  "La Paz": [
    {
      titulo: "La leyenda de Alaxpacha",
      descripcion: "La leyenda de Alaxpacha relata la creación del mundo según la cosmovisión aymara, explicando cómo el universo se divide en tres planos esenciales: Alaxpacha (el mundo de arriba), Akapacha (el mundo del medio), y Manqhapacha (el mundo de abajo), cada uno con sus propias entidades y significados espirituales.",
      tipo: "Leyenda",
      imagen: "/alaxpacha.webp"
    },
    {
      titulo: "El mito del Ekeko",
      descripcion: "Este mito cuenta la historia del Ekeko, una deidad andina de la abundancia y la prosperidad. Protector de los hogares y distribuidor de riquezas, el Ekeko es una figura central en muchas celebraciones, ofreciendo fortuna a aquellos que le rinden culto.",
      tipo: "Mito",
      imagen: "/ekeko.webp"
    },
    {
      titulo: "La leyenda del Illimani",
      descripcion: "La majestuosa montaña de Illimani se alza como guardiana de la ciudad de La Paz. Esta leyenda explora los orígenes místicos de Illimani, considerada morada de poderosos espíritus y depositaria de incontables tesoros ocultos.",
      tipo: "Leyenda",
      imagen: "/illimani.webp"
    },
  ],
  "Santa Cruz": [
    {
      titulo: "La leyenda del Mapinguari",
      descripcion: "El Mapinguari, según la leyenda, es un gigante de un solo ojo y una boca en el estómago que protege los bosques de la Amazonía. Este ser mitológico castiga a aquellos que dañan su hábitat, siendo una figura temida y respetada en las tradiciones amazónicas.",
      tipo: "Leyenda",
      imagen: "/mapinguari.webp"
    },
    {
      titulo: "El mito de la Loma Santa",
      descripcion: "La Loma Santa es descrita como un lugar místico donde la abundancia y la paz reinan eternamente. Este mito narra cómo este sitio sagrado sirve como refugio y santuario para todas las criaturas vivientes, existiendo en perfecta armonía y libre de cualquier mal.",
      tipo: "Mito",
      imagen: "/loma.webp"
    },
    {
      titulo: "La leyenda del Duende",
      descripcion: "El Duende es una figura traviesa que reside en los bosques de Santa Cruz, conocido por sus travesuras y juegos con niños. Este personaje es central en muchas historias locales que advierten sobre las consecuencias de adentrarse demasiado en sus dominios forestales.",
      tipo: "Leyenda",
      imagen: "/duende.webp"
    },
    {
      titulo: "La leyenda de la Viudita",
      descripcion: "La Viudita es un espíritu que vaga por los caminos de Santa Cruz durante la noche, vestida de negro y buscando a su esposo perdido. Esta leyenda encapsula el dolor y la lealtad eterna, sirviendo como un recordatorio sombrío del amor más allá de la muerte.",
      tipo: "Leyenda",
      imagen: "/viudita.webp"
    },
    {
      titulo: "La leyenda de la Virgen de las 7 Calles",
      descripcion: "Según esta leyenda, la Virgen María hizo apariciones en siete calles distintas de Santa Cruz, brindando protección y guía a aquellos en tiempos de necesidad. Cada calle donde apareció se ha convertido en un lugar de peregrinación y devoción.",
      tipo: "Leyenda",
      imagen: "/virgen7calles.webp"
    },
    {
      titulo: "El mito del Jichi",
      descripcion: "El Jichi es un protector espiritual del agua y la naturaleza en las tierras bajas de Bolivia. A menudo representado como una serpiente gigante, este ser mitológico aparece para restaurar el equilibrio cuando los ecosistemas acuáticos están amenazados.",
      tipo: "Mito",
      imagen: "/jichi.webp"
    },
    {
      titulo: "La leyenda del Mojón con Cara",
      descripcion: "Este hito de piedra es famoso por su habilidad para moverse solo, apareciendo ante viajeros perdidos durante la noche. El Mojón con Cara es tanto un guardian como un presagio, marcando los límites de lo conocido y lo misterioso.",
      tipo: "Leyenda",
      imagen: "/mojoncara.webp"
    },
    {
      titulo: "El mito de Donde Dejó el Diablo su Poncho",
      descripcion: "Este mito narra la historia de una roca grande en Santa Cruz que marca el lugar donde el diablo dejó su poncho. Se dice que este evento sobrenatural ocurrió tras un encuentro con los lugareños, dejando una marca permanente en el paisaje y en las leyendas locales.",
      tipo: "Mito",
      imagen: "/diabloponcho.webp"
    },
    {
      titulo: "El mito del Carretón de la Otra Vida",
      descripcion: "El Carretón de la Otra Vida es un carruaje fantasmal que recorre las regiones de Santa Cruz recogiendo almas. Aunque raramente visto, el sonido de sus ruedas y el crujir de su madera son presagios conocidos de la muerte inminente.",
      tipo: "Mito",
      imagen: "/carretonvida.webp"
    },
    {
      titulo: "El mito del Guajojo",
      descripcion: "El Guajojo es un ave de canto triste que, según la leyenda, es el espíritu de una mujer transformada por su padre chamán después de la traición y asesinato de su amante. Su melancólico canto se dice que presagia la muerte y grandes cambios.",
      tipo: "Mito",
      imagen: "/guajojo.webp"
    },
    {
      titulo: "La leyenda del Toborochi",
      descripcion: "El árbol Toborochi es venerado como un símbolo de sacrificio y protección. Según la leyenda, una mujer se refugió en su tronco para escapar de un guerrero, y desde entonces, el árbol florece en señal de paz y recuerdo de su valentía y sacrificio.",
      tipo: "Leyenda",
      imagen: "/toborochi.webp"
    }
  ],
  "Cochabamba": [
    {
      titulo: "La leyenda de la Virgen de Urkupiña",
      descripcion: "La Virgen de Urkupiña apareció milagrosamente en la montaña de Cota, convirtiéndose en una figura central de fe y unidad en Cochabamba. Celebrada anualmente, su festividad atrae a miles de fieles que buscan su bendición y protección.",
      tipo: "Leyenda",
      imagen: "/urkupiña.webp"
    },
    {
      titulo: "El mito del Tunupa",
      descripcion: "Tunupa es venerado como el dios del trueno y los volcanes, una figura poderosa en la mitología andina que se dice influencia tanto la geografía como los destinos humanos con sus acciones volcánicas y tormentas.",
      tipo: "Mito",
      imagen: "/tunupa.webp"
    },
  ],
};

export type PersonajeRelevante = {
  nombre: string;
  descripcion: string;
  imagen: string; // Nueva propiedad para la imagen
};

export interface PersonajesRelevantes {
  [departamento: string]: PersonajeRelevante[];
}

export const personajesRelevantes: PersonajesRelevantes = {
  "La Paz": [
    {
      nombre: "Pedro Domingo Murillo",
      descripcion: "Líder de la Revolución de La Paz en 1809, considerado uno de los precursores de la independencia de Bolivia. Fue ejecutado por las fuerzas realistas, pero su lucha inspiró a generaciones.",
      imagen: "/characters/murillo.webp"
    },
    {
      nombre: "Bartolina Sisa",
      descripcion: "Heroína indígena que luchó contra la opresión española durante las rebeliones indígenas de 1781. Fue una de las figuras más destacadas de la resistencia aymara.",
      imagen: "/characters/bartolina_sisa.webp"
    },
    {
      nombre: "Ismael Montes",
      descripcion: "Militar y político boliviano que fue presidente en dos ocasiones. Durante su mandato, se consolidó la infraestructura del país, y es recordado como uno de los grandes estadistas de Bolivia.",
      imagen: "/characters/ismael_montes.webp"
    },
    {
      nombre: "Carlos Palenque",
      descripcion: "Músico, presentador de televisión y político conocido por su labor en la defensa de los sectores populares. Fue una figura emblemática en la política de los años 80 y 90.",
      imagen: "/characters/carlos_palenque.webp"
    },
    {
      nombre: "Simón I. Patiño",
      descripcion: "Uno de los empresarios más ricos del mundo en su época, conocido como el 'Rey del Estaño'. Jugó un papel importante en la economía de Bolivia durante la primera mitad del siglo XX.",
      imagen: "/characters/simon_patiño.webp"
    }
  ],
  "Santa Cruz": [
    {
      nombre: "Ñuflo de Chávez",
      descripcion: "Conquistador español y fundador de Santa Cruz de la Sierra en 1561. Jugó un papel crucial en la expansión y colonización de la región oriental de Bolivia.",
      imagen: "/characters/nuflo_chavez.webp"
    },
    {
      nombre: "Andrés Ibáñez",
      descripcion: "Líder cruceño y revolucionario que luchó por la autonomía regional y los derechos de los campesinos en el siglo XIX. Fue ejecutado en 1877 por sus ideales federalistas.",
      imagen: "/characters/andres_ibanez.webp"
    },
    {
      nombre: "Cañoto",
      descripcion: "Personaje mítico y héroe popular cruceño, conocido por su valentía y astucia en la lucha por la independencia de Bolivia. Su figura ha sido inmortalizada en canciones y relatos populares.",
      imagen: "/characters/cañoto.webp"
    },
    {
      nombre: "Melchor Pinto Parada",
      descripcion: "Médico y político cruceño, defensor de los derechos cívicos y de la autonomía de Santa Cruz. Fue una figura clave en la lucha por el desarrollo regional en la segunda mitad del siglo XX.",
      imagen: "/characters/melchor_pinto.webp"
    },
    {
      nombre: "Ernesto Suárez Sattori",
      descripcion: "Político y exgobernador del departamento de Santa Cruz. Conocido por su liderazgo en el proceso autonómico cruceño y su influencia en la política boliviana contemporánea.",
      imagen: "/characters/ernesto_suarez.webp"
    }
  ],
  "Cochabamba": [
    {
      nombre: "Manuel Ascencio Villarroel",
      descripcion: "Militar y caudillo de la independencia boliviana que participó en las guerras de liberación en el valle de Cochabamba. Fue uno de los héroes locales de la guerra de independencia.",
      imagen: "/characters/manuel_villarroel.webp"
    },
    {
      nombre: "Esteban Arce",
      descripcion: "Héroe de la independencia de Bolivia y líder de la guerrilla en Cochabamba. Jugó un papel crucial en la resistencia contra las fuerzas realistas en la región.",
      imagen: "/characters/esteban_arce.webp"
    },
    {
      nombre: "Tunupa",
      descripcion: "Figura mitológica andina, venerado como un dios del trueno y los volcanes. Su leyenda está profundamente arraigada en la cosmovisión andina y es particularmente importante en Cochabamba.",
      imagen: "/characters/tunupa.webp"
    },
    {
      nombre: "Martina Melgar",
      descripcion: "Heroína cochabambina que participó en la Revolución de las Heroínas de la Coronilla. Su sacrificio es recordado como un símbolo de la resistencia popular en Cochabamba.",
      imagen: "/characters/martina_melgar.webp"
    },
    {
      nombre: "Adela Zamudio",
      descripcion: "Poeta y escritora feminista, una de las figuras más influyentes de la literatura boliviana. Su obra promovió los derechos de las mujeres y la igualdad social.",
      imagen: "/characters/adela_zamudio.webp"
    }
  ],
  "Potosí": [
    {
      nombre: "Juana Azurduy de Padilla",
      descripcion: "Heroína de la independencia que lideró tropas en la lucha contra el imperio español. Su valentía y liderazgo son recordados como un ejemplo de lucha por la libertad.",
      imagen: "/characters/juana_azurduy.webp"
    },
    {
      nombre: "Tomás Katari",
      descripcion: "Líder indígena potosino que luchó contra las injusticias coloniales y los abusos en el sistema de repartimiento. Su resistencia inspiró a muchos otros líderes indígenas.",
      imagen: "/characters/tomas_katari.webp"
    },
    {
      nombre: "Diego Huallpa",
      descripcion: "Descubridor de la famosa mina de Potosí en el Cerro Rico. Su hallazgo marcó el inicio de una de las mayores explotaciones mineras de la historia mundial.",
      imagen: "/characters/diego_huallpa.webp"
    },
    {
      nombre: "Sebastián Pagador",
      descripcion: "Líder del levantamiento potosino de 1810, uno de los primeros en rebelarse contra las autoridades españolas en la región. Su acción fue clave para la independencia de Potosí.",
      imagen: "/characters/sebastian_pagador.webp"
    },
    {
      nombre: "Gregoria Apaza",
      descripcion: "Hermana de Túpac Katari y líder indígena en las rebeliones contra el dominio español. Jugó un papel clave en la lucha por la liberación del pueblo aymara.",
      imagen: "/characters/gregoria_apaza.webp"
    }
  ],
  "Chuquisaca": [
    {
      nombre: "Juana Azurduy de Padilla",
      descripcion: "Originaria de Chuquisaca, esta heroína de la independencia jugó un papel fundamental en la lucha contra las fuerzas coloniales, liderando ejércitos guerrilleros.",
      imagen: "/characters/juana_azurduy.webp"
    },
    {
      nombre: "Antonio José de Sucre",
      descripcion: "General venezolano y Gran Mariscal de Ayacucho, fue el primer presidente de Bolivia y es uno de los padres fundadores de la nación. Sucre es recordado como un líder clave en la independencia de América del Sur.",
      imagen: "/characters/antonio_sucre.webp"
    },
    {
      nombre: "José Mariano Serrano",
      descripcion: "Abogado y político boliviano, fue uno de los redactores del Acta de la Independencia de Bolivia. Su contribución legal fue fundamental para el establecimiento del nuevo estado boliviano.",
      imagen: "/characters/jose_serrano.webp"
    },
    {
      nombre: "Tomás Frías",
      descripcion: "Político y ex presidente boliviano, originario de Chuquisaca. Se destacó por su honestidad y trabajo en la modernización del país durante sus dos mandatos.",
      imagen: "/characters/tomas_frias.webp"
    },
    {
      nombre: "Bernardo Monteagudo",
      descripcion: "Político y revolucionario argentino-boliviano que jugó un papel clave en las luchas independentistas en el Alto Perú. Fue uno de los ideólogos detrás de la independencia de Bolivia.",
      imagen: "/characters/bernardo_monteagudo.webp"
    }
  ]
};

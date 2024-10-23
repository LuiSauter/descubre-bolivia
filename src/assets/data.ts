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
  ],
  "Chuquisaca": [
    {
      fecha: "1 de abril",
      titulo: "Fundación de Sucre",
      descripcion: "Fundada el 1 de abril de 1538, Sucre es una de las ciudades más antiguas de Bolivia y su capital histórica."
    },
    {
      fecha: "25 de mayo de 1809",
      titulo: "Primer Grito Libertario de América",
      descripcion: "Conmemora el primer levantamiento independentista en América Latina, cuando los ciudadanos de Chuquisaca se rebelaron contra el dominio colonial español."
    },
    {
      fecha: "20 de diciembre de 1828",
      titulo: "Batalla de La Tablada",
      descripcion: "Celebración de la victoria de las tropas republicanas sobre las fuerzas peruanas, consolidando la estabilidad de la república boliviana."
    },
  ],
  "Oruro": [
    {
      fecha: "10 de febrero de 1781",
      titulo: "Sublevación de los Indios en Oruro",
      descripcion: "Esta fecha conmemora el levantamiento indígena y mestizo en la ciudad de Oruro contra el dominio español, un movimiento precursor a las luchas por la independencia."
    },
    {
      fecha: "Movible",
      titulo: "Carnaval de Oruro",
      descripcion: "Patrimonio Oral e Intangible de la Humanidad, el Carnaval de Oruro es uno de los eventos culturales más importantes de Bolivia."
    },
    {
      fecha: "16 de julio",
      titulo: "Fiesta de la Virgen del Carmen",
      descripcion: "Celebración religiosa en honor a la Virgen del Carmen, patrona de Oruro, con misas y procesiones."
    },
    {
      fecha: "1 de noviembre de 1606",
      titulo: "Fundación de Oruro",
      descripcion: "Oruro fue fundada el 1 de noviembre de 1606 debido al auge minero en la región, siendo una importante ciudad colonial."
    },
    {
      fecha: "2 de noviembre",
      titulo: "Día de los Difuntos y Todos Santos",
      descripcion: "Festividad de gran importancia cultural y religiosa, donde se honra a los seres queridos fallecidos con ofrendas y rituales."
    },
  ],
  "Tarija": [
    {
      fecha: "15 de abril de 1817",
      titulo: "Batalla de La Tablada",
      descripcion: "Celebración de la victoria de los patriotas tarijeños sobre las fuerzas realistas, un símbolo de la lucha por la independencia en Tarija."
    },
    {
      fecha: "4 de julio de 1574",
      titulo: "Fundación de Tarija",
      descripcion: "La ciudad de Tarija fue fundada el 4 de julio de 1574 por Luis de Fuentes y Vargas, una ciudad estratégica en la época colonial."
    },
    {
      fecha: "8 de septiembre",
      titulo: "Fiesta de la Virgen de Chaguaya",
      descripcion: "Festividad religiosa en honor a la Virgen de Chaguaya, que incluye una peregrinación al santuario para rendir homenaje a la Virgen."
    },
    {
      fecha: "25 de octubre",
      titulo: "Fundación de Bermejo",
      descripcion: "Celebración de la fundación de la ciudad de Bermejo, una región importante por su producción agrícola y cercanía con Argentina."
    }
  ],
  "Beni": [
    {
      fecha: "22 de enero",
      titulo: "Fundación de San Ignacio de Moxos",
      descripcion: "Fundación de San Ignacio de Moxos por los jesuitas, un hito histórico para Beni."
    },
    {
      fecha: "4 de mayo",
      titulo: "Fundación de Riberalta",
      descripcion: "Celebración de la fundación de Riberalta, uno de los principales centros económicos de Beni."
    },
    {
      fecha: "15 de agosto",
      titulo: "Fiesta de la Virgen de la Asunción",
      descripcion: "Festividad religiosa en honor a la Virgen de la Asunción, patrona de Trinidad."
    },
    {
      fecha: "24 de septiembre",
      titulo: "Día de la Bandera Beniana",
      descripcion: "Celebración de la creación de la bandera del departamento de Beni, con actos cívicos."
    },
    {
      fecha: "18 de noviembre de 1842",
      titulo: "Fundación de la ciudad de Trinidad",
      descripcion: "Conmemoración de la fundación de Trinidad, capital de Beni, una de las principales fechas cívicas del departamento."
    },
    {
      fecha: "3 de diciembre de 1842",
      titulo: "Creación del Departamento de Beni",
      descripcion: "Celebración de la creación del departamento de Beni, siendo Trinidad su capital."
    },
  ],
  "Pando": [
    {
      fecha: "14 de enero",
      titulo: "Fundación de Porvenir",
      descripcion: "Celebración de la fundación de Porvenir, una localidad estratégica en Pando."
    },
    {
      fecha: "9 de febrero de 1906",
      titulo: "Fundación de Cobija",
      descripcion: "Cobija fue fundada el 9 de febrero de 1906, un paso importante en la soberanía boliviana en la región amazónica."
    },
    {
      fecha: "18 de agosto",
      titulo: "Fundación de Bolpebra",
      descripcion: "Bolpebra, en la triple frontera entre Bolivia, Perú y Brasil, fue fundada el 18 de agosto de 1992 como símbolo de integración fronteriza."
    },
    {
      fecha: "11 de septiembre de 1903",
      titulo: "Batalla de Bahía",
      descripcion: "Conmemoración de la defensa boliviana en la Batalla de Bahía durante la Guerra del Acre."
    },
    {
      fecha: "11 de octubre de 1938",
      titulo: "Creación del Departamento de Pando",
      descripcion: "Conmemoración de la creación del departamento de Pando, separándose de Beni para convertirse en el noveno departamento de Bolivia."
    },
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
      descripcion: "Pedro Domingo Murillo fue uno de los grandes líderes de la Revolución de La Paz en 1809, un precursor clave de la independencia de Bolivia. Su llamado a la libertad contra el dominio español culminó en la organización del Primer Grito Libertario en América Latina. Aunque fue ejecutado por las fuerzas realistas en 1810, su sacrificio se convirtió en un símbolo de la lucha por la independencia. Su figura inspiró a generaciones posteriores, y su legado es celebrado en la ciudad de La Paz, donde una de sus principales plazas lleva su nombre.",
      imagen: "/characters/murillo.webp"
    },
    {
      nombre: "Bartolina Sisa",
      descripcion: "Bartolina Sisa fue una heroína indígena aymara que, junto con su esposo Túpac Katari, lideró la resistencia contra la opresión colonial española durante el levantamiento indígena de 1781. Durante meses, cercaron la ciudad de La Paz, luchando por la liberación de su pueblo de la explotación y el maltrato colonial. Capturada y ejecutada brutalmente por los españoles, su legado ha perdurado como un símbolo de la resistencia indígena en Bolivia. En su honor, se celebra el Día Internacional de la Mujer Indígena cada 5 de septiembre.",
      imagen: "/characters/bartolina_sisa.webp"
    },
    {
      nombre: "Ismael Montes",
      descripcion: "Ismael Montes fue un destacado militar y político boliviano que sirvió como presidente de Bolivia en dos ocasiones (1904-1909 y 1913-1917). Durante su mandato, consolidó importantes reformas como la creación del sistema ferroviario que conectó el país y modernizó la infraestructura. Fue una figura clave en la consolidación del estado boliviano tras la Guerra del Pacífico, firmando el Tratado de Paz con Chile en 1904. Su visión y liderazgo lo posicionan como uno de los grandes estadistas en la historia boliviana.",
      imagen: "/characters/ismael_montes.webp"
    },
    {
      nombre: "Carlos Palenque",
      descripcion: "Carlos Palenque fue un carismático músico, presentador de televisión y político que se destacó por su defensa de los derechos de los sectores populares en Bolivia. En los años 80 y 90, su programa televisivo 'La Tribuna Libre del Pueblo' fue un espacio donde los ciudadanos más marginados podían expresar sus problemas y necesidades. Su enfoque populista y su compromiso con las clases trabajadoras lo convirtieron en una figura política emblemática, especialmente en La Paz, donde fundó el partido Conciencia de Patria (CONDEPA).",
      imagen: "/characters/carlos_palenque.webp"
    },
    {
      nombre: "Simón I. Patiño",
      descripcion: "Simón I. Patiño, conocido como el 'Rey del Estaño', fue uno de los empresarios más ricos y poderosos del mundo a comienzos del siglo XX. A través de su imperio minero, controló una gran parte de la producción mundial de estaño, un mineral crucial para la industria de la época. Patiño jugó un papel central en la economía boliviana, y su fortuna personal lo convirtió en una figura influyente no solo en Bolivia, sino también a nivel internacional. Sus contribuciones a la infraestructura del país, así como su influencia en la política, lo hacen una de las figuras más importantes de la historia económica de Bolivia.",
      imagen: "/characters/simon_patiño.webp"
    }
  ],
  "Santa Cruz": [
    {
      nombre: "Ñuflo de Chávez",
      descripcion: "Ñuflo de Chávez fue un conquistador español que fundó la ciudad de Santa Cruz de la Sierra en 1561. Su exploración y colonización de las tierras orientales de Bolivia establecieron las bases para el desarrollo de la región. Durante su vida, enfrentó tanto la resistencia de los pueblos indígenas como las luchas internas dentro de la administración colonial española. Su legado perdura como uno de los fundadores de la región cruceña, que hoy es una de las más prósperas del país.",
      imagen: "/characters/nuflo_chavez.webp"
    },
    {
      nombre: "Andrés Ibáñez",
      descripcion: "Andrés Ibáñez fue un líder cruceño del siglo XIX que se destacó por su lucha en favor de la autonomía regional y los derechos de los campesinos. Fundador del movimiento federalista en Bolivia, su ideal de descentralización buscaba una mayor justicia social y una distribución equitativa de los recursos en las regiones. Sin embargo, su lucha fue vista como una amenaza para el gobierno central y fue ejecutado en 1877. Su legado inspira a los movimientos autonomistas contemporáneos en Santa Cruz.",
      imagen: "/characters/andres_ibanez.webp"
    },
    {
      nombre: "Cañoto",
      descripcion: "Cañoto es una figura legendaria y heroica en Santa Cruz. Aunque es difícil distinguir entre los hechos históricos y los relatos populares, se le recuerda como un valiente luchador que se unió a las fuerzas que buscaban la independencia de Bolivia. Su nombre ha sido inmortalizado en canciones y leyendas locales, convirtiéndose en un símbolo del coraje cruceño. Se dice que su destreza con la guitarra y su valentía en la batalla le ganaron un lugar especial en la historia oral de la región.",
      imagen: "/characters/cañoto.webp"
    },
    {
      nombre: "Melchor Pinto Parada",
      descripcion: "Melchor Pinto Parada fue un médico y político que se convirtió en un defensor incansable de los derechos cívicos y la autonomía regional de Santa Cruz. En la década de 1950, lideró movimientos que buscaban la descentralización y el desarrollo de Santa Cruz, luchando por mejorar la infraestructura y la economía de la región. Su liderazgo y su compromiso con el bienestar de su pueblo lo hicieron una figura clave en el desarrollo de la región cruceña en la segunda mitad del siglo XX.",
      imagen: "/characters/melchor_pinto.webp"
    },
    {
      nombre: "Ernesto Suárez Sattori",
      descripcion: "Ernesto Suárez Sattori es un político contemporáneo que fue gobernador del departamento de Santa Cruz. Conocido por su defensa de la autonomía cruceña, jugó un papel crucial en el proceso autonómico que marcó la política boliviana en las primeras décadas del siglo XXI. Suárez se destacó por su habilidad para unir a diversas facciones políticas y sociales en torno a la demanda de mayores competencias para los gobiernos departamentales, siendo una figura influyente en la política nacional.",
      imagen: "/characters/ernesto_suarez.webp"
    }
  ],
  "Cochabamba": [
    {
      nombre: "Manuel Ascencio Villarroel",
      descripcion: "Manuel Ascencio Villarroel fue un militar boliviano que participó activamente en las guerras de independencia en el valle de Cochabamba. Conocido por su valentía, fue uno de los líderes de la resistencia contra las fuerzas realistas, destacándose en la defensa de su región. Su participación en la guerra lo convirtió en un héroe local, y su figura es recordada como un símbolo de la lucha por la libertad en Cochabamba.",
      imagen: "/characters/manuel_villarroel.webp"
    },
    {
      nombre: "Esteban Arce",
      descripcion: "Esteban Arce fue un líder guerrillero que desempeñó un papel fundamental en la lucha por la independencia de Bolivia. En Cochabamba, organizó y comandó las fuerzas locales contra las tropas realistas, y sus acciones ayudaron a consolidar la resistencia en el valle. Su liderazgo militar y su compromiso con la causa independentista lo posicionan como uno de los héroes más importantes de la región.",
      imagen: "/characters/esteban_arce.webp"
    },
    {
      nombre: "Tunupa",
      descripcion: "Tunupa es una figura mitológica de la cosmovisión andina, asociado con el trueno, los volcanes y los fenómenos naturales. Aunque no se trata de una figura histórica, su importancia cultural en la región de Cochabamba es inmensa. Tunupa es venerado como un dios en la tradición indígena, y su leyenda ha sido transmitida a través de generaciones. Su presencia en la mitología andina subraya la profunda conexión entre el pueblo andino y la naturaleza.",
      imagen: "/characters/tunupa.webp"
    },
    {
      nombre: "Martina Melgar",
      descripcion: "Martina Melgar fue una de las valientes mujeres que participaron en la Revolución de las Heroínas de la Coronilla en 1812, una revuelta liderada por mujeres de Cochabamba contra las fuerzas españolas. Aunque mal armadas, las heroínas se defendieron hasta el final, y muchas, incluida Martina Melgar, murieron en combate. Su sacrificio es recordado como un ejemplo de la resistencia popular y el coraje de las mujeres bolivianas en la lucha por la independencia.",
      imagen: "/characters/martina_melgar.webp"
    },
    {
      nombre: "Adela Zamudio",
      descripcion: "Adela Zamudio fue una poeta, escritora y maestra boliviana que se destacó como una de las primeras voces feministas en el país. A lo largo de su vida, Zamudio escribió obras que criticaban la desigualdad de género y promovían la educación de las mujeres. Su poema 'Nacer Hombre' es emblemático de su lucha por los derechos de la mujer. Hasta el día de hoy, su obra sigue siendo fundamental en la literatura boliviana y en la promoción de la igualdad de género.",
      imagen: "/characters/adela_zamudio.webp"
    }
  ],
  "Potosí": [
    {
      nombre: "Juana Azurduy de Padilla",
      descripcion: "Juana Azurduy de Padilla fue una valiente guerrillera que luchó por la independencia de Bolivia y otras regiones del Alto Perú. Junto a su esposo, Manuel Ascencio Padilla, organizó y lideró tropas contra las fuerzas españolas, destacándose por su habilidad táctica y su valentía en el campo de batalla. Azurduy es recordada como una de las heroínas más grandes de la independencia latinoamericana, y su imagen es un símbolo de la lucha por la libertad y los derechos de las mujeres.",
      imagen: "/characters/juana_azurduy.webp"
    },
    {
      nombre: "Tomás Katari",
      descripcion: "Tomás Katari fue un líder indígena que luchó por los derechos de su pueblo frente a las injusticias del sistema colonial español en el Alto Perú. Originario de Potosí, Katari se destacó por su resistencia al sistema de repartimiento y los abusos cometidos contra las comunidades indígenas. Su liderazgo inspiró a otros líderes indígenas, como Túpac Katari, y su lucha es vista como un antecedente de los movimientos indígenas en Bolivia.",
      imagen: "/characters/tomas_katari.webp"
    },
    {
      nombre: "Diego Huallpa",
      descripcion: "Diego Huallpa fue el indígena que, según la leyenda, descubrió la mina de Potosí en el Cerro Rico en el siglo XVI. Este descubrimiento transformó la ciudad en uno de los centros mineros más importantes del mundo, convirtiendo a Potosí en una fuente de riqueza para la corona española. Aunque la vida de Huallpa no está bien documentada, su hallazgo fue fundamental para la historia económica de Bolivia y el mundo.",
      imagen: "/characters/diego_huallpa.webp"
    },
    {
      nombre: "Sebastián Pagador",
      descripcion: "Sebastián Pagador fue un líder del levantamiento independentista en Potosí en 1810, uno de los primeros movimientos revolucionarios en la región. Su rebelión fue una de las primeras en desafiar abiertamente el dominio español en Bolivia, y su valentía influyó en futuros movimientos independentistas. Su figura es recordada como un símbolo del coraje y la determinación de los potosinos en la lucha por la libertad.",
      imagen: "/characters/sebastian_pagador.webp"
    },
    {
      nombre: "Gregoria Apaza",
      descripcion: "Gregoria Apaza fue una líder indígena y hermana de Túpac Katari, quien jugó un papel crucial en las rebeliones indígenas contra el dominio español en el siglo XVIII. Al igual que su hermano, Gregoria fue una líder estratégica y participó en el sitio de La Paz en 1781. Su valentía y sacrificio la han convertido en una figura fundamental en la historia de la resistencia indígena en Bolivia.",
      imagen: "/characters/gregoria_apaza.webp"
    }
  ],
  "Chuquisaca": [
    {
      nombre: "Juana Azurduy de Padilla",
      descripcion: "Juana Azurduy de Padilla, nacida en Chuquisaca, fue una de las figuras más destacadas de la independencia del Alto Perú. Su participación en la guerra, liderando tropas guerrilleras y combatiendo al lado de su esposo Manuel Ascencio Padilla, la convirtió en un símbolo de la lucha por la libertad en América Latina. Recibió el rango de Teniente Coronel por su valentía y es recordada como una de las heroínas más importantes de la historia de Bolivia.",
      imagen: "/characters/juana_azurduy.webp"
    },
    {
      nombre: "Antonio José de Sucre",
      descripcion: "Antonio José de Sucre fue uno de los principales líderes militares de la independencia sudamericana, y el primer presidente de Bolivia. Como Gran Mariscal de Ayacucho, Sucre fue decisivo en la victoria de la Batalla de Ayacucho en 1824, que selló la independencia de Perú y consolidó la emancipación de América del Sur. Su presidencia en Bolivia marcó el inicio de la república, y su influencia es reconocida en toda América Latina.",
      imagen: "/characters/antonio_sucre.webp"
    },
    {
      nombre: "José Mariano Serrano",
      descripcion: "José Mariano Serrano fue un abogado y político boliviano, conocido por ser uno de los redactores del Acta de la Independencia de Bolivia en 1825. Su formación jurídica y su compromiso con los ideales republicanos lo convirtieron en una figura influyente durante los primeros años de la república. Serrano jugó un papel crucial en la creación de las bases legales del nuevo estado boliviano.",
      imagen: "/characters/jose_serrano.webp"
    },
    {
      nombre: "Tomás Frías",
      descripcion: "Tomás Frías fue un político boliviano que ocupó la presidencia del país en dos ocasiones durante el siglo XIX. Su mandato se destacó por su enfoque en la honestidad, la educación y la modernización del estado. Fue uno de los presidentes más íntegros de la historia boliviana, y su legado incluye importantes reformas educativas y económicas.",
      imagen: "/characters/tomas_frias.webp"
    },
    {
      nombre: "Bernardo Monteagudo",
      descripcion: "Bernardo Monteagudo fue un político y revolucionario nacido en Argentina que desempeñó un papel clave en las luchas independentistas del Alto Perú (actual Bolivia). Su participación en las guerras de independencia y su rol como ideólogo lo convirtieron en una figura influyente. Fue uno de los principales redactores de la constitución boliviana y su trabajo sentó las bases del sistema político del país.",
      imagen: "/characters/bernardo_monteagudo.webp"
    }
  ],
  "Oruro": [
    {
      nombre: "Sebastián Pagador",
      descripcion: "Considerado uno de los principales líderes del levantamiento del 10 de febrero de 1781 en Oruro, un precursor de las luchas independentistas en Sudamérica. Pagador encabezó una rebelión contra las autoridades coloniales españolas, marcando un hito en la historia de la resistencia boliviana.",
      imagen: "/characters/sebastian_pagador.webp"
    },
    {
      nombre: "Ildefonso Murguía Anze",
      descripcion: "Abogado, político y militar orureño, conocido por su papel en la Guerra del Pacífico. Lideró el Regimiento Murguía, formado por voluntarios orureños que defendieron Bolivia en la guerra. Fue también gobernador de Oruro y dejó un legado en la historia militar boliviana.",
      imagen: "/characters/ildefonso_murguia.webp"
    },
    {
      nombre: "José Ignacio Sanjinés",
      descripcion: "Poeta y político orureño, reconocido por escribir la letra del Himno Nacional de Bolivia en 1851. Su obra literaria y su participación en la política lo convierten en un representante clave de la cultura y el patriotismo boliviano.",
      imagen: "/characters/jose_sanjines.webp"
    },
    {
      nombre: "Eduardo Abaroa",
      descripcion: "Héroe de la Guerra del Pacífico, Abaroa es recordado por su defensa del territorio boliviano en la Batalla del Topáter. Su frase '¿Rendirme yo? ¡Que se rinda su abuela!' se ha convertido en un símbolo de patriotismo en Bolivia.",
      imagen: "/characters/eduardo_abaroa.webp"
    }
  ],
  "Tarija": [
    {
      nombre: "Eustaquio 'El Moto' Méndez",
      descripcion: "Líder guerrillero de la independencia en Tarija, conocido por su valentía en la lucha contra las fuerzas españolas. A pesar de haber perdido un brazo, continuó luchando, lo que le valió el apodo de 'Moto'. Su resistencia fue clave en la independencia del sur boliviano.",
      imagen: "/characters/moto_mendez.webp"
    },
    {
      nombre: "Juana Azurduy de Padilla",
      descripcion: "Heroína de la independencia que también luchó en la región de Tarija, liderando guerrillas junto a su esposo Manuel Ascencio Padilla. Su valentía y liderazgo en la lucha contra las fuerzas realistas la han convertido en un ícono del patriotismo.",
      imagen: "/characters/juana_azurduy_tarija.webp"
    }
  ],
  "Beni": [
    {
      nombre: "Joaquín de la Pezuela",
      descripcion: "Militar y político que se destacó en la historia del Beni, donde fue gobernador. Defensor de los derechos de los indígenas, centró su administración en el desarrollo agrícola y ganadero, mejorando las condiciones de vida en la región.",
      imagen: "/characters/joaquin_de_la_pezuela.webp"
    }
  ],
  "Pando": [
    {
      nombre: "José Manuel Pando",
      descripcion: "Presidente de Bolivia (1904-1905), promovió el desarrollo de la región amazónica, incluido Pando. Su administración impulsó proyectos de infraestructura y educación en la región, buscando mejorar las condiciones de vida de las comunidades indígenas y campesinas.",
      imagen: "/characters/jose_manuel_pando.webp"
    }
  ]
};

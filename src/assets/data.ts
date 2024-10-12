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
  descripcion: string;
}

export interface FechasCivicas {
  [departamento: string]: FechaCivica[]
}

export const fechasCivicas: FechasCivicas = {
  "La Paz": [
    { fecha: "24 de enero", descripcion: "Fundación de la ciudad de La Paz" },
    { fecha: "2 de febrero", descripcion: "Fiesta de la Virgen de la Candelaria (Copacabana)" },
    { fecha: "16 de julio", descripcion: "Aniversario de la Revolución de La Paz" },
    { fecha: "6 de agosto", descripcion: "Día de la Independencia de Bolivia" },
    { fecha: "20 de octubre", descripcion: "Día del departamento de La Paz" },
    { fecha: "8 de diciembre", descripcion: "Fiesta de la Virgen de Copacabana" }
  ] as FechaCivica[],
  "Santa Cruz": [
    { fecha: "26 de febrero", descripcion: "Fundación de Santa Cruz de la Sierra" },
    { fecha: "21 de mayo", descripcion: "Día de la Tradición Cruceña" },
    { fecha: "17 de agosto", descripcion: "Día de la Bandera Cruceña" },
    { fecha: "14 de septiembre", descripcion: "Aniversario de la Revolución de Ñuflo de Chávez" },
    { fecha: "24 de septiembre", descripcion: "Día del departamento de Santa Cruz" },
    { fecha: "30 de noviembre", descripcion: "Día de la Cultura Guaraní" }
  ] as FechaCivica[],
  "Cochabamba": [
    { fecha: "11 de enero", descripcion: "Aniversario de la Batalla de Aroma" },
    { fecha: "27 de mayo", descripcion: "Aniversario de la Coronación de la Virgen de Urkupiña" },
    { fecha: "15 de agosto", descripcion: "Fundación de la ciudad de Cochabamba" },
    { fecha: "14 de septiembre", descripcion: "Día del departamento de Cochabamba" },
    { fecha: "21 de septiembre", descripcion: "Día de la Primavera y de la Juventud" },
    { fecha: "5 de octubre", descripcion: "Fiesta de la Virgen de la Merced" }
  ],
  "Potosí": [
    { fecha: "19 de marzo", descripcion: "Fiesta de San José (Patrono de Potosí)" },
    { fecha: "1 de abril", descripcion: "Fundación de la Villa Imperial de Potosí" },
    { fecha: "6 de agosto", descripcion: "Día de la Independencia de Bolivia" },
    { fecha: "10 de noviembre", descripcion: "Día del departamento de Potosí" },
    { fecha: "15 de noviembre", descripcion: "Día de la Revolución Nacional en Potosí" },
    { fecha: "8 de diciembre", descripcion: "Fiesta de la Virgen de la Concepción" }
  ] as FechaCivica[],
  "Chuquisaca": [
    { fecha: "15 de abril", descripcion: "Día de la Capitalía" },
    { fecha: "25 de mayo", descripcion: "Día del departamento de Chuquisaca" },
    { fecha: "25 de mayo", descripcion: "Aniversario del Primer Grito Libertario de América" },
    { fecha: "6 de agosto", descripcion: "Día de la Independencia de Bolivia" },
    { fecha: "29 de septiembre", descripcion: "Fundación de la ciudad de Sucre" },
    { fecha: "8 de diciembre", descripcion: "Fiesta de la Virgen de Guadalupe (Sucre)" }
  ] as FechaCivica[],
  "Oruro": [
    { fecha: "2 de febrero", descripcion: "Fiesta de la Virgen del Socavón (Oruro)" },
    { fecha: "Fecha móvil (febrero/marzo)", descripcion: "Carnaval de Oruro (Patrimonio Cultural de la Humanidad)" },
    { fecha: "10 de febrero", descripcion: "Día del departamento de Oruro" },
    { fecha: "10 de febrero", descripcion: "Batalla de Aroma" },
    { fecha: "6 de agosto", descripcion: "Día de la Independencia de Bolivia" },
    { fecha: "1 de noviembre", descripcion: "Fundación de la ciudad de Oruro" },
  ] as FechaCivica[],
  "Tarija": [
    { fecha: "15 de abril", descripcion: "Día del departamento de Tarija" },
    { fecha: "19 de abril", descripcion: "Aniversario de la Batalla de La Tablada" },
    { fecha: "4 de julio", descripcion: "Fundación de la ciudad de Tarija" },
    { fecha: "6 de agosto", descripcion: "Día de la Independencia de Bolivia" },
    { fecha: "15 de agosto", descripcion: "Fiesta de la Virgen de Chaguaya" },
    { fecha: "8 de diciembre", descripcion: "Fiesta de la Virgen de la Merced (Patrona de Tarija)" }
  ] as FechaCivica[],
  "Beni": [
    { fecha: "3 de febrero", descripcion: "Fundación de Trinidad" },
    { fecha: "6 de agosto", descripcion: "Día de la Independencia de Bolivia" },
    { fecha: "10 de agosto", descripcion: "Día de la Tradición Beniana" },
    { fecha: "14 de septiembre", descripcion: "Aniversario de la Revolución del Beni" },
    { fecha: "18 de noviembre", descripcion: "Día del departamento de Beni" },
    { fecha: "21 de septiembre", descripcion: "Fiesta de San Francisco de Borja (Patrono de Beni)" }
  ] as FechaCivica[],
  "Pando": [
    { fecha: "6 de agosto", descripcion: "Día de la Independencia de Bolivia" },
    { fecha: "24 de septiembre", descripcion: "Día del departamento de Pando" },
    { fecha: "11 de octubre", descripcion: "Fundación de Cobija" },
    { fecha: "11 de octubre", descripcion: "Aniversario de la Batalla de Bahía" },
    { fecha: "30 de noviembre", descripcion: "Día de la Tradición Pandina" },
    { fecha: "12 de diciembre", descripcion: "Fiesta de la Virgen de Guadalupe (Cobija)" }
  ] as FechaCivica[]
}

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

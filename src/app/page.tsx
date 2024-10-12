import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Image from "next/image"
import { ChevronRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const events = [
  { year: "c. 2000 a.C.", event: "Primeros asentamientos en Tiwanaku" },
  { year: "1538", event: "Fundación de la ciudad de La Paz" },
  { year: "1545", event: "Descubrimiento de plata en Potosí" },
  { year: "1825", event: "Declaración de Independencia de Bolivia" },
  { year: "1952", event: "Revolución Nacional y Reforma Agraria" },
  { year: "1967", event: "Muerte del Che Guevara en Bolivia" },
  { year: "1982", event: "Retorno a la democracia después de periodos dictatoriales" },
  { year: "2005", event: "Evo Morales es elegido como primer presidente indígena" },
  { year: "2006", event: "Evo Morales, primer presidente indígena" },
  { year: "2009", event: "Nueva Constitución del Estado Plurinacional" },
  { year: "2013", event: "Bolivia demanda a Chile ante la Corte Internacional de Justicia por acceso al mar" },
  { year: "2019", event: "Crisis política y renuncia de Evo Morales" },
  { year: "2020", event: "Luis Arce asume la presidencia en medio de la pandemia de COVID-19" },
  { year: "2022", event: "Censo de Población y Vivienda postergado genera tensiones regionales" },
  { year: "2024", event: "Realización del Censo Nacional de Población y Vivienda" },
  { year: "2025", event: "Bolivia celebra su bicentenario de independencia" }
]

export default function Home() {
  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start py-4 pb-6">
      <div className="container mx-auto px-4">
        <section className="text-center lg:px-40 pb-4">
          <h2 className="text-2xl lg:text-4xl font-bold text-slate-800">Un viaje por la diversidad, historia y cultura del corazón de Sudamérica</h2>
        </section>

        <Carousel className="w-full max-w-6xl mx-auto mb-6">
          <CarouselContent>
            {[
              { src: "/la-paz.webp", alt: "La Paz", caption: "La Paz - Donde el cielo toca la tierra" },
              { src: "/carnaval-oruro.jpg", alt: "Carnaval de Oruro", caption: "Carnaval de Oruro - Fiesta de fe y cultura" },
              { src: "/carousel-salar.jpg", alt: "Salar de Uyuni", caption: "Salar de Uyuni - El espejo del cielo" },
              { src: "/parque-madidi.webp", alt: "Amazonia", caption: "Parque Nacional Madidi - Biodiversidad sin límites" },
              { src: "/tiwanaku.jpeg", alt: "Tiwanaku", caption: "Tiwanaku - Cuna de una civilización milenaria" },
            ].map((item, index) => (
              <CarouselItem key={index}>
                <div className="relative h-[500px]">
                  <Image src={item.src} alt={item.alt} layout="fill" objectFit="cover" className="rounded-lg" priority quality={100} />
                  <div className="absolute bottom-0 left-0 right-0 bg-green-700 text-white p-4 rounded-b-lg">
                    <p className="text-lg font-semibold">{item.caption}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Datos Generales</CardTitle>
            <CardDescription>Información esencial sobre Bolivia</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-lg mb-2">Geografía</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Capital constitucional: Sucre</li>
                  <li>Sede de gobierno: La Paz</li>
                  <li>Superficie: 1.098.581 km²</li>
                  <li>Países limítrofes: Brasil, Paraguay, Argentina, Chile y Perú</li>
                  <li>Punto más alto: Nevado Sajama (6.542 m)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Demografía y Cultura</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Población: ~11,8 millones (2023)</li>
                  <li>Idiomas oficiales: Español y 36 lenguas indígenas</li>
                  <li>Diversidad étnica: 36 pueblos indígenas reconocidos</li>
                  <li>Moneda: Boliviano (BOB)</li>
                  <li>Religión mayoritaria: Catolicismo</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
        <Tabs defaultValue="geografia" className="w-full mt-6">
          <TabsList className="grid w-full h-full grid-cols-1 shrink-0 md:grid-cols-5 mb-4">
            <TabsTrigger value="geografia">Geografía</TabsTrigger>
            <TabsTrigger value="cultura">Cultura</TabsTrigger>
            <TabsTrigger value="turismo">Turismo</TabsTrigger>
            <TabsTrigger value="history">Historia</TabsTrigger>
            <TabsTrigger value="simbolos">Símbolos Patrios</TabsTrigger>
          </TabsList>
          <TabsContent value="history">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Historia de Bolivia</CardTitle>
                <CardDescription>Un recorrido por los momentos clave del país andino</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="relative">
                  <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary"></div>
                  {events.map((item, index) => (
                    <div key={index} className="relative flex items-center mb-8 md:mb-12">
                      <div className="hidden md:block w-1/2 pr-8 text-right">
                        {index % 2 === 0 && (
                          <>
                            <Badge variant="outline" className="mb-2">{item.year}</Badge>
                            <p className="text-sm md:text-base">{item.event}</p>
                          </>
                        )}
                      </div>
                      <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-primary rounded-full z-10"></div>
                      <div className="md:w-1/2 pl-12 md:pl-8">
                        {index % 2 !== 0 && (
                          <>
                            <Badge variant="outline" className="mb-2 md:hidden">{item.year}</Badge>
                            <p className="text-sm md:text-base md:hidden">{item.event}</p>
                          </>
                        )}
                        {index % 2 === 0 && (
                          <>
                            <Badge variant="outline" className="mb-2 md:hidden">{item.year}</Badge>
                            <p className="text-sm md:text-base md:hidden">{item.event}</p>
                          </>
                        )}
                        {index % 2 !== 0 && (
                          <>
                            <Badge variant="outline" className="mb-2 hidden md:inline-flex">{item.year}</Badge>
                            <p className="text-sm md:text-base hidden md:block">{item.event}</p>
                          </>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="geografia">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Geografía y Biodiversidad de Bolivia</CardTitle>
                <CardDescription>Un país de contrastes naturales</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Regiones Geográficas</h3>
                    <ul className="list-disc list-inside space-y-2">
                      <li><strong>Cordillera de los Andes:</strong> Hogar del Salar de Uyuni y picos nevados.</li>
                      <li><strong>Amazonía:</strong> Bosques tropicales con inmensa biodiversidad.</li>
                      <li><strong>Chaco:</strong> Extensas llanuras y bosques secos.</li>
                      <li><strong>Altiplano:</strong> Meseta alta que incluye el Lago Titicaca.</li>
                      <li><strong>Valles:</strong> Zonas templadas entre montañas y tierras bajas.</li>
                      <li><strong>Yungas:</strong> Bosques nublados en las laderas de los Andes.</li>
                      <li><strong>Chiquitanía:</strong> Sabana tropical en el este del país.</li>
                      <li><strong>Pantanal:</strong> Humedales compartidos con Brasil y Paraguay.</li>
                      <li><strong>Gran Chaco:</strong> Ecosistema de bosques secos y sabanas.</li>
                      <li><strong>Región Amazónica:</strong> Selva tropical en el norte de Bolivia.</li>
                    </ul>
                  </div>
                  <div>
                    <Image src="/areas-protegidas.jpg" alt="Mapa de regiones de Bolivia" width={400} height={300} className="rounded-lg" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Biodiversidad</h3>
                  <p>Bolivia es uno de los 17 países megadiversos del mundo, albergando una variedad impresionante de ecosistemas y especies:</p>
                  <ul className="list-disc list-inside space-y-1 mt-2">
                    <li>Más de 14,000 especies de plantas</li>
                    <li>Más de 1,400 especies de aves</li>
                    <li>Más de 300 especies de mamíferos</li>
                    <li>Más de 200 especies de anfibios</li>
                  </ul>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Image src="/amazonia.jpg" alt="Biodiversidad en la Amazonía" width={300} height={200} className="w-full rounded-lg object-contain aspect-square" />
                  <Image src="/condor-andino.jpg" alt="Cóndor andino" width={300} height={200} className="rounded-lg w-full h-full object-cover aspect-square" />
                  <Image src="/flora-altiplano-boliviano.jpg" alt="Flora del Altiplano" width={300} height={200} className="w-full rounded-lg object-cover aspect-square" />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="cultura">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Cultura y Tradiciones de Bolivia</CardTitle>
                <CardDescription>Un mosaico de diversidad cultural</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Festivales y Celebraciones</h3>
                    <ul className="list-disc list-inside space-y-2">
                      <li><strong>Carnaval de Oruro:</strong> Patrimonio Cultural de la Humanidad por la UNESCO.</li>
                      <li><strong>Entrada del Gran Poder:</strong> Festividad folclórica y religiosa en La Paz.</li>
                      <li><strong>Alasitas:</strong> Feria de miniaturas en honor al Ekeko, dios de la abundancia.</li>
                      <li><strong>Año Nuevo Aymara:</strong> Celebración del solsticio de invierno en Tiwanaku.</li>
                      <li><strong>Corpus Christi:</strong> Procesiones y danzas en honor al Cuerpo de Cristo.</li>
                      <li><strong>Diablada:</strong> Danza tradicional de la región del Altiplano.</li>
                      <li><strong>Morenada:</strong> Danza folclórica de origen minero en Oruro.</li>
                    </ul>
                  </div>
                  <div>
                    <Image src="/carnaval-oruro-2024.jpg" alt="Carnaval de Oruro" width={400} height={300} className="rounded-lg w-full h-[90%] aspect-video object-cover" quality={100} />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Gastronomía Boliviana</h3>
                    <p>La cocina boliviana es tan diversa como su geografía y cultura:</p>
                    <ul className="list-disc list-inside space-y-1 mt-2">
                      <li><strong>Salteña:</strong> Empanada jugosa rellena de carne o pollo.</li>
                      <li><strong>Pique Macho:</strong> Plato abundante de carne, papas fritas y huevos.</li>
                      <li><strong>Charque:</strong> Carne seca tradicional del altiplano.</li>
                      <li><strong>Quinoa:</strong> Grano andino de alto valor nutritivo.</li>
                      <li><strong>Chicha:</strong> Bebida fermentada de maíz.</li>
                    </ul>
                  </div>
                  <div>
                    <Image src="/platos.jpg" alt="Platos típicos bolivianos" width={300} height={200} className="rounded-lg w-full h-[90%] aspect-video object-cover" quality={100} />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Artesanía y Textiles</h3>
                    <p>Bolivia es famosa por su rica tradición en artesanía y textiles:</p>
                    <ul className="list-disc list-inside space-y-1 mt-2">
                      <li>Tejidos andinos con diseños geométricos y coloridos.</li>
                      <li>Cerámica inspirada en culturas precolombinas.</li>
                      <li>Joyería de plata, especialmente de la región de Potosí.</li>
                      <li>Tallado en madera, destacando las máscaras del oriente boliviano.</li>
                    </ul>
                  </div>
                  <div>
                    <Image src="/textil.jpg" alt="Textiles andinos" width={300} height={200} className="rounded-lg w-full h-[90%] aspect-video object-cover" quality={100} />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="turismo">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Descubre los Tesoros de Bolivia</CardTitle>
                <CardDescription>Experiencias únicas para el viajero aventurero</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Destinos Imperdibles</h3>
                    <ul className="space-y-4">
                      <li>
                        <strong className="text-primary">Salar de Uyuni</strong>
                        <p>El desierto de sal más grande del mundo, un espejo infinito que desafía la percepción.</p>
                      </li>
                      <li>
                        <strong className="text-primary">Lago Titicaca</strong>
                        <p>El lago navegable más alto del mundo, hogar de las islas flotantes de los Uros.</p>
                      </li>
                      <li>
                        <strong className="text-primary">Parque Nacional Madidi</strong>
                        <p>Uno de los lugares más biodiversos del planeta, paraíso para los amantes de la naturaleza.</p>
                      </li>
                      <li>
                        <strong className="text-primary">Ruta del Che</strong>
                        <p>Recorrido histórico por los pasos del Che Guevara en Bolivia.</p>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <Image src="/salar.jpg" alt="Salar de Uyuni" width={400} height={300} className="rounded-lg w-full aspect-video object-cover" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Image src="/lago.jpg" alt="Lago Titicaca" width={400} height={300} className="rounded-lg w-full aspect-video object-cover" />
                  <Image src="/madidi.jpg" alt="Lago Titicaca" width={400} height={300} className="rounded-lg w-full aspect-video object-cover" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Aventuras y Experiencias</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card>
                      <CardHeader>
                        <CardTitle>Ciclismo en el Camino de la Muerte</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>Desafía tus límites en la ruta de descenso más peligrosa del mundo.</p>
                        <Image src="/camino.jpg" alt="Ciclismo en el Camino de la Muerte" width={300} height={200} className="rounded-lg mt-2 w-full h-full" />
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle>Exploración de la Mina de Potosí</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>Adéntrate en las entrañas del Cerro Rico y descubre su historia.</p>
                        <Image src="/minas.jpeg" alt="Mina de Potosí" width={300} height={200} className="rounded-lg mt-2 w-full h-full" />
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle>Trekking en la Cordillera Real</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>Camina entre picos nevados y lagos de altura en los Andes bolivianos.</p>
                        <Image src="/cordillera.webp" alt="Cordillera Real" width={300} height={200} className="rounded-lg mt-2 w-full h-full" />
                      </CardContent>
                    </Card>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Ciudades para Explorar</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold">La Paz</h4>
                      <p>Capital administrativa y ciudad más alta del mundo, mezcla de modernidad y tradición andina.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Santa Cruz de la Sierra</h4>
                      <p>Centro económico del país, puerta de entrada a la Amazonía boliviana.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Sucre</h4>
                      <p>Capital constitucional, conocida como la {'"'}Ciudad Blanca{'"'} por su arquitectura colonial.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Cochabamba</h4>
                      <p>Ciudad de clima templado, famosa por su gastronomía y el Cristo de la Concordia.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-green-700 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2 text-white">Consejos para Viajeros</h3>
                  <ul className="list-disc list-inside space-y-1 text-white">
                    <li>Aclimatarse gradualmente a la altura, especialmente en La Paz y el Altiplano.</li>
                    <li>Respetar las costumbres locales y pedir permiso antes de fotografiar a personas.</li>
                    <li>Probar la variada gastronomía local, pero con precaución para evitar problemas estomacales.</li>
                    <li>Llevar ropa adecuada para diferentes climas, desde el frío del Altiplano hasta el calor tropical.</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="simbolos">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Símbolos Patrios de Bolivia</CardTitle>
                <CardDescription>Los emblemas nacionales que representan la identidad boliviana</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Bandera de Bolivia</h3>
                    <p>La bandera de Bolivia está compuesta por tres franjas horizontales de igual tamaño: rojo, amarillo y verde. El rojo simboliza la sangre derramada por los héroes, el amarillo representa la riqueza mineral del país, y el verde la riqueza natural y la esperanza.</p>
                  </div>
                  <div>
                    <Image src="/bandera.webp" alt="Bandera de Bolivia" width={300} height={300} className="rounded-lg object-cover aspect-square " />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Escudo de Bolivia</h3>
                    <p>El escudo de armas de Bolivia es un emblema complejo que incluye una representación del Cerro Rico de Potosí, un cóndor andino, y varios elementos que simbolizan la riqueza natural y la historia del país.</p>
                  </div>
                  <div>
                    <Image src="/escudo.webp" alt="Escudo de Bolivia" width={300} height={300} className="rounded-lg object-cover aspect-square " />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Flor Nacional: La Kantuta</h3>
                    <p>La kantuta es una flor nativa de los Andes y es uno de los símbolos patrios de Bolivia. Sus colores rojo, amarillo y verde coinciden con los de la bandera nacional.</p>
                  </div>
                  <div>
                    <Image src="/kantuta.webp" alt="Flor Kantuta" width={300} height={300} className="rounded-lg object-cover aspect-square " />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Himno Nacional</h3>
                    <p>El Himno Nacional de Bolivia fue compuesto por José Ignacio de Sanjinés (letra) y Benedetto Vincenti (música). Es entonado en actos oficiales y días de celebración patria, especialmente el 6 de agosto, Día de la Independencia.</p>
                  </div>
                  <div>
                    <Image src="/himno.webp" alt="Himno Nacional de Bolivia" width={300} height={300} className="rounded-lg object-cover aspect-square " />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Escarapela Nacional</h3>
                    <p>La escarapela de Bolivia es un símbolo patrio que se utiliza en ocasiones especiales y actos cívicos. Está compuesta por los colores de la bandera nacional.</p>
                  </div>
                  <div>
                    <Image src="/escarapela.png" alt="Escarapela de Bolivia" width={300} height={300} className="rounded-lg object-cover aspect-square " />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Wiphala</h3>
                    <p>La wiphala es una bandera cuadrada compuesta por siete colores que representa a los pueblos indígenas de los Andes. Es un símbolo de unidad y diversidad cultural en Bolivia y otros países andinos.</p>
                  </div>
                  <div>
                    <Image src="/wiphala.jpg" alt="Wiphala" width={300} height={300} className="rounded-lg object-cover aspect-square " />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <section className="space-y-4 my-6 text-slate-800">
          <h2 className="text-3xl font-bold text-center">Explora Más de Bolivia</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: "Fechas Cívicas", description: "Descubre las celebraciones más importantes de Bolivia", image: "/fechas-civicas.webp", to: '/fechas-civicas-de-bolivia' },
              { title: "Mitos y Leyendas", description: "Sumérgete en las historias que dan vida a la cultura boliviana", image: "/mitos-leyendas.webp", to: '/mitos-leyendas-de-bolivia' },
              { title: "Personajes Históricos", description: "Conoce a las figuras que moldearon la historia de Bolivia", image: "/personajes.webp", to: '/personajes-de-bolivia' }
            ].map((item, index) => (
              <Card key={index} className="overflow-hidden relative justify-between">
                <Image src={item.image} alt={item.title} width={200} height={200} className="w-full h-fit object-cover shrink-0 relative" />
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href={item.to} className="w-full bg-green-700 flex flex-row items-center text-white px-4 py-2 rounded-lg text-center justify-between hover:bg-green-800">
                    Descubrir <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Card className="bg-green-700 text-white">
          <CardHeader>
            <CardTitle className="text-2xl">¿Sabías que...?</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Bolivia es uno de los países con mayor diversidad étnica y lingüística de América del Sur, reconociendo oficialmente 36 pueblos indígenas en su Constitución de 2009. Esta riqueza cultural se refleja en sus tradiciones, idiomas y formas de vida, haciendo de Bolivia un verdadero mosaico de culturas.</p>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}

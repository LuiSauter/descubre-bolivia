'use client';
import Link from "next/link"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"
import { Button } from "./ui/button"
import Image from "next/image"
import { Search, X } from "lucide-react"
import { Input } from "./ui/input"
import { useState } from "react"
import useSearchData from "@/hook/useSearchData"
import { fechasCivicas, mitosLeyendas, PersonajeRelevante } from "@/assets/data";

const Header = (): JSX.Element => {
  const [searchTerm] = useState('');
  const { query, setQuery, filteredData } = useSearchData(searchTerm, mitosLeyendas, fechasCivicas);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  return (
    <header className="flex flex-row justify-between w-full gap-2 py-4 px-4 lg:px-6 sticky top-0 z-50 bg-white border-b">
      <h1 className="text-center px-4 font-bold flex items-center ">
        <Link href="/" className="flex flex-row items-center gap-2">
          <Image src="/bolivia.png" alt="Descubre Bolivia" width={30} height={30} className="rounded-md" />
          <span>Descubre Bolivia</span>
        </Link>
      </h1>
      <div className="w-full hidden sm:flex max-w-64">
        <form className="w-full">
          <div className="relative w-full">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="text" value={query} onChange={handleSearchChange} className="w-full appearance-none bg-background pl-8 shadow-none" />
            <X className="absolute right-2.5 top-2.5 h-4 w-4 text-muted-foreground cursor-pointer" onClick={() => setQuery("")} />
            {query.length > 0 && (
              <div className="absolute bg-white p-4 rounded-lg shadow-2xl z-10 max-h-[50vh] overflow-y-auto w-[50vw] border mt-2">
                <div>
                  {Object.keys(filteredData.personajes).length === 0 ? (
                    <p>No se encontraron personajes.</p>
                  ) : (
                    Object.keys(filteredData.personajes).map((region) => (
                      <div key={region}>
                        <h3 className="">{region}</h3>
                        <ul>
                          {filteredData.personajes[region].map((item: PersonajeRelevante, index: number) => (
                            <li key={index}>
                              <Link href={`/personajes-de-bolivia?region=${region}#${item.nombre}`} className="hover:bg-green-100 px-4 py-2 w-full flex flex-col">
                                <strong>{item.nombre}</strong>
                                <div>{item.descripcion.length > 100 ? item.descripcion.substring(0, 100) + "..." : item.descripcion}</div>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))
                  )}
                </div>

                <div className="border-t pt-2">
                  {Object.keys(filteredData.fechasCivicas).length === 0 ? (
                    <p>No se encontraron fechas cívicas.</p>
                  ) : (
                    Object.keys(filteredData.fechasCivicas).map((region) => (
                      <div key={region}>
                        <h3>{region}</h3>
                        <ul>
                          {filteredData.fechasCivicas[region].map((item, index) => (
                            <li key={index}>
                              <Link href={`/fechas-civicas-de-bolivia?region=${region}#${item.titulo}`} className="hover:bg-green-100 px-4 py-2 w-full flex flex-col">
                                <strong>{item.fecha}</strong>
                                <div>{item.descripcion}</div>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))
                  )}
                </div>
              </div>
            )}
          </div>
        </form>
      </div>
      <ul className="hidden md:flex flex-row gap-6 justify-center px-4 items-center">
        <li>
          <Link href="/">Inicio</Link>
        </li>
        <li>
          <Link href="/fechas-civicas-de-bolivia">Fechas cívicas</Link>
        </li>
        {/* <li>
          <Link href="/mitos-leyendas-de-bolivia">Leyendas y Mitos</Link>
        </li> */}
        <li>
          <Link href="/personajes-de-bolivia">Personajes</Link>
        </li>
      </ul>

      <Sheet>
        <SheetTrigger asChild>
          <Button className="md:hidden" variant="outline">
            Menu
          </Button>
        </SheetTrigger>
        <SheetContent className="md:hidden">
          <ul className="md:flex flex-col gap-8 px-4 text-slate-800 pt-6">
            <li className="px-4 py-2 hover:bg-green-700/20 rounded-md">
              <Link href="/">Inicio</Link>
            </li>
            <li className="px-4 py-2 hover:bg-green-700/20 rounded-md">
              <Link href="/fechas-civicas-de-bolivia">Fechas cívicas</Link>
            </li>
            {/* <li className="px-4 py-2 hover:bg-green-700/20 rounded-md">
              <Link href="/mitos-leyendas-de-bolivia">Leyendas y Mitos</Link>
            </li> */}
            <li className="px-4 py-2 hover:bg-green-700/20 rounded-md">
              <Link href="/personajes-de-bolivia">Personajes</Link>
            </li>
          </ul>
        </SheetContent>
      </Sheet>
    </header>
  );
}

export default Header
"use client";
import { useCallback, useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { departamentosArr, personajesRelevantes } from "@/assets/data";
import { usePathname, useRouter } from "next/navigation";

export default function PersonajesRelevantesPage({ searchParams }: { searchParams: { region: string } }) {
  const router = useRouter();
  const pathname = usePathname();
  const [departamentoSeleccionado, setDepartamentoSeleccionado] = useState(searchParams?.region || "Santa Cruz");

  useEffect(() => {
    if (searchParams?.region) {
      setDepartamentoSeleccionado(searchParams.region || "Santa Cruz");
    }
  }, [searchParams]);

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-slate-800 text-center mb-2">Personajes Relevantes de Bolivia</h1>
      <p className="text-center mb-6">Conoce a los héroes y figuras más importantes de cada departamento</p>
      <div className="grid grid-cols-1 md:grid-cols-[350px_1fr] gap-6">
        <Card className="h-fit">
          <CardHeader>
            <CardTitle>Selecciona un Departamento</CardTitle>
            <CardDescription>Elige un departamento para ver sus personajes relevantes</CardDescription>
          </CardHeader>
          <CardContent>
            <Select
              onValueChange={(value) => {
                setDepartamentoSeleccionado(value);
                router.push(`${pathname}?${createQueryString("region", value)}`);
              }}
              defaultValue={searchParams.region || departamentoSeleccionado}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Selecciona un departamento" />
              </SelectTrigger>
              <SelectContent>
                {departamentosArr.map((depto) => (
                  <SelectItem key={depto} value={depto}>
                    {depto}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </CardContent>
        </Card>

        <div className="flex flex-col gap-6">
          {personajesRelevantes[searchParams?.region || departamentoSeleccionado]?.map((personaje, index) => (
            <Card key={index} id={personaje.nombre} className="grid grid-cols-1 md:grid-cols-2 overflow-hidden">
              <CardHeader className="pb-0 mb-2">
                <CardTitle className="">
                  <Badge variant="default" className="mb-2">
                    Personaje
                  </Badge>
                  <div className="font-semibold text-lg mb-1">{personaje.nombre}</div>
                </CardTitle>
                <CardDescription>{personaje.descripcion}</CardDescription>
              </CardHeader>
              <CardContent className="p-0 m-0">{/* Puedes añadir una imagen relevante del personaje si tienes */}</CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

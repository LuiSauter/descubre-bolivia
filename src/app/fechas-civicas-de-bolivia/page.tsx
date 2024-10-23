'use client';
import { useCallback, useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { departamentos, fechasCivicas } from "@/assets/data";

export default function Fechas({ searchParams }: {
  searchParams: { region: string }
}) {
  const router = useRouter()
  const pathname = usePathname()
  const [departamentoSeleccionado, setDepartamentoSeleccionado] = useState(searchParams.region || "Santa Cruz");
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, value)
      return params.toString()
    },
    [searchParams]
  )

  useEffect(() => {
    if (searchParams?.region) {
      console.log(searchParams.region)
      setDepartamentoSeleccionado(searchParams?.region || "Santa Cruz");
    }
  }, [searchParams]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-slate-800 text-center mb-6">Fechas Cívicas de Bolivia</h1>
      <div className="grid grid-cols-1 md:grid-cols-[350px_1fr] gap-6">
        <Card className="h-fit">
          <CardHeader>
            <CardTitle>Selecciona un Departamento</CardTitle>
            <CardDescription>Elige un departamento para ver sus fechas cívicas</CardDescription>
          </CardHeader>
          <CardContent>
            <Select
              onValueChange={(value) => {
                setDepartamentoSeleccionado(value);
                router.push(`${pathname}?${createQueryString("region", value)}`);
              }}
              defaultValue={departamentoSeleccionado}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Selecciona un departamento" />
              </SelectTrigger>
              <SelectContent>
                {departamentos.map((depto) => (
                  <SelectItem key={depto.nombre} value={depto.nombre}>
                    {depto.nombre}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Fechas Cívicas de {departamentoSeleccionado}</CardTitle>
            <CardDescription>Listado de fechas importantes</CardDescription>
          </CardHeader>
          <CardContent>
            {fechasCivicas[departamentoSeleccionado]?.length ? (
              fechasCivicas[departamentoSeleccionado].map((fecha, index: number) => (
                <div id={fecha.titulo} key={index} className="mb-4 p-4 bg-secondary rounded-lg">
                  <div className="flex flex-row gap-2 items-center text-slate-800">
                    <Calendar size={24} className="mb-2" />
                    <Badge variant={fecha.fecha === 'Movible' ? "secondary" : "default"} className="mb-2">
                      {fecha.fecha}
                    </Badge>
                  </div>
                  <h3 className="font-bold text-slate-800">{fecha.titulo}</h3>
                  <p>{fecha.descripcion}</p>
                </div>
              ))
            ) : (
              <p>No se encontraron fechas cívicas para {departamentoSeleccionado}.</p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
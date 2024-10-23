import { FechasCivicas, MitosLeyendas, personajesRelevantes, PersonajesRelevantes } from '@/assets/data';
import { useState, useMemo } from 'react';

// Hook para buscar en mitos, leyendas, y fechas cívicas
const useSearchData = (
  searchTerm: string = '',
  mitosLeyendas: MitosLeyendas,
  fechasCivicas: FechasCivicas
) => {
  const [query, setQuery] = useState<string>(searchTerm || '');

  const filteredData = useMemo(() => {
    const lowercasedQuery = query.toLowerCase();

    const filterPersonajes = (): PersonajesRelevantes => {
      return Object.keys(personajesRelevantes).reduce((acc: PersonajesRelevantes, region: string) => {
        const filteredItems = personajesRelevantes[region].filter(item =>
          item.nombre.toLowerCase().includes(lowercasedQuery) ||
          item.descripcion.toLowerCase().includes(lowercasedQuery)
        );
        if (filteredItems.length > 0) {
          acc[region] = filteredItems;
        }
        return acc;
      }, {});
    };

    const filterFechasCivicas = (): FechasCivicas => {
      return Object.keys(fechasCivicas).reduce((acc: FechasCivicas, region: string) => {
        const filteredItems = fechasCivicas[region].filter(item =>
          item.fecha.toLowerCase().includes(lowercasedQuery) ||
          item.descripcion.toLowerCase().includes(lowercasedQuery)
        );
        if (filteredItems.length > 0) {
          acc[region] = filteredItems;
        }
        return acc;
      }, {});
    };

    return {
      personajes: filterPersonajes(),
      fechasCivicas: filterFechasCivicas()
    };
  }, [query, fechasCivicas]);

  return {
    query,
    setQuery,
    filteredData: filteredData
  };
};

export default useSearchData;

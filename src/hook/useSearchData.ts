import { FechasCivicas, MitosLeyendas } from '@/assets/data';
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

    const filterMitosLeyendas = (): MitosLeyendas => {
      return Object.keys(mitosLeyendas).reduce((acc: MitosLeyendas, region: string) => {
        const filteredItems = mitosLeyendas[region].filter(item =>
          item.titulo.toLowerCase().includes(lowercasedQuery) ||
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
      mitosLeyendas: filterMitosLeyendas(),
      fechasCivicas: filterFechasCivicas()
    };
  }, [query, mitosLeyendas, fechasCivicas]);

  return {
    query,
    setQuery,
    filteredData: filteredData
  };
};

export default useSearchData;

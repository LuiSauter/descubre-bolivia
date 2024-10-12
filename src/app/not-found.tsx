import Link from 'next/link'

export default function NotFound() {
  return (
    <div className='grid place-content-center place-items-center min-h-[calc(100vh-126px)]'>
      <h2>
        Página no encontrada
      </h2>
      <p>
        No se pudo encontrar el recurso solicitado en la URL
      </p>
      <Link href="/" className='text-green-700'>
        Volver a la página de inicio
      </Link>
    </div>
  )
}

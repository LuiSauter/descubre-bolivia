import Link from "next/link"

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center gap-4 lg:flex-row lg:justify-between p-4 md:px-12">
      <div className="flex flex-row gap-2 items-center">
        &copy; {new Date().getFullYear()}
        <Link href="/" className="hover:underline hover:text-green-700">
          Descubre Bolivia
        </Link>
      </div>
      <div>
        Desarrollado por <a href="https://sauterdev.vercel.app/" target="_blank" rel="noopener noreferrer" className="">Sauterdev</a>
      </div>
    </footer>
  )
}

export default Footer
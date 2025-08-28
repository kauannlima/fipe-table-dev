import { useRouter, Link } from "@tanstack/react-router";

export default function Header() {
  const router = useRouter();
  if (!router) return null; // evita erro

  const linkClasses =
    "px-3 py-2 rounded-md hover:bg-primary-foreground hover:text-primary transition";

  return (
    <header className="bg-primary text-primary-foreground dark:bg-primary-foreground dark:text-primary p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="cursor-pointer">
          <h1 className="text-2xl font-bold">FIPE Table</h1>
        </Link>

        <nav className="flex gap-2 md:gap-4">
          <Link to="/carro" className={linkClasses}>
            Carros
          </Link>
          <Link to="/moto" className={linkClasses}>
            Motos
          </Link>
          <Link to="/caminhao" className={linkClasses}>
            Caminhões
          </Link>
          <Link to="/about" className={linkClasses}>
            Sobre
          </Link>
        </nav>
      </div>
    </header>
  );
}

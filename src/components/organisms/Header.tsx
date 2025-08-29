import { useRouter, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  if (!router) return null;

  const linkClasses =
    "px-3 py-2 rounded-md hover:bg-primary-foreground transition";

  const links = [
    { label: "Carros", to: "/carro", color: "hover:text-blue-500" },
    { label: "Motos", to: "/moto", color: "hover:text-green-500" },
    { label: "Caminhões", to: "/caminhao", color: "hover:text-red-500" },
    { label: "Sobre", to: "/about", color: "hover:text-primary" },
  ];

  return (
    <header className="bg-primary text-primary-foreground dark:bg-primary-foreground dark:text-primary p-4 shadow-md fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="cursor-pointer">
          <h1 className="text-2xl font-bold">FIPE Table</h1>
        </Link>

        <nav className="hidden md:flex gap-2 md:gap-4">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`${linkClasses} ${link.color}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="md:hidden bg-primary text-primary-foreground dark:bg-primary-foreground dark:text-primary p-4 flex flex-col gap-2">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`${linkClasses} ${link.color}`}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 p-6 mt-8 shadow-inner">
      <div className="container mx-auto flex flex-col md:flex-row justify-center md:justify-between items-center gap-2 md:gap-4 text-center md:text-left">
        <span className="text-sm md:text-base">
          © {new Date().getFullYear()} FIPE Table. Todos os direitos reservados.
        </span>
        <a
          href="https://github.com/kauannlima/fipe-table-dev"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm md:text-base"
        >
          Repositório GitHub
        </a>
      </div>
    </footer>
  );
}

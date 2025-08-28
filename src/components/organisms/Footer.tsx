import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 p-6 mt-8 shadow-inner">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <span>© {new Date().getFullYear()} FIPE Table. Todos os direitos reservados.</span>
        <a
          href="https://github.com/kauannlima/fipe-table-dev"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline transition-colors"
        >
          Repositório GitHub
        </a>
      </div>
    </footer>
  );
}

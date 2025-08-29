const AboutPage = () => (
  <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
    <h1 className="text-2xl font-bold mb-4">Sobre o Projeto</h1>
    <p className="mb-4">
      O <strong>FIPE Table</strong> é um projeto que permite consultar preços médios de veículos — carros, motos e caminhões — de forma rápida e prática, utilizando a tabela FIPE oficial.
    </p>
    <p className="mb-4">
      Os dados são obtidos através da API pública da FIPE (<a 
        href="https://deividfortuna.github.io/fipe/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline"
      >API FIPE</a>), garantindo informações atualizadas sobre marcas, modelos e valores médios dos veículos.
    </p>
    <p>
      Veja o código-fonte do projeto no GitHub:{" "}
      <a
        href="https://github.com/kauannlima"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline"
      >
        Meu Repositório
      </a>
    </p>
  </div>
)

export default AboutPage

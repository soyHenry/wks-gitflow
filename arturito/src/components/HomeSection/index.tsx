const Button = ({ text, href }: { text: string; href: string }) => (
  <a className="mx-auto" href={href} target="_blank" rel="noreferrer">
    <div className="inline-block px-4 py-2 rounded-lg text-white bg-blue-500">
      {text}
    </div>
  </a>
);

const HomeSection = () => (
  <div className="p-3 space-y-3">
    <p className="text-lg">¡Elegí una sección!</p>
    <Button text="Documentación" href="https://www.swapi.it/documentation" />

    <div>
      <button className="p-3 bg-yellow-100 text-black rounded-lg">
        Hecho con amor por Henrys
      </button>
    </div>
  </div>
);

export default HomeSection;

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
      <a
        className="p-3 bg-yellow-100 text-black rounded-lg"
        href="https://www.soyhenry.com"
      >
        Hecho con amor por Henrys
      </a>
    </div>
  </div>
);

export default HomeSection;

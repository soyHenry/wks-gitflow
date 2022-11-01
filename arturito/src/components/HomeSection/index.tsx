const Button = ({ text, href }: { text: string; href: string }) => (
  <a className="mx-auto" href={href} target="_blank" rel="noreferrer">
    <div className="inline-block px-4 py-2 rounded-lg text-white bg-blue-500">
      {text}
    </div>
  </a>
);

 /*hO,A QUE TAL ESTOI ES UN COMENTARIO DE PRUEBA ASHJDASHD  asdkuasghbdjkhsdbgliajbdfp bhasdñouahs`fi*/

const HomeSection = () => (
  <div className="p-3 space-y-3">
    <p className="text-lg">¡Elegí una sección!</p> 
   
    <Button text="Documentación" href="https://www.swapi.it/documentation" />
  </div>
);

export default HomeSection;

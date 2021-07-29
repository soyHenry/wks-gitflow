const Button = ({ text }: { text: string }) => (
  <a className="mx-auto" href="/">
    <div className="inline-block px-4 py-2 rounded-lg text-white bg-blue-500">
      {text}
    </div>
  </a>
);

const HomeSection = () => <p className="p-3 text-lg">¡Elegí una sección!</p>;

export default HomeSection;

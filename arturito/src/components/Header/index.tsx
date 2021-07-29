const Header = () => (
  <header className="h-20 w-full px-8 bg-gray-700 flex flex-row justify-around items-center">
    <div className="h-20 flex flex-1 flex-row items-center space-x-8">
      <img
        className="object-contain h-2/5"
        src="https://assets.soyhenry.com/henry-landing/assets/Henry/logo-white.png"
        alt="Henry logo"
      />
      <p className="my-0 font-serif text-gray-200 text-4xl">Arturito</p>
    </div>
    <img
      className="object-contain h-3/5"
      src="https://img.icons8.com/plasticine/2x/fa314a/death-star.png"
      alt="Death star"
    />
  </header>
);

export default Header;

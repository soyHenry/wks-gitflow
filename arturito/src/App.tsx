import Header from './components/Header';
import MainContainer from './containers/Main';
import Boton from './components/Boton/Botton';

const App = () => (
  <div className="h-full w-full bg-gray-800 text-white">
    <Header />

    <MainContainer />
    <Boton/>
  </div>
);

export default App;

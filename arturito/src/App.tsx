import Header from './components/Header';
import MainContainer from './containers/Main';
import Home from './components/Home';

const App = () => (
  <div className="h-full w-full bg-gray-800 text-white">
    <Header />
    <Home />
    <MainContainer />
  </div>
);

export default App;

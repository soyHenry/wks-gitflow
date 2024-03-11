import Header from './components/Header';
import MainContainer from './containers/Main';
import { Sebastian } from './components/Sebastian/Sebastian';

const App = () => (
  <div className="h-full w-full bg-gray-800 text-white">
    <Header />
    <Sebastian />

    <MainContainer />
  </div>
);

export default App;

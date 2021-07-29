import Header from './components/Header';
import MainContainer from './containers/Main';

const App = () => (
  <div className="h-full w-full bg-gray-800 text-white">
    <Header />
    <h1>Data</h1>
    <MainContainer />
  </div>
);

export default App;

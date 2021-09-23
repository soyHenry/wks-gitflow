import { Switch, Route, useLocation } from 'react-router-dom';

import { paths } from '../paths';
import SectionSelector from '../../components/SectionSelector';
import Home from '../../components/HomeSection';
import Planets from '../../components/PlanetsSection';

const MainContainer = () => {
  const location = useLocation();
  const pathName = Object.keys(paths).find(
    (pathName) => paths[pathName].href === location.pathname
  );

  const Title = () => (
    <h2 className="px-2 font-serif font-bold text-4xl">
      {pathName ? paths[pathName].name : 'Where are we...?'}
    </h2>
  );

  return (
    <div className="container p-4 space-y-4">
      <SectionSelector />

      <Title />

      <Switch>
        <Route path={paths.planets.href}>
          <Planets />
        </Route>

        <Route path={paths.starships.href}>
          <div className="p-3">
            <p className="font-bold text-xl"># TODO</p>
            <p>
              Agregar tabla con las starships sacadas de la API. Mostrar para
              cada starship: name, model, manufacturer, passengers, cantidad de
              films. Codear en un componente aparte tal como {'<Planets>'}.
            </p>
            <p>
              <a href="https://swapi.it/documentation#starships">
                https://swapi.it/documentation#starships
              </a>
            </p>
          </div>
        </Route>

        <Route path={paths.people.href}>
          <div className="p-3">
            <p className="font-bold text-xl"># TODO</p>
            <p>
              Agregar tabla con los personajes sacados de la API. Mostrar para
              cada persona: name, birth_year, height (en metros), cantidad de
              films. Codear en un componente aparte tal como {'<Planets>'}.
            </p>
            <p>
              <a href="https://swapi.it/documentation#people">
                https://swapi.it/documentation#people
              </a>
            </p>
          </div>
        </Route>

        <Route path={paths.home.href}>
          <Home />
        </Route>
      </Switch>
    </div>
  );
};

export default MainContainer;

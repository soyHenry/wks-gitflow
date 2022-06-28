import { Switch, Route, useLocation } from 'react-router-dom';

import { paths } from '../paths';
import SectionSelector from '../../components/SectionSelector';
import Home from '../../components/HomeSection';
import Planets from '../../components/PlanetsSection';
import Starships from '../../components/StarshipSection';
import People from '../../components/PeopleSection';
import Species from '../../components/SpeciesSection';

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
          <Starships />
        </Route>

        <Route path={paths.people.href}>
          <People />
        </Route>
        <Route path={paths.species.href}>
          <Species />
        </Route>

        <Route path={paths.home.href}>
          <Home />
        </Route>
      </Switch>
    </div>
  );
};

export default MainContainer;

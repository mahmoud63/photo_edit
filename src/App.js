import React, {Suspense} from 'react';
import { Switch } from 'react-router';
import { Route } from 'react-router-dom';
import Loadable from 'react-loadable';
import 'bootstrap/dist/css/bootstrap.min.css';
import Loader from './components/loader';

const Home = Loadable({
  loader: () => import('./pages/Home'),
  loading: Loader
});

const Gallery = Loadable({
  loader: () => import('./pages/Gallery'),
  loading: Loader
});

const Edit = Loadable({
  loader: () => import('./pages/Edit'),
  loading: Loader
});

function App() {
  return (
    <Suspense fallback={<Loader/>}>
      <Switch>
        <Route path="/gallery" exact component={Gallery} />  
        <Route path="/edit" exact component={Edit} /> 
        <Route path="/" component={Home} />
      </Switch>
    </Suspense>
  );
}

export default App;
import { lazy, Suspense, useState } from 'react';
import { Context } from '../data/context';

import CircularProgress from '@mui/material/CircularProgress';

const Main = lazy(() => import('./Main').then(module => ({default:module.Main})));

function App() {

  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);

  return (
    <div className="App">
      
      <Suspense fallback={<div className="loading"><CircularProgress id="wheel" size={80} disableShrink/></div>}>

        <Context.Provider value={{
          searchQuery, setSearchQuery,
          movies, setMovies
        }}>

          <Main/>

        </Context.Provider>

      </Suspense>

    </div>
  );
}

export default App;

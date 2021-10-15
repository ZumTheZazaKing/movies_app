import { lazy, Suspense, useState } from 'react';
import { Context } from '../data/context';

const Main = lazy(() => import('./Main').then(module => ({default:module.Main})));

function App() {

  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);

  return (
    <div className="App">
      
      <Suspense fallback={<h1>Loading...</h1>}>

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

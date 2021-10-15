import { useContext, lazy, Suspense, useState } from 'react';
import { Context } from '../data/context';

const Movies = lazy(() => import('./Movies').then(module => ({default:module.Movies})));

export function Main(){

    let { searchQuery, setSearchQuery } = useContext(Context);

    const [tempValue, setTempValue] = useState(searchQuery);

    const handleSubmit = e => {
        e.preventDefault();
        
        setSearchQuery(tempValue);
    }

    return(<div id="Main">
        <div id="navbar">
            <p>Movies</p>
            <form onSubmit={e => handleSubmit(e)}>
                <input type="text" value={tempValue} onChange={e => setTempValue(e.target.value)}/>
            </form>
        </div>
        <Suspense fallback={<h1>Loading...</h1>}>
            <Movies/>
        </Suspense>
    </div>)
}
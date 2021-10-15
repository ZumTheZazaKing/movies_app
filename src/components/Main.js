import { useContext, lazy, Suspense, useState } from 'react';
import { Context } from '../data/context';

import CircularProgress from '@mui/material/CircularProgress';

import SearchIcon from '@mui/icons-material/Search';

const Movies = lazy(() => import('./Movies').then(module => ({default:module.Movies})));
const Info = lazy(() => import('./Info').then(module => ({default:module.Info})));

export function Main(){

    let { searchQuery, setSearchQuery } = useContext(Context);

    const [tempValue, setTempValue] = useState(searchQuery);

    const handleSubmit = e => {
        e.preventDefault();
        
        setSearchQuery(tempValue);
    }

    return(<div id="Main">
        <Info/>
        <div id="navbar">
            <p>Movies</p>
            <form onSubmit={e => handleSubmit(e)}>
                <input type="text" value={tempValue} onChange={e => setTempValue(e.target.value)}/>
                <button className="search" type="submit"><SearchIcon/></button>
            </form>
        </div>
        <Suspense fallback={<div className="loading"><CircularProgress id="wheel" size={80} disableShrink/></div>}>
            <Movies/>
        </Suspense>
    </div>)
}
import CloseIcon from '@mui/icons-material/Close';

import { useContext } from 'react';
import { Context } from '../data/context';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export function Info(){

    let { infoRef, inspect } = useContext(Context);

    const closeInfo = () => infoRef.current.className = "hide";

    return (<div id="Info" className="hide" ref={infoRef}>
        <div id="info-content">
            <span id="close" onClick={() => closeInfo()}><CloseIcon/></span>
            <br/><br/>
            <LazyLoadImage src={inspect.poster_path ? 
                `https://image.tmdb.org/t/p/w1280${inspect.poster_path}` : 
                'https://via.placeholder.com/500x700?text=Image+Not+Available'}
            />
            <br/><br/>

            <h2>{inspect.title}</h2>
            <br/>

            <p id="genres">{inspect.genres && inspect.genres.map((genre, index) => {
                return <span key={index}>{index !== inspect.genres.length - 1 ? 
                `${genre.name}, ` : `${genre.name}`}</span>
            })}
            </p>
            <br/>

            <h3>Overview</h3>
            <p>{inspect.overview}</p>
            <br/>

            <h3>Status</h3>
            <h2>{inspect.status}</h2>
            <br/>

            {inspect.status === "Released" ? 
            <div>
                <h3>Released on</h3>
                <h2>{inspect.release_date}</h2>
                <br/>
            </div> : ""}

            <h3>Languages</h3>
            <p>{inspect.spoken_languages && inspect.spoken_languages.map((spoken_language, index) => {
                return <span key={index}>{index !== inspect.spoken_languages.length - 1 ?
                `${spoken_language.name}, ` : `${spoken_language.name}`}</span>
            })}</p><br/>

            {inspect.homepage ? <a href={inspect.homepage} target="_blank" rel="noreferrer"><h4>{inspect.homepage}</h4></a> : ""}

        </div>
    </div>)
}
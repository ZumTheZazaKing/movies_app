import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import Unavailable from '../images/unavailable.png';

export function Movie(props){
    return (<div className="movie">
        <LazyLoadImage 
        src={`https://image.tmdb.org/t/p/w1280${props.data.poster_path}`}
        alt={props.data.title}
        effect="blur"
        placeholderSrc={Unavailable}
        className="img"
        />
        <h2>{props.data.title}</h2>
    </div>)
}
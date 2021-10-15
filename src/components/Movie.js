import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import Unavailable from '../images/unavailable.png';

export function Movie(props){
    return (<div className="movie">
        <LazyLoadImage 
        src={props.data.poster_path ? `https://image.tmdb.org/t/p/w1280${props.data.poster_path}` : 
        'https://via.placeholder.com/500x700?text=Image+Not+Available'}
        alt={props.data.title}
        effect="blur"
        placeholderSrc={Unavailable}
        className="img"
        />
        <p>{props.data.title}</p>
    </div>)
}
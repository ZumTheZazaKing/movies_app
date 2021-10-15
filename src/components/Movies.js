import { Movie } from "./Movie";
import { Context } from "../data/context";
import { useContext, useEffect } from "react";

export function Movies(){

    let { searchQuery, movies, setMovies, infoRef, setInspect } = useContext(Context);

    const handleClick = info => {
        infoRef.current.className = "";
        fetch(`https://api.themoviedb.org/3/movie/${info.id}?api_key=04c35731a5ee918f014970082a0088b1`)
        .then(res => res.json())
        .then(data => {setInspect(data);});
    }

    useEffect(() => {

        if(!searchQuery){
            fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1')
            .then(res => res.json())
            .then(data => setMovies(data.results))
            return;
        }

        fetch(`https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=${searchQuery}`)
        .then(res => res.json())
        .then(data => setMovies(data.results))

    },[searchQuery, setMovies])

    return (<div id="Movies">
        {movies && movies.map((movie, index) => <Movie function={handleClick} data={movie} key={index}/>)}
    </div>)
}
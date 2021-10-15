export function Movie(props){
    return (<div className="movie">
        <img src={`https://image.tmdb.org/t/p/w1280${props.data.poster_path}`}/>
        <h2>{props.data.title}</h2>
    </div>)
}
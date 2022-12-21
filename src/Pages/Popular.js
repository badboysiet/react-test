import React, { useEffect } from 'react';
import movies from '../Action/Movie/movie';
const Popular = () => {
    useEffect(() => {
        movies.getMoviesList(1, (res) => {
            console.log('getMoviesList', res);
        })
    },[])
    return (
        <div>
         <h1>popular</h1> 
        </div>
    );
}
export default Popular;
import React, { useEffect, useState } from 'react';
import movies from '../Action/Movie/movie';
import { URL_IMG, IMG_SIZE_LARGE} from '../config';

const Upcoming = () => {
    const [upcoming , setUpcoming] = useState([])
    useEffect(() => {
        movies.getUpcomingMoviesList((res) => {
            setUpcoming(res.data)
        })
    },[])
    return (
        <div>
            {upcoming.map((v) => {
                return <img src={URL_IMG+IMG_SIZE_LARGE+v.poster_path} />
            })}
        </div>
    );
}

export default Upcoming;
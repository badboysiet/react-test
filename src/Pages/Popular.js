import React, { useEffect , useState} from 'react';
import movies from '../Action/Movie/movie';
import { URL_IMG, IMG_SIZE_LARGE} from '../config';
import DetailModal from './Modal';

const Popular = () => {
    const [popular ,setPopular ] = useState([]);
    const [isVisible ,setIsVisible] = useState(false);
    useEffect(() => {
        movies.getPopularMoviesList((res) => {
            setPopular(res.data)
        })
    },[])
    return (
        <div >
            <DetailModal isVisible={isVisible} /> 
            {popular.map((v) => {
                return <a href="#"  onClick={() => setIsVisible(true)}><img src={URL_IMG+IMG_SIZE_LARGE+v.poster_path} /></a>
            })}
        </div>
        
    );
}
export default Popular;
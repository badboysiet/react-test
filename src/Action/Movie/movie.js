import api from '../../lib/request';
import apiPaths from '../../lib/api';
import { API_KEY } from '../../config';

const movies = {

    getUpcomingMoviesList: function (callback) {
        let fetchMoviesUrl = apiPaths.getUpcomingMoviesList + API_KEY;
            fetchMoviesUrl = fetchMoviesUrl + `&page=${1}`;
            api.setMethod('GET').sendRequest(fetchMoviesUrl, null, false, function (response) {
                callback({ data: response.data.results });
        })
    },

    getPopularMoviesList: function (callback) {
        let fetchMoviesUrl = apiPaths.getPopularMoviesList + API_KEY;
            fetchMoviesUrl = fetchMoviesUrl + `&page=${1}`;
            api.setMethod('GET').sendRequest(fetchMoviesUrl, null, false, function (response) {
                callback({ data: response.data.results });
        })
    },

    getMovieDetail: function (movieId, callback) {
        const fetchMovieDetailUrl = apiPaths.getMovieDetail + movieId + API_KEY;
            api.setMethod('GET').sendRequest(fetchMovieDetailUrl, null, false, function (response) {
                 callback(response.data);
        })
    },
  
    // searchMovieList: function (searchKeyword, callback) {
    //     const searchMovieUrl = apiPaths.searchMovieList + searchKeyword + API_KEY_ALT;

    //     return dispatch => {
    //         api.setMethod('GET').sendRequest(searchMovieUrl, null, false, function (response) {
    //             dispatch({
    //                 type: 'searchMovieList',
    //                 data: response.data.results
    //             });
    //             callback(response.data);
    //         }, dispatch)
    //     }
    // },
};

export default movies;

    
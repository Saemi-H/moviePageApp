import React, { useEffect, useState } from 'react';
import Mainpage from './Mainpage';
import Popup from './Popup';
import data from '../utils/api/data.json';

const Main = () => {
    const [movies, setMovies] = useState([data])
   //console.log(movies.map(item=>item.movieNm)
    console.log(movies[0])
 //  useEffect(()=> {setMovies()}, [])
    return (
        <div>
            <Mainpage 
                movies={movies[0]}
            />
            <Popup />  
        </div>
    );
};

export default Main;
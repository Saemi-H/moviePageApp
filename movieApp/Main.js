import React, { useEffect, useState } from 'react';
import Mainpage from './Mainpage';
import Popup from './Popup';
import data from '../utils/api/data.json';

const Main = () => {
    const titRef=useRef(null)
    const [movies, setMovies] = useState([data])
    const [query, setQuery] = useState('')
    const [num, setNum]=useState('')
    console.log(movies[0].slice(1))
   
 const onClick=(e)=>{
     e.preventDefault()
     setQuery('')
     titRef.current.focus()
 }
 const onSearch=(e)=>{
     const {value} = e.target 
     setQuery(value)
 }
 const onPop=(index)=>{    
    //console.log(index)
    setNum(index)
 }

    return (
        <div>
            <form onSubmit={onClick}>
                <select name="option" id="option">
                    <option value="info">영화정보</option>
                    <option value="search">통합정보</option>
                </select>
                <input type="text" placeholder='검색어를 입력하세요' onChange={onSearch} value={query} ref={titRef}/>
                <button type='submit'>submit</button>
            </form>
            <Mainpage 
                movies={movies[0]}
                onPop={onPop}
            />
            <Popup 
                movies={movies}
                num={num}
            />  
        </div>
    );
};

export default Main;
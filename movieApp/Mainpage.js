import React from 'react';
import './css/main.css'

const Mainpage = ({movies}) => {
    return (
        movies.map(movie=>
            <div className='all' key={movie.length}>
                <div className="left">
                    <div className="pic">
                        <img src={`${movie.thumbUrl}`} alt="poster"/>
                    </div>
                    <div className="details">
                        <ul>
                            <li>{movie.movieNm}</li>
                            <li>개봉일 : {movie.startYearDate}</li>
                            <li>제작상태 : {movie.moviePrdtStat}</li>
                            <li>영화구분 : {movie.movieType}</li>
                            <li>관람등급 : {movie.watchGradeNm}</li>
                            <li>상영시간 : {movie.showTm}</li>
                            <li>제작국가 : {movie.repNationCd}</li>
                            <li>감독 : {movie.director}</li>
                            <li>장르 : {movie.genre}</li>
                            <li>배급사 : {movie.dtNm}</li>
                        </ul>
                    </div>
                </div>
                <div className="right">
                    <table>
                        <thead>
                            <tr>
                                <th>영화명</th>
                                <th>매출액</th>
                                <th>관객수</th>
                                <th>증감율</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{movie.movieNm}</td>
                                <td>{movie.salesAmt}</td>
                                <td>{movie.audiCnt}</td>
                                <td>{movie.rankInten}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
        </div>
        )
    );
};

export default Mainpage;
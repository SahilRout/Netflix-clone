import React from 'react'
import requests from '../api/requests'
import Banner from '../components/Banner'
import Nav from '../components/Nav'
import Row from '../components/Row'
function RowParent() {
    return (
        <>
            <Nav />
            <Banner />
            <Row title="NETFLIX ORIGNALS" fetchURL={requests.fetchNetflixOriginals} isLargeRow />
            <Row title="Trending Now" fetchURL={requests.fetchTrending} />
            <Row title="Top Rated" fetchURL={requests.fetchTopRated} />
            <Row title="Thriller Movies" fetchURL={requests.fetchThrillerMovies} />
            <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies} />
            <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies} />
            <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies} />
            <Row title="Animation Movies" fetchURL={requests.fetchAnimationMovies} />
        </>
    )
}

export default RowParent

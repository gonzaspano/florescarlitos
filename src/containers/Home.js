import React from 'react'
import ProductCardContainer from './ProductCardContainer'
import SearchNavbar from '../components/SearchNavbar'
import MainHome from './MainHome'
import MainContact from '../components/MainContact'

function Home() {
    return <>
        <SearchNavbar/> 
        <MainHome/>
        <MainContact/>
        <ProductCardContainer/>
    </>
}

export default Home
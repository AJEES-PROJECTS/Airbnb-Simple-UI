import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/cards"
import data from "./components/data"
import Footer from './components/Footer'

export default function App() {
            // <Hero />
    const cards = data.map(item => {
        return (

            <Card
            key = {item.id}
                img={item.coverImg}
                rating={item.stats.rating}
                reviewCount={item.stats.reviewCount}
                location={item.location}
                title={item.title}
                price={item.price}
                openSpots = {item.openSpots}
            />



        )
    })

    return (
        <div>
            <Navbar />
            <Hero />
            <Footer/>
             <section className="cards-list">
            {cards}
            <  /section>
            
        </div>
    )
}

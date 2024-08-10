import React from 'react'
import FeaturedBanner from './_components/FeaturedBanner'
import AnimeCard from './_components/AnimeCards'

const staticDataBanner = {
    imageSource: "anime-covers/frieren.jpg", 
    title: "Frieren: Beyond Journey's End", 
    description: `During their decade-long quest to defeat the Demon King, the members
            of the hero's party—Himmel himself, the priest Heiter, the dwarf
            warrior Eisen, and the elven mage Frieren—forge bonds through
            adventures and battles, creating unforgettable precious memories for
            most of them.`, 
    id: 1,
  }

function DashboardPage() {
  return (
    <div>
      <FeaturedBanner {...staticDataBanner} />
      <p className="text-3xl font-bold mt-8 border-l-royal-purple border-l-8 pl-2">Anime</p>
      <p className="mt-2">Browse your favorite anime</p>
      <div className='mt-8 flex gap-3'>
        { Array.from({ length:8 }).map((e) => <AnimeCard />) }
      </div>
    </div>
  )
}

export default DashboardPage

import React from 'react'
import FeaturedBanner from './_components/FeaturedBanner'
import AnimeCard from './_components/AnimeCards'
import baseApi from '@/helpers/baseApi'
import axios from 'axios'
import { Anime } from '@/types/anime'

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

async function DashboardPage() {
  const res = await fetch(`${process.env.STRAPI_BASE_URL}/api/animes?populate=*`, {
    cache: "no-cache"
  })
  const dataObj = await res.json() 

  const animeData: Anime[] = dataObj.data
  const cleanAnimeData = animeData.map((anime) => {
    return {
      id: anime.id,
      alt: anime.attributes.alt,
      title: anime.attributes.title,
      season: anime.attributes.season,
      imgUrl: anime.attributes.image.data.attributes.url
    }
  })
  return (
    <div>
      <FeaturedBanner {...staticDataBanner} />
      <p className="text-3xl font-bold mt-8 border-l-royal-purple border-l-8 pl-2">Anime</p>
      <p className="mt-2">Browse your favorite anime</p>
      <div className='mt-8 flex gap-3'>
        { cleanAnimeData.map((anime) => <AnimeCard {...anime} key={anime.id} />) }
      </div>
    </div>
  )
}

export default DashboardPage

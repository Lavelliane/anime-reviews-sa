import React from 'react'
import FeaturedBanner from './_components/FeaturedBanner'

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
    </div>
  )
}

export default DashboardPage

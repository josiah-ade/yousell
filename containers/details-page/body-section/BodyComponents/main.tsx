import React from 'react'
import TitleSection from './TitleSection'
import OverviewSection from './OverviewSection'
import AboutSection from './AboutSection'


function Main({data}: {data: any}) {
  return (
    <div>
        <TitleSection data={data} />
        <OverviewSection data={data} />
        <AboutSection data={data} />
    </div>
  )
}

export default Main
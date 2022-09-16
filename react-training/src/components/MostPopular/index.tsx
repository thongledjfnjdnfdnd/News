// lib
import { memo } from 'react'

// types
import { IMostPopular } from '@mocks/mockDataMostPopular'

// component
import TabNavigation from '@components/TabNavigation'
import Article from '@components/Article'

export type MostPopularProps = {
  data: IMostPopular[]
}

const MostPopular = ({ data }: MostPopularProps) => {
  return (
    <>
      <TabNavigation nameCategory='Most Popular' color='#333' />
      {data.map((item) => (
        <Article rank={item.rank} titleName={item.titleName} key={item.rank} />
      ))}
    </>
  )
}

export default memo(MostPopular)

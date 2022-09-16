// lib
import { memo } from 'react'

// components
import CardDefault from '@components/Card/CardDefault'
import TabNavigation from '@components/TabNavigation'
import PostPopular from '@components/PostPopular'

// types
import { INews } from 'types/news'

export type TabProps = {
  color: string
  nameCategory: string
  data: string[]
  categoryData: INews[]
}

const TabSection = ({ color, nameCategory, data, categoryData }: TabProps) => {
  return (
    <div className='mt-5'>
      <TabNavigation color={color} nameCategory={nameCategory} data={data} />
      <div className='row mt-4'>
        <div className='row'>
          <div className='col'>
            {categoryData.map((item, index) =>
              index === 0 ? (
                <CardDefault
                  idNews={item.id}
                  key={item.id}
                  alt='post'
                  cardTitle={item.title}
                  createDate={item.publishedAt}
                  img={item.urlToImage}
                  tab={item.author}
                  urlPost={''}
                />
              ) : (
                ''
              ),
            )}
          </div>
          <div className='col'>
            <PostPopular backgroundColor='#fff' categoryData={categoryData} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default memo(TabSection)

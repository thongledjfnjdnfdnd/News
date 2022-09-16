// lib
import { memo } from 'react'

// components
import CardOverlays from '@components/Card/CardOverlays'

// types
import { INews } from 'types/news'

export type BannerProps = {
  newsTrending: INews[]
}

const Banner = ({ newsTrending }: BannerProps) => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6'>
          {newsTrending.map((item, index) =>
            index === 0 ? (
              <CardOverlays
                key={item.id}
                img={item.urlToImage}
                cardTitle={item.title}
                cardContent={`${item.author} - ${item.publishedAt}`}
                tooltip={item.category}
                fontSize='fs-3'
              />
            ) : (
              ''
            ),
          )}
        </div>
        <div className='col-md-6'>
          <div className='row'>
            <div className='col'>
              {newsTrending.map((item, index) =>
                index === 1 ? (
                  <CardOverlays
                    key={item.id}
                    img={item.urlToImage}
                    cardTitle={item.title}
                    tooltip={item.category}
                    fontSize='fs-5'
                  />
                ) : (
                  ''
                ),
              )}
            </div>
          </div>
          <div className='row mt-2'>
            {newsTrending.map((item, index) =>
              index > 1 ? (
                <div className='col'>
                  <CardOverlays
                    key={item.id}
                    img={item.urlToImage}
                    cardTitle={item.title}
                    tooltip={item.category}
                    fontSize='fs-6'
                  />
                </div>
              ) : (
                ''
              ),
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default memo(Banner)

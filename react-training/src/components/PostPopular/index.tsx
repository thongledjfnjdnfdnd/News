// lib
import { memo } from 'react'

// lib
import { INews } from 'types/news'

// component
import CardHorizontal from '@components/Card/CardHorizontal'

export type PostPopularProps = {
  categoryData: INews[]
  backgroundColor: string
}

const PostPopular = ({ categoryData, backgroundColor }: PostPopularProps) => {
  return (
    <div className='row'>
      <div className='col'>
        {categoryData &&
          categoryData.map((item: INews, index: number) =>
            index !== 0 && index < 4 ? (
              <CardHorizontal
                idNews={item.id}
                key={item.id}
                alt='post'
                cardTitle={item.title}
                createDate={item.publishedAt}
                img={item.urlToImage}
                tab={item.author}
                backgroundColor={backgroundColor}
              />
            ) : (
              ''
            ),
          )}
      </div>
    </div>
  )
}

export default memo(PostPopular)

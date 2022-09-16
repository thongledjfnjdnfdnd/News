// lib
import { memo } from 'react'

// components
import CardDefault from '@components/Card/CardDefault'

// types
import { INews } from 'types/news'

export type SearchProps = {
  searchNews: INews[]
}

const Search = ({ searchNews }: SearchProps) => {
  return (
    <div className='container'>
      <div className='row'>
        {searchNews && searchNews.length > 0 ? (
          searchNews.map((item) => (
            <div className='col-md-6 mt-5' key={item.id}>
              <CardDefault
                alt='post'
                cardTitle={item.title}
                createDate={item.publishedAt}
                idNews={item.id}
                img={item.urlToImage}
                tab={item.tag}
                urlPost=''
              />
            </div>
          ))
        ) : (
          <h4 className='d-flex justify-content-center mt-5'>Data not found</h4>
        )}
      </div>
    </div>
  )
}

export default memo(Search)

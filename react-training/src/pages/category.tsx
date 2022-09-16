// lib
import { memo, useState } from 'react'
import { useParams } from 'react-router-dom'

// types
import { INews } from 'types/news'

// constants
import { NEWS_ALL, NEWS_ENTERTAINMENT } from '@constant/ApiUrl'

// helpers
import { fetchDataByNewsTypes } from '@helper/fetcher'

// components
import Search from '@components/Search'
import TabNavigation from '@components/TabNavigation'
import CategoryAndArchive from '@components/CategoryAndArchive'
import PostPopular from '@components/PostPopular'

// mocks
import { mockDataArchive, mockDataCategory, mockDataTags } from '@mocks/mockDataCategory'

const Category = () => {
  const [pageIndex, setPageIndex] = useState(1)
  const [totalPage, setTotalPage] = useState(1)

  const { queryParam } = useParams()

  const searchNews: INews[] = fetchDataByNewsTypes(
    `${NEWS_ALL}/?q=${queryParam}&_page=${pageIndex}&_limit=8`,
  )

  const searchByTag: INews[] = fetchDataByNewsTypes(
    `${NEWS_ALL}/?tag=${queryParam}&_page=${pageIndex}&_limit=8`,
  )

  const abc: INews[] = fetchDataByNewsTypes(`${NEWS_ALL}/?q=${queryParam}`)

  const dataEntertainment = fetchDataByNewsTypes(NEWS_ENTERTAINMENT)

  const getPages = () => {
    // setTotalPage(abc && abc.length / 8 + 1)
    const elements = []
    for (let i = 0; abc && i <= abc.length / 8; i++) {
      elements.push(
        <li className='page-item' onClick={(() => setPageIndex(i + 1))}>
          <a className='page-link' href='#'>
            {i + 1}
          </a>
        </li>,
      )
    }
    return elements
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-8'>
          {searchNews ? <Search searchNews={searchNews} /> : <Search searchNews={searchByTag} />}
          <nav aria-label='Page navigation example'>
            <ul className='pagination justify-content-center'>
              <li
                className='page-item'
                onClick={() => setPageIndex(pageIndex - 1)}
              >
                <a
                  className={`page-link ${pageIndex === 1 ? 'disabled' : ''}`}
                  href='#'
                  aria-label='Previous'
                >
                  <span aria-hidden='true'>&laquo;</span>
                </a>
              </li>
              {getPages()}
              <li className='page-item' onClick={() => setPageIndex(pageIndex + 1)}>
                <a
                  className={`page-link ${totalPage === pageIndex ? 'disabled' : ''}`}
                  href='#'
                  aria-label='Next'
                >
                  <span aria-hidden='true'>&raquo;</span>
                  <span className='sr-only'>Next</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className='col-md-4 ps-5'>
          <div className='row mt-5'>
            <TabNavigation color='#333' nameCategory='Category' />
            <CategoryAndArchive dataCategoryAndArchive={mockDataCategory} textColor='#000' />
          </div>
          <div className='row mt-5'>
            <TabNavigation color='#333' nameCategory='Archive' />
            <CategoryAndArchive dataCategoryAndArchive={mockDataArchive} textColor='#000' />
          </div>
          <div className='row mt-5'>
            <TabNavigation color='#333' nameCategory='Post Popular' />
            <PostPopular categoryData={dataEntertainment} backgroundColor='#fff' />
          </div>
          <div className='row mt-5'>
            <TabNavigation color='#333' nameCategory='Tags' />
            <div className='w-30'>
              {mockDataTags.map((item) => (
                <button key={item} type='button' className='btn btn-outline-secondary mb-2 ms-2'>
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default memo(Category)

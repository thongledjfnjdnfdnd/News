// lib
import { useParams } from 'react-router-dom'

// component
import Input from '@components/Input'
import CategoryAndArchive from '@components/CategoryAndArchive'
import TabNavigation from '@components/TabNavigation'
import PostPopular from '@components/PostPopular'

// helper
import { fetchDataByNewsTypes } from '@helper/fetcher'

// mock
import { mockDataArchive, mockDataCategory, mockDataTags } from '@mocks/mockDataCategory'

// types
import { INews } from 'types/news'

// constants
import { NEWS_ALL, NEWS_ENTERTAINMENT } from '@constant/ApiUrl'

const Details = () => {
  const dataNewsAll: INews[] = fetchDataByNewsTypes(NEWS_ALL)

  const dataEntertainment = fetchDataByNewsTypes(NEWS_ENTERTAINMENT)

  const { idNews } = useParams()

  const dataDetails = dataNewsAll && dataNewsAll.find((item) => item.id + '' == idNews)

  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8'>
            <div className='row'>
              <h6>TECHNOLOGY</h6>
            </div>
            <div className='row mt-4'>
              <h4>{dataDetails?.title}</h4>
            </div>
            <div className='row mt-2'>
              <p>
                by {dataDetails?.author} - {dataDetails?.publishedAt} {dataDetails?.view} Views 0
                Comment
              </p>
            </div>
            <div className='row mt-3'>
              <div className='img-post-details'>
                <img className='w-100' src={dataDetails?.urlToImage} alt='post details' />
              </div>
              <div className='content-post mt-4'>
                <p>{dataDetails?.content}</p>
              </div>
              <div className='tag mt-4'>
                <p>Tags: Streetstyle Crafts</p>
              </div>
              <div className='share'>facebook, zalo...</div>
              <div className='comment mt-5'>
                <h4>Leave a Comment</h4>
                <p className='mt-3'>
                  Your email address will not be published. Required fields are marked *
                </p>
                <form className='mt-5'>
                  <div className='form-outline mb-4'>
                    <textarea
                      className='form-control'
                      id='form4Example3'
                      rows={4}
                      placeholder='Comment...'
                    ></textarea>
                  </div>
                  <div className='col-md-4'>
                    <div className='form-outline mb-4'>
                      <Input placeholder='Name*' />
                    </div>
                    <div className='form-outline mb-4'>
                      <Input placeholder='Email*' />
                    </div>
                    <div className='form-outline mb-4'>
                      <Input placeholder='Website' />
                    </div>
                  </div>
                  <button type='submit' className='btn btn-dark btn-block mb-4'>
                    Post Comment
                  </button>
                </form>
              </div>
            </div>
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
    </>
  )
}

export default Details

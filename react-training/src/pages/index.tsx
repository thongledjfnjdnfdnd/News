// components
import Banner from '@components/Banner'
import MostPopular from '@components/MostPopular'

// assets
import banner2 from '@assets/images/banner-02.jpg'

// mock data
import { mockDataMostPopular } from '@mocks/mockDataMostPopular'
import StayConnected from '@components/StayConnected'
import { mockDataStayConnected } from '@mocks/mockDataStayConnected'

// helper
import { fetchDataByNewsTypes } from '@helper/fetcher'
import { filterNewsTrending } from '@helper/filterNewsTrending'

// constant
import { NEWS_ALL } from '@constant/ApiUrl'
import Home from './home'

const Dashboard = () => {

  const dataTrending = filterNewsTrending(fetchDataByNewsTypes(NEWS_ALL))

  return (
    <div>
      <Banner newsTrending={dataTrending} />
      <div className='container'>
        <div className='row'>
          <Home />
          <div className='col-md-4 mt-5'>
            <MostPopular data={mockDataMostPopular} />
            <div>
              <img src={banner2} alt='banner' />
            </div>
            <StayConnected data={mockDataStayConnected} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard

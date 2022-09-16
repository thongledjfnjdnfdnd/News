// lib
import { memo } from 'react'

// constants
import { NEWS_BUSINESS, NEWS_ENTERTAINMENT, NEWS_TRAVEL } from '@constant/ApiUrl'

// helpers
import { fetchDataByNewsTypes } from '@helper/fetcher'

// components
import TabSection from '@components/TabSection'

// mocks
import {
  mockDataTabNavigationBusiness,
  mockDataTabNavigationEntertainment,
  mockDataTabNavigationTravel,
} from '@mocks/mockDataCategory'

const Home = () => {
  const dataEntertainment = fetchDataByNewsTypes(NEWS_ENTERTAINMENT)

  const dataBusiness = fetchDataByNewsTypes(NEWS_BUSINESS)

  const dataTravel = fetchDataByNewsTypes(NEWS_TRAVEL)

  return (
    <div className='col-md-8'>
      {dataEntertainment && dataBusiness && dataTravel && (
        <>
          <TabSection
            color='#e71d69'
            nameCategory='Entertainment'
            data={mockDataTabNavigationEntertainment}
            categoryData={dataEntertainment}
          />
          <TabSection
            color='#15a752'
            nameCategory='Business'
            data={mockDataTabNavigationBusiness}
            categoryData={dataBusiness}
          />
          <TabSection
            color='#e3724a'
            nameCategory='Travel'
            data={mockDataTabNavigationTravel}
            categoryData={dataTravel}
          />
        </>
      )}
    </div>
  )
}

export default memo(Home)

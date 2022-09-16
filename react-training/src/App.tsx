// lib
import { Routes, Route } from 'react-router-dom'

// pages
import Dashboard from '@pages/index'
import Details from '@pages/details'

// constants
import { Path } from '@constant/Enum'
import { NEWS_ALL } from '@constant/ApiUrl'

// components
import Header from '@components/Header'
import Footer from '@components/Footer'

// helper
import { fetchDataByNewsTypes } from '@helper/fetcher'
import Category from '@pages/category'

function App() {
  const randomNews = fetchDataByNewsTypes(NEWS_ALL)

  return (
    <>
      <Header isHeaderLineDashboard={false} />
      <Dashboard />
      {/* <Routes>
        <Route path={Path.DASHBOARD} element={<Dashboard />}></Route>
        <Route path={`${Path.DETAILS}-${Path.DETAILS_POST}`} element={<Details />}></Route>
        <Route path={`${Path.SEARCH}-:queryParam`} element={<Category />}></Route>
      </Routes> */}
      {randomNews && <Footer categoryData={randomNews} />}
    </>
  )
}

export default App

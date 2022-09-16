// import Header from '@components/Header'
// import { NEWS_ALL } from '@constant/ApiUrl'
// import { fetchDataByNewsTypes } from '@helper/fetcher'
// import { INews } from 'types/news'
// import { createContext, useState } from 'react'

// // create context
// export const QueryContext = createContext('')

// export const ListSearchNews = () => {
//   const [queryParam, setQueryParam] = useState('100')

//   // const handleSearch = () => {
//   //   return fetchDataByNewsTypes(`${NEWS_ALL}/?q=${queryParam}`)
//   // }

//   const handleChangeSearchInput = (query: string) => {
//     console.log(query)

//     setQueryParam(query)
//   }

//   return (
//     <QueryContext.Provider value={queryParam}>
//       <Header isHeaderLineDashboard onchange={handleChangeSearchInput}></Header>
//     </QueryContext.Provider>
//   )
// }

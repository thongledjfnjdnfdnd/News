import { INews } from 'types/news'

export const filterNewsTrending = (allNewsData: INews[]) => {
  const newsTrending: INews[] = []

  const sortDataByView =
    allNewsData &&
    allNewsData.sort(function (a, b) {
      return b.view - a.view
    })

  sortDataByView &&
    sortDataByView.map((item) => {
      newsTrending.length < 4 ? newsTrending.push(item) : ''
    })

  return newsTrending
}

// lib
import useSWR from 'swr'

//Fetcher of swr hook
const fetcher = async (url: string) => {
  const response = await fetch(url)
  const responseData = await response.json()

  if (response.ok) {
    return responseData
  }
  throw responseData
}

const fetchDataByNewsTypes = (url: string) => {
  const { data, error } = useSWR(url, fetcher)

  if (error) {
    const errMsg = new Error('failed to load')
    return errMsg
  }

  return data
}

export { fetcher, fetchDataByNewsTypes }

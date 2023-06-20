import { ReactNode } from 'react'
import { SWRConfig } from 'swr'
import axios from 'axios'

axios.defaults.baseURL = process.env.REACT_APP_AXIOS_BASURL

const SWRQueryProvider = ({ children }: { children: ReactNode }) => {
  return <SWRConfig value={{ fetcher }}>{children}</SWRConfig>
}

export default SWRQueryProvider

const fetcher = (url: string) =>
  axios
    .get(url)
    .then((res) => res.data)
    .catch((err) => console.log(err))

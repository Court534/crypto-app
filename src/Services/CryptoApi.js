import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'

const cryptoApiHeaders = {
  'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
  'X-RapidAPI-Key': '0c5473f3b2msh7789711f0739a0dp175067jsnd9ac4565d860'
}

const baseUrl = "https://coinranking1.p.rapidapi.com/exchanges"

const createRequest = (url) => ({ url, headers: cryptoApiHeaders }) 

export const cryptoApi = createApi({
  recuderPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl })
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: () => createRequest('/exchanges')
    })
  })
})
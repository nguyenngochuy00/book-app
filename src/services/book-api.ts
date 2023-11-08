import { APP_ENDPOINTS } from '../constant/endpoints'
import axiosClient from '../library/axios/axiosClient'
import { Book } from '../types/book.model'

export const getBooks = () => {
  return axiosClient.get<Book[]>(APP_ENDPOINTS.BOOK).then((res) => {
    return res.data
  })
}
export const getBook = (id: string | number) => {
  return axiosClient.get<Book>(`${APP_ENDPOINTS.BOOK}/${id}`).then((res) => {
    return res.data
  })
}
export const addBook = (data: Book) => {
  return axiosClient.post<Book>(APP_ENDPOINTS.BOOK, data).then((res) => {
    return res.data
  })
}
export const updateBook = (data: Book) => {
  return axiosClient.put<Book>(`${APP_ENDPOINTS.BOOK}/${data.id}`, data).then((res) => {
    return res.data
  })
}
export const deleteBook = (id: string | number) => {
  return axiosClient.delete<Book>(`${APP_ENDPOINTS.BOOK}/${id}`).then((res) => {
    return res.data
  })
}

import { useState } from 'react'
import FormGroup from '../../../../components/shared/form-group/FormGroup'
import { Book } from '../../../../types/book.model'
import './form.scss'

interface FormProps {
  addBook: (code: string, title: string, author: string, price: string) => void
  editBook: (code: string, title: string, author: string, price: string) => void
  finishEditBook: () => void
  currentBook: Book | null
}

function Form(props: FormProps) {
  const { addBook, currentBook, editBook, finishEditBook } = props
  const [code, setCode] = useState<string>('')
  const [title, setTitle] = useState<string>('')
  const [author, setAuthor] = useState<string>('')
  const [price, setPrice] = useState<string>('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (currentBook) {
      finishEditBook()
      if (code) {
        setCode('')
      }
      if (title) {
        setTitle('')
      }
      if (author) {
        setAuthor('')
      }
      if (price) {
        setPrice('')
      }
    } else {
      addBook(code, title, author, price)
      setCode('')
      setTitle('')
      setAuthor('')
      setPrice('')
    }
  }

  const handleButtonClick = (event: React.FormEvent<HTMLFormElement>) => {
    handleSubmit(event)
  }

  return (
    <>
      <div className='book-information'>
        <div className='form-container'>
          <h2>Book information</h2>
          <form onSubmit={handleSubmit}>
            <div className='form'>
              <FormGroup
                labelName='Book Code *'
                label='code'
                type='text'
                value={currentBook ? currentBook.code : code}
                onChange={(e) => {
                  if (currentBook) {
                    editBook(e.target.value, currentBook.title, currentBook.author, currentBook.price)
                  } else {
                    setCode(e.target.value)
                  }
                }}
              />
              <FormGroup
                labelName='Book Name *'
                label='name'
                type='text'
                value={currentBook ? currentBook.title : title}
                onChange={(e) => {
                  if (currentBook) {
                    editBook(currentBook.code, e.target.value, currentBook.author, currentBook.price)
                  } else {
                    setTitle(e.target.value)
                  }
                }}
              />
              <FormGroup
                labelName='Author *'
                label='author'
                type='text'
                value={currentBook ? currentBook.author : author}
                onChange={(e) => {
                  if (currentBook) {
                    editBook(currentBook.code, currentBook.title, e.target.value, currentBook.price)
                  } else {
                    setAuthor(e.target.value)
                  }
                }}
              />
              <FormGroup
                labelName='Price *'
                label='price'
                type='text'
                value={currentBook ? currentBook.price : price}
                onChange={(e) => {
                  if (currentBook) {
                    editBook(currentBook.code, currentBook.title, currentBook.author, e.target.value)
                  } else {
                    setPrice(e.target.value)
                  }
                }}
              />
            </div>
            {/* <div className="btn-control"> */}
            <button className='btn-save'>Save changes</button>
            {/* </div> */}
          </form>
          <button className='btn-cancel'>Cancel</button>
        </div>
      </div>
    </>
  )
}

export default Form

import Form from "./components/form/Form"
import List from "./components/list/List"
import './book.scss';
import { useEffect, useState } from "react";
import { Book } from "../../types/book.model";
import axios from "axios";

function Books() {
  const [books, setBooks] = useState<Book[]>([]);
  const [currentBook, setCurrentBook] = useState<Book | null>(null)

  useEffect(() => {
    axios
      .get('https://api-dusky-pi.vercel.app/api/books')
      .then((response) => {
        setBooks(response.data)
      })
      .catch((error) => console.log(error))
  }, [])

  const addBook = (code: string, title: string, author: string, price: string) => {
    const book: Book = {
      id: Date.now().toString(),
      code,
      title,
      author,
      price
    }
    setBooks((prev) => [...prev, book])
  }

  // click edit button 
  const startEditBook = (id: string) => {
    const findedBook = books.find(book => book.id === id)
    if (findedBook) {
      setCurrentBook(findedBook)
    }
  }

  // type keyboard 
  const editBook = (code: string, title: string, author: string, price: string) => {
    setCurrentBook((prev) => {
      if (prev)
        return { ...prev, code, title, author, price };
      return null
    })
  }

  // click save button 
  function finishEditBook() {
    setBooks(prev => {
      return prev.map(book => {
        if(book.id === (currentBook as Book).id) {
          return currentBook as Book
        }
        return book
      })
    })
    setCurrentBook(null)
  }

  return (
    <>
      <div className="book">
        <div className="book-container">
          <div className="book-intro">
            <div className="book-welcome">
              <span>Welcome to My</span>&nbsp;<span>Bookstore!</span>
            </div>
            <p>Oct 19, 2023 | Thursday, 11:00 AM</p>
          </div>
          <Form addBook={addBook} currentBook={currentBook} editBook={editBook} finishEditBook={finishEditBook} />
          <List books={books} startEditBook={startEditBook} />
        </div>
      </div>
    </>
  )
}

export default Books
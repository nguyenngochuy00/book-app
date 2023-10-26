import Form from "./components/form/Form"
import List from "./components/list/List"
import './book.scss';
import { useEffect, useState } from "react";
import { Book } from "../../types/book.model";
import axios from "axios";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Swal from "sweetalert2";

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

    // Display a success toast notification
    toast.success('Add book to list successfully!', {
      position: 'top-right',
      autoClose: 3000, // You can adjust the duration
    });
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
        if (book.id === (currentBook as Book).id) {
          return currentBook as Book
        }
        return book
      })
    })
    setCurrentBook(null)

    // Display a success toast notification
    toast.success('Update book successfully!', {
      position: 'top-right',
      autoClose: 3000, // You can adjust the duration
    });
  }

  function deleteBook(id: string) {
    const bookToDelete = books.find((book) => book.id === id);

    if(bookToDelete) {
      const bookName = bookToDelete.title;

      Swal.fire({
        title: `<p class="custom-title">Do you want to delete</p><p class="custom-text">${bookName} ?</p>`,
        showCancelButton: true,
        confirmButtonText: 'Delete',
        cancelButtonText: 'Cancel',
        customClass: {
          title: 'custom-title custom-text',
          confirmButton: 'custom-confirm-button',
          cancelButton: 'custom-cancel-button',
        }
      }).then((result) => {
        if (result.isConfirmed) {
          if (currentBook) {
            setCurrentBook(null);
          }
          setBooks((prev) => {
            const findIndexBook = prev.findIndex((book) => book.id === id);
            if (findIndexBook > -1) {
              const result = [...prev];
              result.splice(findIndexBook, 1);
              return result;
            }
            return prev;
          });
  
          // Display a success toast notification
          toast.success('Delete book successfully!', {
            position: 'top-right',
            autoClose: 3000, // You can adjust the duration
          });
        }
      });
    }
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
          <List books={books} startEditBook={startEditBook} deleteBook={deleteBook} />
        </div>
      </div>
    </>
  )
}

export default Books
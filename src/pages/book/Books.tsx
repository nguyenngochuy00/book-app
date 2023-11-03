import Form from "./components/form/Form"
import List from "./components/list/List"
import './book.scss';
import { useEffect, useState } from "react";
import { Book } from "../../types/book.model";
import axios from "axios";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Swal from "sweetalert2";
import { APP_MESSAGES } from "../../constant/messages";
import { Typography } from "@mui/material";
import palette from "../../theme/palette";
import typography from "../../theme/typography";

function Books() {
  const [books, setBooks] = useState<Book[]>([]);
  const [currentBook, setCurrentBook] = useState<Book | null>(null)

  useEffect(() => {
    axios
      .get('https://65376d90bb226bb85dd3368a.mockapi.io/api/book')
      .then((response) => {
        setBooks(response.data)
      })
      .catch((error) => console.log(error))
  }, [])

  // Handle add book
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
    toast.success(APP_MESSAGES.CREATE_BOOK_SUCCESS, {
      position: 'top-right',
      autoClose: 3000, // You can adjust the duration
    });
  }

  // Handle click edit button 
  const startEditBook = (id: string) => {
    const findedBook = books.find(book => book.id === id)
    if (findedBook) {
      setCurrentBook(findedBook)
    }
  }

  // Handle type keyboard when edit mode
  const editBook = (code: string, title: string, author: string, price: string) => {
    setCurrentBook((prev) => {
      if (prev)
        return { ...prev, code, title, author, price };
      return null
    })
  }

  // Handle click save button to update book
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

    // Display a update toast notification
    toast.success(APP_MESSAGES.UPDATE_BOOK_SUCCESS, {
      position: 'top-right',
      autoClose: 3000, // You can adjust the duration
    });
  }

  // Handle delete book
  function deleteBook(id: string) {
    const bookToDelete = books.find((book) => book.id === id);

    if (bookToDelete) {
      const bookName = bookToDelete.title;

      // Display delete comfirm notification
      Swal.fire({
        title: `<p class="custom-title">${APP_MESSAGES.CONFIRM_DELETE}</p><p class="custom-text">${bookName} ?</p>`,
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

          // Display a delete toast notification
          toast.success(APP_MESSAGES.DELETE_BOOK_SUCCESS, {
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
              <Typography
                variant="h1"
                component={'span'}
                color={palette.grey[900]}
                fontFamily={typography.base.fontFamily}>Welcome to My</Typography>&nbsp;
              <Typography
                variant="h1"
                component={'span'}
                color={palette.primary.main}
                fontFamily={typography.base.fontFamily}>Bookstore!</Typography>
            </div>
            <Typography
             variant="h3"
             component={'h3'}
             color={palette.grey[900]}
             fontFamily={typography.base.fontFamily}>Oct 19, 2023 | Thursday, 11:00 AM</Typography>
          </div>
          <Form addBook={addBook} currentBook={currentBook} editBook={editBook} finishEditBook={finishEditBook} />
          <List books={books} startEditBook={startEditBook} deleteBook={deleteBook} />
        </div>
      </div>
    </>
  )
}

export default Books


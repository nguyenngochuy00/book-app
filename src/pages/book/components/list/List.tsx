import { Book } from '../../../../types/book.model'
import './list.scss'

interface ListProps {
  books: Book[]
  startEditBook: (id: string) => void
}

function List(props: ListProps) {
  const { books, startEditBook } = props

  return (
    <>
      <div className="book-list">
        <div className="list-container">
          <h2>Book List</h2>
          <table>
            <thead>
              <tr>
                <th>Book Code</th>
                <th>Book Name</th>
                <th>Author</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {books.map((book) => (
                <tr key={book.id}>
                  <td>{book.code}</td>
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                  <td>{book.price}</td>
                  <td>
                    <div className="btn-action">
                      <img src="/assets/svg/list/edit.svg" alt="edit" onClick={() => startEditBook(book.id)} />
                      <img src="/assets/svg/list/trash-alt.svg" alt="trash-alt" />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default List
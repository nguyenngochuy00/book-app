import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import styled from 'styled-components'
import palette from '../../../../theme/palette'
import typography from '../../../../theme/typography'
import { Book } from '../../../../types/book.model'
import './list.scss'

interface ListProps {
  books: Book[]
  startEditBook: (id: string) => void
  deleteBook: (id: string) => void
}

const TableCellHead = styled('th')({
  fontFamily: typography.base.fontFamily,
  fontSize: typography.base.fontSize,
  fontWeight: typography.base.fontWeight, 
  lineHeight: typography.base.lineHeight, 
  color: palette.grey[400], 
})

const TableCellBody = styled('td')({
  fontFamily: typography.base.fontFamily, 
  fontSize: typography.base.fontSize,
  fontWeight: typography.base.fontWeight,
  lineHeight: 'normal',
  color: palette.grey[800], 

  '&:nth-child(2)': {
    fontWeight: typography.h4.fontWeight,
    color: palette.grey[900], 
  }
})

function List(props: ListProps) {
  const { books, startEditBook, deleteBook } = props

  return (
    <>
      <div className="book-list">
        <div className="list-container">
          <Typography
            variant='h2'
            component={'h2'}
            color={palette.grey[800]}
            fontFamily={typography.base.fontFamily}>Book List</Typography>
          <TableContainer component={Paper}>
            <Table >
              <TableHead>
                <TableRow>
                  <TableCellHead>Book Code</TableCellHead>
                  <TableCellHead>Book Name</TableCellHead>
                  <TableCellHead>Author</TableCellHead>
                  <TableCellHead>Price</TableCellHead>
                  <TableCellHead>Action</TableCellHead>
                </TableRow>
              </TableHead>
              <TableBody>
                {books.map((book) => (
                  <TableRow key={book.id}>
                    <TableCellBody>{book.code}</TableCellBody>
                    <TableCellBody>{book.title}</TableCellBody>
                    <TableCellBody>{book.author}</TableCellBody>
                    <TableCellBody>${book.price}</TableCellBody>
                    <td>
                      <div className="btn-action">
                        <img src="/assets/svg/list/edit.svg" alt="edit" onClick={() => startEditBook(book.id)} />
                        <img src="/assets/svg/list/trash-alt.svg" alt="trash-alt" onClick={() => deleteBook(book.id)} />
                      </div>
                    </td>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </>
  )
}

export default List
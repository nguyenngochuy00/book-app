import {
  Avatar,
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from '@mui/material'
import palette from '../../../../theme/palette'
import typography from '../../../../theme/typography'
import { Book } from '../../../../types/book.model'
import './list.scss'

interface ListProps {
  books: Book[]
  startEditBook: (id: string) => void
  deleteBook: (id: string) => void
}

function List(props: ListProps) {
  const { books, startEditBook, deleteBook } = props

  return (
    <>
      <Box className={'book-list'} sx={{ padding: '30px 40px', borderRadius: '20px', background: palette.grey[100] }}>
        <Box
          className={'list-container'}
          width={'1150px'}
          display={'flex'}
          justifyContent={'flex-start'}
          alignItems={'flex-start'}
          flexDirection={'column'}
          rowGap={'30px'}
        >
          <Typography variant='h2' component={'h2'} color={palette.grey[800]} fontFamily={typography.base.fontFamily}>
            Book List
          </Typography>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Book Code</TableCell>
                  <TableCell>Book Name</TableCell>
                  <TableCell>Author</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {books.map((book) => (
                  <TableRow key={book.id}>
                    <TableCell>{book.code}</TableCell>
                    <TableCell>{book.title}</TableCell>
                    <TableCell>{book.author}</TableCell>
                    <TableCell>${book.price}</TableCell>
                    <TableCell>
                      <Box
                        className={'btn-action'}
                        display={'flex'}
                        justifyContent={'center'}
                        alignItems={'center'}
                        flexDirection={'row'}
                        columnGap={'5px'}
                      >
                        <Avatar
                          src='/assets/svg/list/edit.svg'
                          alt='edit'
                          onClick={() => startEditBook(book.id)}
                          sx={{
                            borderRadius: '7px',
                            width: '16px',
                            height: '16px',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease-in-out',

                            '&:hover': {
                              background: palette.grey[200]
                            }
                          }}
                        />
                        <Avatar
                          src='/assets/svg/list/trash-alt.svg'
                          alt='trash-alt'
                          onClick={() => deleteBook(book.id)}
                          sx={{
                            borderRadius: '7px',
                            width: '16px',
                            height: '16px',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease-in-out',

                            '&:hover': {
                              background: palette.grey[200]
                            }
                          }}
                        />
                      </Box>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </>
  )
}

export default List

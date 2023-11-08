import { Box, Button, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import FormGroup from '../../../../components/shared/form-group/FormGroup'
import { APP_MESSAGES } from '../../../../constant/messages'
import palette from '../../../../theme/palette'
import typography from '../../../../theme/typography'
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
  const [isEditMode, setIsEditMode] = useState(false) // Track edit mode
  const [errors, setErrors] = useState<{ [key: string]: string }>({})

  useEffect(() => {
    setIsEditMode(!!currentBook) // Set edit mode based on currentBook
    if (currentBook) {
      setCode(currentBook.code)
      setTitle(currentBook.title)
      setAuthor(currentBook.author)
      setPrice(currentBook.price)
    } else {
      setCode('')
      setTitle('')
      setAuthor('')
      setPrice('')
    }
  }, [currentBook])

  // Handle click cancel button when edit mode to reset form
  const handleCancelClick = () => {
    setIsEditMode(false) // Exit edit mode
    setCode('') // Reset form fields
    setTitle('')
    setAuthor('')
    setPrice('')
  }

  // Handle clear error when typing keyboard
  const handleInputChange = (field: string) => {
    // Clear the error for the specific field
    const updatedErrors = { ...errors }
    delete updatedErrors[field]
    setErrors(updatedErrors)
  }

  // Handle submit form
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const validationErrors: { [key: string]: string } = {}

    if (!code.toString().trim()) {
      validationErrors['code'] = APP_MESSAGES.REQUIRED
    }
    if (!title.toString().trim()) {
      validationErrors['title'] = APP_MESSAGES.REQUIRED
    }
    if (!author.toString().trim()) {
      validationErrors['author'] = APP_MESSAGES.REQUIRED
    }
    if (!price.toString().trim()) {
      validationErrors['price'] = APP_MESSAGES.REQUIRED
    }

    setErrors(validationErrors)

    if (Object.keys(validationErrors).length === 0) {
      if (isEditMode) {
        finishEditBook()
      } else {
        addBook(code, title, author, price)
      }
      setCode('')
      setTitle('')
      setAuthor('')
      setPrice('')
    }
  }

  return (
    <>
      <Box
        className={'book-information'}
        sx={{ padding: '30px 40px', borderRadius: '20px', background: palette.grey[100] }}
      >
        <Box
          className={'form-container'}
          width={'1150px'}
          display={'flex'}
          justifyContent={'flex-start'}
          alignItems={'flex-start'}
          flexDirection={'column'}
          rowGap={'30px'}
        >
          <Typography variant='h2' component={'h2'} color={palette.grey[800]} fontFamily={typography.base.fontFamily}>
            Book information
          </Typography>
          <Box
            component={'form'}
            onSubmit={handleSubmit}
            display={'flex'}
            justifyContent={'flex-start'}
            alignItems={'flex-start'}
            flexDirection={'column'}
            rowGap={'24px'}
          >
            <Box
              className={'form'}
              display={'flex'}
              justifyContent={'flex-start'}
              alignItems={'flex-start'}
              flexDirection={'row'}
              columnGap={'40px'}
            >
              <FormGroup
                labelName='Book Code *'
                label='code'
                type='text'
                value={code}
                onChange={(e) => {
                  if (isEditMode) {
                    editBook(e.target.value, title, author, price)
                  } else {
                    setCode(e.target.value)
                  }
                  handleInputChange('code')
                }}
                disabled={isEditMode}
                error={errors['code']}
              />

              <FormGroup
                labelName='Book Name *'
                label='name'
                type='text'
                value={title}
                onChange={(e) => {
                  if (isEditMode) {
                    editBook(code, e.target.value, author, price)
                  } else {
                    setTitle(e.target.value)
                  }
                  handleInputChange('title')
                }}
                error={errors['title']}
              />

              <FormGroup
                labelName='Author *'
                label='author'
                type='text'
                value={author}
                onChange={(e) => {
                  if (isEditMode) {
                    editBook(code, title, e.target.value, price)
                  } else {
                    setAuthor(e.target.value)
                  }
                  handleInputChange('author')
                }}
                error={errors['author']}
              />

              <FormGroup
                labelName='Price *'
                label='price'
                type='text'
                value={price}
                onChange={(e) => {
                  if (isEditMode) {
                    editBook(code, title, author, e.target.value)
                  } else {
                    setPrice(e.target.value)
                  }
                  handleInputChange('price')
                }}
                error={errors['price']}
              />
            </Box>
            <Box
              className={'btn-control'}
              display='flex'
              justifyContent={'flex-start'}
              alignItems={'flex-start'}
              flexDirection={'row'}
              columnGap={'10px'}
            >
              <Button variant='contained' type='submit'>
                Save changes
              </Button>
              <Button
                // className={`btn-cancel ${!isEditMode ? 'btn-cancel-disabled' : ''}`}
                variant='text'
                onClick={handleCancelClick}
                disabled={!isEditMode}
              >
                Cancel
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default Form

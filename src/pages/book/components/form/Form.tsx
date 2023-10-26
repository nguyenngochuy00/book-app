import { useEffect, useState } from 'react'
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

  const [isEditMode, setIsEditMode] = useState(false); // Track edit mode

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    setIsEditMode(!!currentBook); // Set edit mode based on currentBook
    if (currentBook) {
      setCode(currentBook.code);
      setTitle(currentBook.title);
      setAuthor(currentBook.author);
      setPrice(currentBook.price);
    } else {
      setCode('');
      setTitle('');
      setAuthor('');
      setPrice('');
    }
  }, [currentBook]);

  const handleCancelClick = () => {
    setIsEditMode(false); // Exit edit mode
    setCode(''); // Reset form fields
    setTitle('');
    setAuthor('');
    setPrice('');
  };

  const handleInputChange = (field: string) => {
    // Clear the error for the specific field
    const updatedErrors = { ...errors };
    delete updatedErrors[field];
    setErrors(updatedErrors);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors: { [key: string]: string } = {};

    if (!code.toString().trim()) {
      validationErrors['code'] = 'This field is required.';
    }
    if (!title.toString().trim()) {
      validationErrors['title'] = 'This field is required.';
    }
    if (!author.toString().trim()) {
      validationErrors['author'] = 'This field is required.';
    }
    if (!price.toString().trim()) {
      validationErrors['price'] = 'This field is required.';
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      if (isEditMode) {
        finishEditBook();
      } else {
        addBook(code, title, author, price);
      }

      setCode('');
      setTitle('');
      setAuthor('');
      setPrice('');
    }
  };
  
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
            </div>
            <div className="btn-control">
              <button className='btn-save' type='submit'>Save changes</button>
              <button className={`btn-cancel ${!isEditMode ? 'btn-cancel-disabled' : ''}`} onClick={handleCancelClick} disabled={!isEditMode} >Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Form

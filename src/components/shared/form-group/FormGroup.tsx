import { Box, FormLabel, InputBase, Typography } from '@mui/material'
import customTheme from '../../../theme'
import palette from '../../../theme/palette'
import typography from '../../../theme/typography'
import './formGroup.scss'

interface FormGroupProps {
  labelName: string
  label: string
  type: string
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  disabled?: boolean
  error?: string
}

function FormGroup(props: FormGroupProps) {
  const { labelName, label, type, value, onChange, disabled, error } = props

  return (
    <>
      <Box
        className={'form-group'}
        display={'flex'}
        justifyContent={'flex-start'}
        alignItems={'flex-start'}
        flexDirection={'column'}
        rowGap={'8px'}
      >
        <FormLabel htmlFor={label} sx={{ color: customTheme.palette.grey[900] }}>
          {labelName}
        </FormLabel>
        <InputBase
          className={`form-control ${error ? 'is-invalid' : ''} ${disabled ? 'form-disabled' : ''} `}
          type={type}
          name={label}
          id={label}
          placeholder={`Enter book ${label}`}
          value={value}
          onChange={onChange}
          disabled={disabled}
          sx={{
            '&.form-control': {
              width: '258px',
              height: '44px',
              padding: '10px 16px',
              borderRadius: '10px',
              border: '1px solid ' + palette.grey[400],
              background: '#FFF',
              fontSize: typography.base.fontSize,
              fontWeight: typography.base.fontWeight,
              lineHeight: typography.base.lineHeight,
              color: palette.grey[400]
            },

            '&.is-invalid': {
              border: '1px solid ' + palette.primary.main,
              marginBottom: '5px'
            },

            '&.form-disabled': {
              background: '#F8F9FA'
            }
          }}
        />
        {error && (
          <Typography
            variant='h5'
            component={'span'}
            sx={{ lineHeight: '18px', color: palette.primary.main, fontFamily: typography.base.fontFamily }}
          >
            {error}
          </Typography>
        )}
      </Box>
    </>
  )
}

export default FormGroup

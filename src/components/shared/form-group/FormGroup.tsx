import styled from 'styled-components';
import customTheme from '../../../theme';
import palette from '../../../theme/palette';
import typography from '../../../theme/typography';
import './formGroup.scss';

interface FormGroupProps {
  labelName: string;
  label: string;
  type: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  error?: string
}

const Label = styled('label')({
  color: customTheme.palette.grey[900],
})

const Input = styled('input')({
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
    color: palette.grey[400],
  },

  '&.is-invalid': {
    border: '1px solid ' + palette.primary.main,
    marginBottom: '5px',
  },

  '&.form-disabled': {
    background: '#F8F9FA',
  }
})

const Div = styled('div')({
  fontSize: typography.h5.fontSize,
  fontWeight: typography.h5.fontWeight,
  lineHeight: '18px',
  color: palette.primary.main,
})

function FormGroup(props: FormGroupProps) {
  const { labelName, label, type, value, onChange, disabled, error } = props;

  return (
    <>
      <div className="form-group">
        <Label htmlFor={label}>{labelName}</Label>
        <Input
          className={`form-control ${error ? 'is-invalid' : ''} ${disabled ? 'form-disabled' : ''} `}
          type={type}
          name={label}
          id={label}
          placeholder={`Enter book ${label}`}
          value={value}
          onChange={onChange}
          disabled={disabled} />
        {error && <Div className="invalid-feedback">{error}</Div>}
      </div>
    </>
  )
}

export default FormGroup
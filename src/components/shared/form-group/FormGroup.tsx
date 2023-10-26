import { on } from 'events';
import { useState } from 'react';
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

function FormGroup(props: FormGroupProps) {
  const { labelName, label, type, value, onChange, disabled, error } = props;

  return (
    <>
      <div className="form-group">
        <label htmlFor={label}>{labelName}</label>
        <input 
          className={`form-control ${error ? 'is-invalid' : ''} ${disabled ? 'form-disabled' : ''} `} 
          type={type} 
          name={label} 
          id={label} 
          placeholder={`Enter book ${label}`} 
          value={value} 
          onChange={onChange}
          disabled={disabled} />
        {error && <div className="invalid-feedback">{error}</div>}
      </div>
    </>
  )
}

export default FormGroup
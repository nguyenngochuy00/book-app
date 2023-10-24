import './formGroup.scss';

interface FormGroupProps {
  labelName: string;
  label: string;
  type: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function FormGroup(props: FormGroupProps) {
  const { labelName, label, type, value, onChange } = props;

  return (
    <>
      <div className="form-group">
        <label htmlFor={label}>{labelName}</label>
        <input className="form-control" type={type} name={label} id={label} placeholder={`Enter book ${label}`} value={value} onChange={onChange} />
      </div>
    </>
  )
}

export default FormGroup
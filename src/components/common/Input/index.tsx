import { InputHTMLAttributes } from 'react'
import * as S from './styles'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string
  error?: string
}

export const Input = ({ label, error, ...props }: InputProps) => {
  return (
    <S.InputLabel hasError={!!error}>
      <input placeholder=" " {...props} />
      <span>
        {label}
        {!!error && ` - ${error}`}
      </span>
    </S.InputLabel>
  )
}

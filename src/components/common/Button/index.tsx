import { ButtonHTMLAttributes, PropsWithChildren } from 'react'
import * as S from './styles'

export const Button = ({
  children,
  ...props
}: PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>) => {
  return <S.Button {...props}>{children}</S.Button>
}

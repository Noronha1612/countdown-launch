import * as S from './styles'

type CounterItemProps = {
  label: string
  value: number
}

export const CounterItem = ({ label, value }: CounterItemProps) => {
  return (
    <S.CounterItemContainer>
      <span>{label}</span>
      <strong>{value.toString().padStart(2, '0')}</strong>
    </S.CounterItemContainer>
  )
}

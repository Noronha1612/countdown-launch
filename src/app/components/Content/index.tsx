import { Button } from '../../../components/common/Button'
import { RegisterModalTrigger } from '../../../components/dialogs/RegisterModal'
import { Counter } from '../Counter'
import * as S from './styles'

export const Content = () => {
  return (
    <S.ContentContainer>
      <h1>Ready to lauch in...</h1>

      <Counter />

      <span>Inscreva-se para saber mais sobre o lançamento</span>

      <RegisterModalTrigger>
        <Button>Inscreva-se</Button>
      </RegisterModalTrigger>
    </S.ContentContainer>
  )
}

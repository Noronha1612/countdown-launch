import * as S from './styles'
import TopImage from '../assets/top-image.svg'
import RocketImage from '../assets/rocket.svg'
import BottomImage from '../assets/bottom-image.svg'
import { Content } from './components/Content'

export const App = () => {
  return (
    <S.Container>
      <img src={TopImage} alt="" className="fixed-top" />

      <S.MainSection>
        <Content />
        <img src={RocketImage} alt="Countdown Launch" />
      </S.MainSection>

      <img src={BottomImage} alt="" className="fixed-bottom" />
    </S.Container>
  )
}

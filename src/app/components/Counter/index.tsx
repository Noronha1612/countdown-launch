import { useSecondsToNextMonth } from '../../../hooks/useSecondsToNextMonth'
import { CounterItem } from '../CounterItem'
import * as S from './styles'

const MINUTES_DIVISOR = 60
const HOURS_DIVISOR = MINUTES_DIVISOR * 60
const DAYS_DIVISOR = HOURS_DIVISOR * 24

export const Counter = () => {
  const { seconds } = useSecondsToNextMonth()

  const minutes = Math.floor(seconds / MINUTES_DIVISOR)
  const hours = Math.floor(seconds / HOURS_DIVISOR)
  const days = Math.floor(seconds / DAYS_DIVISOR)

  const counterDays = days
  const counterHours = hours % 24
  const counterMinutes = minutes % 60
  const counterSeconds = seconds % 60

  return (
    <S.CounterContainer>
      <div>
        <CounterItem label="dias" value={counterDays} />
      </div>
      <div>
        <CounterItem label="horas" value={counterHours} />
      </div>
      <div>
        <CounterItem label="minutos" value={counterMinutes} />
      </div>
      <div>
        <CounterItem label="segundos" value={counterSeconds} />
      </div>
    </S.CounterContainer>
  )
}

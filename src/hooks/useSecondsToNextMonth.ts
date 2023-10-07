import dayjs from 'dayjs'
import { useEffect, useState } from 'react'

export const useSecondsToNextMonth = () => {
  const nextMonthFirstDate = dayjs(new Date())
    .set('seconds', 0)
    .set('minutes', 0)
    .set('hours', 0)
    .set('date', 1)
    .add(1, 'month')

  const differenceInSecondsToNextMonth = Math.abs(
    nextMonthFirstDate.diff(new Date(), 'seconds'),
  )

  const [seconds, setSeconds] = useState(differenceInSecondsToNextMonth)

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((previous) => previous - 1)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return {
    seconds,
  }
}

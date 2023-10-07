import { PropsWithChildren, useState } from 'react'

import * as Dialog from '@radix-ui/react-dialog'
import * as S from './styles'
import { RegisterForm } from './components/RegisterForm'

export const RegisterModalTrigger = ({ children }: PropsWithChildren) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <S.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>
      <Dialog.Portal>
        <S.Overlay />
        <S.Content>
          <RegisterForm onSubmitted={() => setIsOpen(false)} />
        </S.Content>
      </Dialog.Portal>
    </S.Root>
  )
}

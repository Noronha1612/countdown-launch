import { FormEvent, useState } from 'react'
import { Input } from '../../../../common/Input'
import { Button } from '../../../../common/Button'
import * as S from './styles'
import { ZodError, z } from 'zod'
import { ClockLoader } from 'react-spinners'

const RegisterFormSchema = z.object({
  name: z
    .string({ required_error: 'Campo obrigatório' })
    .min(3, { message: 'Mínimo 3 letras' }),

  email: z
    .string({ required_error: 'Campo obrigatório' })
    .email({ message: 'Formato inválido.' }),
})

type RegisterFormProps = {
  onSubmitted?: () => void
}

export const RegisterForm = ({ onSubmitted }: RegisterFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const [name, setName] = useState<string>()
  const [email, setEmail] = useState<string>()

  const [errors, setErrors] = useState({
    name: undefined,
    email: undefined,
  })

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const formData = RegisterFormSchema.parse({
        name,
        email,
      })

      setErrors({
        name: undefined,
        email: undefined,
      })

      await new Promise((resolve) => setTimeout(resolve, 2000)) // Simulate loading

      console.log(formData)

      onSubmitted?.()
    } catch (err) {
      if (err instanceof ZodError) {
        const fieldErrors = err.errors.reduce(
          (errorsAcc, error) => {
            const [fieldName] = error.path

            return {
              ...errorsAcc,
              [fieldName]: error.message,
            }
          },
          { name: undefined, email: undefined },
        )

        setErrors(fieldErrors)
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <S.Form onSubmit={handleSubmit}>
      <Input
        label="Nome"
        onChange={(e) => setName(e.target.value)}
        error={errors.name}
      />
      <Input
        label="E-Mail"
        onChange={(e) => setEmail(e.target.value)}
        error={errors.email}
      />

      <Button disabled={isSubmitting}>
        {isSubmitting ? <ClockLoader color="#FFF" size={20} /> : 'Enviar'}
      </Button>
    </S.Form>
  )
}

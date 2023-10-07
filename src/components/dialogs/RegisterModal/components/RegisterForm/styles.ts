import styled from 'styled-components'

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  gap: 1rem;
`

export const InputLabel = styled.label`
  all: unset;
  position: relative;
  cursor: text;

  border: 1px solid ${(props) => props.theme.colors.lightGrey};

  margin-top: 0;

  transition: margin-top 0.15s ease-in-out;

  border-radius: 8px;

  > span {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 1rem;
    font-size: 0.875rem;

    transition: 0.15s ease-in-out;
  }

  > input {
    min-width: 4rem;
    padding: 0.75rem 1rem;
    border: 0;
    background: none;
    outline: none;
  }

  &:has(input:focus),
  &:has(input:not(:placeholder-shown)) {
    margin-top: 0.75rem;
    border: 1px solid ${(props) => props.theme.colors.purple};
  }

  input:focus + span,
  input:not(:placeholder-shown) + span {
    top: 0%;
    transform: translateY(-125%);
    left: 0;
    font-weight: 300;
    font-size: 0.75rem;
  }
`

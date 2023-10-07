import styled, { css } from 'styled-components'

const errorCss = css`
  border: 1px solid ${(props) => props.theme.colors.danger};
  margin-top: 0.75rem;

  span {
    top: 0%;
    transform: translateY(-125%);
    left: 0;
    font-weight: 300;
    font-size: 0.75rem;
    color: ${(props) => props.theme.colors.danger};
  }

  &:has(input:focus),
  &:has(input:not(:placeholder-shown)) {
    border: 1px solid ${(props) => props.theme.colors.danger};
  }
`

export const InputLabel = styled.label<{ hasError?: boolean }>`
  position: relative;
  cursor: text;

  min-width: 6rem;
  border: 1px solid ${(props) => props.theme.colors.lightGrey};
  border-radius: 8px;

  margin-top: 0;

  transition: margin-top 0.15s ease-in-out;

  > span {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 1rem;
    font-size: 0.875rem;

    transition:
      transform 0.15s ease-in-out,
      top 0.15s ease-in-out,
      left 0.15s ease-in-out,
      font-size 0.15s ease-in-out;
  }

  > input {
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

  ${({ hasError }) => hasError && errorCss}
`

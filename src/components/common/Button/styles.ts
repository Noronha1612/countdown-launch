import styled from 'styled-components'

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 10px;

  padding: 0.75rem 2rem;
  border: 0;

  background-color: ${(props) => props.theme.colors.purple};
  color: #fff;

  cursor: pointer;

  transition: filter 0.3s;

  :disabled {
    pointer-events: none;
    filter: brightness(0.9);
  }

  :hover {
    filter: brightness(1.2);
  }
`

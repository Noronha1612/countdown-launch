import styled from 'styled-components'

export const CounterItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  > span {
    color: ${(props) => props.theme.colors.lightGrey};
    font-size: 0.875rem;
    font-weight: 300;
    text-transform: capitalize;
  }

  > strong {
    color: ${(props) => props.theme.colors.black};
    font-size: 4.5rem;
    font-weight: 400;
  }
`

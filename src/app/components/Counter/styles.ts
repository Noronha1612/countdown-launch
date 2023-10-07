import styled from 'styled-components'

export const CounterContainer = styled.div`
  display: flex;

  > div {
    display: flex;
    align-items: flex-end;
  }

  > div + div::before {
    content: ':';
    margin: 0 1rem;

    color: ${(props) => props.theme.colors.black};
    font-size: 4.5rem;
    font-weight: 400;
  }
`

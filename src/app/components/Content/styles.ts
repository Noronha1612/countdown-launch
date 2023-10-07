import styled from 'styled-components'

export const ContentContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;

  > h1 {
    font-size: 2.25rem;
    color: ${(props) => props.theme.colors.purple};

    letter-spacing: 6px;
    text-transform: uppercase;
  }

  > span {
    font-size: 0.875rem;
    color: ${(props) => props.theme.colors.textColor};
    font-weight: 300;
  }
`

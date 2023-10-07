import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;

  > img {
    position: fixed;
    left: 0;
    right: 0;
    width: 100vw;
  }

  > img.fixed-top {
    top: 0;
  }

  > img.fixed-bottom {
    bottom: 0;
  }
`

export const MainSection = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;

  margin: 0 auto;
`

import styled from 'styled-components'

export const Content = styled.section`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  max-width: var(--container);
  margin: auto;
`

export const Heading = styled.h1`
  font-size: var(--large);
  margin-bottom: var(--large);
`

export const Body = styled.div`
  padding: var(--medium);
  margin-bottom: var(--large);

  p {
    font-size: var(--medium);
    margin-bottom: var(--medium);
  }

  a {
    font-size: var(--medium);
    text-decoration: none;
    color: var(--background);
  }
`

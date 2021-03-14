import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: var(--large) var(--medium);
`

export const Container = styled.section`
  max-width: var(--container);
  margin: auto;
`

export const Heading = styled.h1`
  font-size: var(--large);
  margin-bottom: var(--large);
`

export const Body = styled.div`
  margin-bottom: var(--large);
  text-align: justify;
  text-justify: inter-word;

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

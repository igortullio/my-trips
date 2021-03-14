import { NextSeo } from 'next-seo'
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'
import LinkWrapper from 'components/LinkWrapper'

import * as S from './styles'

export type PageTemplateProps = {
  heading: string
  body: string
}

const PageTemplate = ({ heading, body }: PageTemplateProps) => (
  <>
    <NextSeo
      title={`${heading} - My Trips`}
      canonical="https://my-trips.igortullio.com.br"
      openGraph={{
        url: 'https://my-trips.igortullio.com.br',
        title: `${heading} - My Trips`
      }}
    />
    <S.Wrapper>
      <S.Container>
        <LinkWrapper href="/">
          <CloseOutline size={32} aria-label="Go back to map" />
        </LinkWrapper>

        <S.Heading>{heading}</S.Heading>

        <S.Body>
          <div dangerouslySetInnerHTML={{ __html: body }}></div>
        </S.Body>
      </S.Container>
    </S.Wrapper>
  </>
)

export default PageTemplate

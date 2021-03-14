import dynamic from 'next/dynamic'
import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline'
import { NextSeo } from 'next-seo'

import LinkWrapper from 'components/LinkWrapper'
import { MapProps } from 'components/Map'

const Map = dynamic(() => import('components/Map'), { ssr: false })

export default function HomeTemplate({ places }: MapProps) {
  return (
    <>
      <NextSeo
        title="My trips"
        description="A project to show my trips"
        canonical="https://my-trips.igortullio.com.br"
      />
      <LinkWrapper href="/sobre">
        <InfoOutline size={32} aria-label="About" />
      </LinkWrapper>
      <Map places={places} />
    </>
  )
}

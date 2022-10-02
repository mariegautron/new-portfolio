import { SliceZone } from '@prismicio/react'
import { NextPage } from 'next'

import { createClient } from '../prismicio'
import { components } from '../slices'

const Page: NextPage<any> = ({ page, navigation, settings }) => {
  return <SliceZone slices={page.data.slices} components={components} />
}

export default Page;

export async function getStaticProps({ previewData }: any) {
  const client = createClient({ previewData })

  const page = await client.getSingle('home')

  return {
    props: {
      page,
    },
  }
}
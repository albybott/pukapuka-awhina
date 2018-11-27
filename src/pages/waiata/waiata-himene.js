import React from 'react'
import Layout from '../../components/Layout/Layout'
import PukapukaItem from '../../components/PukapukaItem/PuakapukaItem'

const heading = { title: 'WAIATA HIMENE' }

const lines = [
  { maori: 'He korōria' },
  { maori: 'Maunga rongo ki te whenua' },
  { maori: 'Whakaaro pai e' },
  { maori: 'Ki ngā tāngata katoa' },
  { maori: 'Ake ake, ake ake, āmene' },
  { maori: 'Te Atua, te piringa, tōku oranga' },
]

const IndexPage = props => (
  <Layout location={props.location}>
    <PukapukaItem heading={heading} lines={lines} />
  </Layout>
)

export default IndexPage

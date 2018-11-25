import React from 'react'
import Layout from '../../components/layout/Layout'
import PukapukaItem from '../../components/PuakapukaItem'

const title = { maori: 'OPENING PRAYER' }

const lines = [
  { maori: 'E te Atua', eng: 'Oh Creator of all things' },
  { maori: 'Manaakitia mātou', eng: 'watch over us' },
  { maori: 'Arahina mai', eng: 'guide and lead' },
  { maori: 'I ā mātou i roto i a mātou mahi', eng: 'us in all our duties' },
  { maori: 'Mō tēnei rā', eng: 'for today' },
  { maori: 'Korōria ki tōu ingoa tapu', eng: 'Glory to your holy name' },
  { maori: 'Āmene', eng: 'Let it be so' },
]

const IndexPage = props => (
  <Layout location={props.location}>
    <PukapukaItem title={title} lines={lines} />
  </Layout>
)

export default IndexPage

import React from 'react'
import Layout from '../../components/Layout/Layout'
import PukapukaItem from '../../components/PukapukaItem/PuakapukaItem'

const title = { maori: 'PRAYER FOR BLESSING A HOUSE' }

const lines = [
  { maori: 'E te Atua', eng: 'Oh Creator of all things' },
  {
    maori: 'Tukua mai koa tōu korowai arohā',
    eng: 'lay your mantle of peace and love ',
  },
  {
    maori: 'Ki runga i tēnei whare',
    eng: 'upon this dwelling',
  },
  { maori: 'Ki roto ki tēnei ruma', eng: 'and inside this room' },
  { maori: 'Tiakina mai koa e te Atua', eng: 'Oh Creator look and watch over' },
  {
    maori: 'Ngā tāngata e noho nei ki tēnei whare',
    eng: 'those who reside in this house',
  },
  { maori: 'Kia tau mai te rangimarie mē te arohānui', eng: 'the' },
  { maori: 'Ko koe rā tō mātou kaiwhakaora', eng: 'For you are our protector' },
  { maori: 'Korōria ki tōu ingoa tapu	', eng: 'Glory to your holy name' },
  { maori: 'Āmene', eng: 'Let it be so' },
]

const IndexPage = props => (
  <Layout location={props.location}>
    <PukapukaItem title={title} lines={lines} />
  </Layout>
)

export default IndexPage

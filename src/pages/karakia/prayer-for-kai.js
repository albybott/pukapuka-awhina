import React from 'react'
import Layout from '../../components/Layout/Layout'
import PukapukaItem from '../../components/PukapukaItem/PuakapukaItem'

const title = { maori: 'PRAYER FOR KAI' }

const lines = [
  { maori: 'E te Atua', eng: 'Oh Creator of all things' },
  { maori: 'Whakapaingia ēnei kai', eng: 'Bless this food' },
  {
    maori: 'Hei oranga mō o mātou tinana',
    eng: 'that will give our body sustenance ',
  },
  {
    maori: 'Whāngaia hoki ō mātou wairua',
    eng: 'that nourishes our spiritual wellbeing ',
  },
  {
    maori: 'ki te taro o te ora, ko koe rā',
    eng: 'the food of life, for you are',
  },
  { maori: 'tō mātou kaiwhakaora', eng: 'the giver of life' },
  { maori: 'Korōria ki tōu ingoa tapu	', eng: 'Glory to your holy name' },
  { maori: 'Āmene', eng: 'Let it be so' },
]

const IndexPage = props => (
  <Layout location={props.location}>
    <PukapukaItem title={title} lines={lines} />
  </Layout>
)

export default IndexPage

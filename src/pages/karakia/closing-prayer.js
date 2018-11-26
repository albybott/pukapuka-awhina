import React from 'react'
import Layout from '../../components/Layout/Layout'
import PukapukaItem from '../../components/PukapukaItem/PuakapukaItem'

const title = { maori: 'CLOSING PRAYER' }

const lines = [
  { maori: 'E te Atua, e whakawhetai ana mātou', eng: 'Oh Creator, we thank' },
  {
    maori: 'ki koe mō āu manaakitanga katoa',
    eng: 'you for all your kindness',
  },
  { maori: 'I tukua mai ki runga i a mātou', eng: 'That you bestowed upon us' },
  {
    maori: 'Ngā mea tika, ngā mea pono',
    eng: 'righteousness and truthfulness',
  },
  {
    maori: 'Otirā tōu arohā nui ki a mātou',
    eng: 'also your unconditional love for us',
  },
  { maori: 'Korōria ki tōu ingoa tapu', eng: 'Glory to your holy name' },
  { maori: 'Āmene', eng: 'Let it be so' },
]

const IndexPage = props => (
  <Layout location={props.location}>
    <PukapukaItem title={title} lines={lines} />
  </Layout>
)

export default IndexPage

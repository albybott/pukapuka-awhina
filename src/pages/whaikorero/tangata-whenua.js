import React from 'react'
import Layout from '../../components/Layout/Layout'
import PukapukaItem from '../../components/PukapukaItem/PuakapukaItem'

const heading = {
  title: 'HE MIHI: TANGATA WHENUA',
  translation: 'A SPEECH AS A HOST',
}

const lines = [
  {
    maori: 'Ka tangi te tītī, ka tangi te kākā',
    eng: 'The tītī bird cries, the kākā bird cries',
  },
  { maori: 'Ka tangi hoki ko au	', eng: 'I speak out also' },
  { maori: 'Tihei Mauri Ora', eng: 'I breath it is life' },
  {
    maori: 'Ko te mihi tuatahi, ki te Atua, tēnā koe',
    eng: 'Firstly I acknowledge the Creator ',
  },
  {
    maori: 'Ko te mihi tuarua, ki a kīngi Tūheitia, Pai Mārire',
    eng: 'Secondly I acknowledge King Tuheitia',
  },
  {
    maori: 'Ko te mihi tuatoru, ki te hunga mate',
    eng: 'Thirdly to those who have passed on',
  },
  { maori: 'Haere, haere, haere atu rā', eng: 'Go, go, farewell ' },
  {
    maori: 'Āpiti hono, tātai hono, rātou te hunga mate ki a rātou',
    eng: 'The dead to the dead',
  },
  {
    maori: 'Āpiti hono, tātai hono, tātou te hunga ora ki a tātou',
    eng: 'The living to the living',
  },
  {
    maori: 'E ngā mana, e ngā reo, e ngā karangaranga maha',
    eng: 'Welcome to you my guests',
  },
  {
    maori: 'Nau mai, haere mai, whakatau mai, nā reira,',
    eng: 'Welcome here to this place',
  },
  {
    maori: 'Tēnā koutou, tēnā koutou, tēnā koutou katoa.',
    eng: 'I acknowledge you all',
  },
]

const IndexPage = props => (
  <Layout location={props.location}>
    <PukapukaItem heading={heading} lines={lines} />
  </Layout>
)

export default IndexPage

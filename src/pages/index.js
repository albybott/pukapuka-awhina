import React from 'react'
import Layout from '../components/Layout/Layout'
import MainHeading from '../components/MainHeading'
import styled from 'styled-components'

const MihiLine = styled.p`
  margin: 0;
`
const Message = styled.p`
  margin: 0.5rem 0;
`

const SignLine = styled.p`
  margin: 0.5rem 0;
  font-weight: bold;
`

const CreatedLine = styled.p`
  margin: 2rem 0 0 0;
`

const IndexPage = props => (
  <Layout location={props.location}>
    <MainHeading>He Mihi</MainHeading>
    <MihiLine>E ngā mana,</MihiLine>
    <MihiLine>E ngā reo,</MihiLine>
    <MihiLine>E ngā karangaranga maha,</MihiLine>
    <MihiLine>Tenā koutou katoa,</MihiLine>
    <Message>
      Kia ora! This site was created by Ngā Mataapuna Oranga in Tauranga Moana.
      It was developed to assist whanau that may not have access to kaumātua or
      support people to facilitate basic karakia, mihimihi, karanga, waiata and
      whakatauki.
    </Message>
    <MihiLine>Nā reira, kia kaha, kia maia</MihiLine>
    <MihiLine>Kia manawanui tonu.</MihiLine>
    <MihiLine>Mauri ora, Mauri tau!</MihiLine>
    <SignLine>Nā Janice Kuka</SignLine>
    <CreatedLine>Created By: Reweti Te Mete</CreatedLine>
  </Layout>
)

export default IndexPage

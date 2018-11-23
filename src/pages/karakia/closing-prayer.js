import React from 'react'
import Layout from '../../components/layout/Layout'
import { Box } from 'rebass'
import styled from 'styled-components'

const PukapukaItem = styled(Box)`
  h1 {
    color: black;
  }

  p {
    margin: 0.5rem 0;
  }
`

const IndexPage = props => (
  <Layout location={props.location}>
    <PukapukaItem>
      <h1>CLOSING PRAYER</h1>

      <p>E te Atua, e whakawhetai ana mātou</p>
      <p>Manaakitia mātou</p>
      <p>Arahina mai</p>
      <p>I ā mātou i roto i a mātou mahi </p>
      <p>Mō tēnei rā </p>
      <p>Korōria ki tōu ingoa tapu</p>
      <p>Āmene</p>
    </PukapukaItem>
  </Layout>
)

export default IndexPage

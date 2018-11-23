import React from 'react'
import Layout from '../../components/layout/Layout'

const IndexPage = ({ location }) => (
  <Layout>
    <h1>{location.pathname}</h1>
  </Layout>
)

export default IndexPage

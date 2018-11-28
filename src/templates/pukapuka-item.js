import React from 'react'
import Layout from '../components/Layout/Layout'
import PukapukaItem from '../components/PukapukaItem/PuakapukaItem'

export default ({ location, pageContext: { item } }) => (
  <Layout location={location}>
    <PukapukaItem item={item} />
  </Layout>
)

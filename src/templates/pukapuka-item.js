import React from 'react'
import Layout from '../components/Layout/Layout'
import PukapukaItem from '../components/PukapukaItem/PuakapukaItem'

export default ({ pageContext: { item } }) => (
  <Layout>
    <PukapukaItem heading={item.heading} lines={item.lines} />
  </Layout>
)

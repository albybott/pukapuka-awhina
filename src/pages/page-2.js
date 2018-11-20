import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout/Layout'
import Image from '../components/Image'

const SecondPage = () => (
  <Layout>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage

import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout/Layout'

const IndexPage = () => (
  <Layout>
    <div class="css-varhqf ">
      <h1 id="get-started" class="css-8kn4zf">Get started</h1>

      <p>Gatsby is a blazing fast modern site generator for React.</p>
      <p>This quick start is intended for intermediate to advanced developers. For a gentler intro to Gatsby,
      <a href="/tutorial/">head to our tutorial!</a></p>

      <h2>Install Gatsby's command line tool</h2>

      <p><code>npm install --global gatsby-cli</code></p>

      <h2 id="using-the-gatsby-cli">Using the Gatsby CLI</h2><ol><li><p>Create a new site.</p><div class="gatsby-highlight" data-language="bash"><pre class="language-bash"><code class="language-bash">gatsby new gatsby-site</code></pre></div></li><li><code>cd gatsby-site</code></li><li><code>gatsby develop</code> — Gatsby will start a hot-reloading development environment accessible at <code>localhost:8000</code></li><li>Try editing the JavaScript pages in <code>src/pages</code>. Saved changes will live reload in the browser.</li><li><code>gatsby build</code> — Gatsby will perform an optimized production build for your site generating static HTML and per-route JavaScript code bundles.</li><li><code>gatsby serve</code> — Gatsby starts a local HTML server for testing your built site.</li></ol><p>To see detailed documentation for the CLI commands, run in the terminal <code>gatsby --help</code> and for specific commands <code>gatsby COMMAND_NAME --help</code> e.g. <code>gatsby develop --help</code>.</p><h2 id="using-other-starters">Using other starters</h2><p>Running <code>gatsby new</code> installs the default Gatsby starter. There are <a href="/docs/gatsby-starters/">many other official and community starters</a> you can use to kickstart building your Gatsby site.</p><h2 id="work-through-the-tutorial">Work through the tutorial</h2><p>It walks you through building a Gatsby site from scratch to a finished polished site. <a href="/tutorial/">Go to the tutorial</a>.</p><div class="css-18qzbjo"><h2>Documentation</h2></div><div class="css-n67f6h"><div><p>Want to keep up with the latest tips &amp; tricks? Subscribe to our newsletter!</p></div></div></div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage

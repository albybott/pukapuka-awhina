/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const data = require('./data.js')

exports.createPages = async ({ actions: { createPage } }) => {
  console.log('Creating Pukapuka Pages...')

  data.items.forEach(item => {
    item.slug = item.heading.title
      .toLowerCase()
      .split(' ')
      .join('-')

    createPage({
      path: `/${item.group.toLowerCase()}/${item.slug}/`,
      component: require.resolve('./src/templates/pukapuka-item.js'),
      context: { item },
    })
  })
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  if (node.internal.type === `SitePage` && node.context) {
    const { createNodeField } = actions

    if (node.context.hasOwnProperty('item')) {
      createNodeField({
        node,
        name: `title`,
        value: node.context.item.heading.title,
      })

      createNodeField({
        node,
        name: `group`,
        value: node.context.item.group,
      })
    }
  }
}

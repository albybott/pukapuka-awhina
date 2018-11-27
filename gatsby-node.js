/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const data = require('./src/data/data.js')

/**
 * remove invalid characters from a string so that is is valid for page path
 * @param {string to convert} str
 */
const createPathString = str => {
  return str
    .toLowerCase()
    .split(' ')
    .join('-')
    .replace(/[\[\]&\:]+/g, '')
}

exports.createPages = async ({ actions: { createPage } }) => {
  console.log('Creating Pukapuka Pages...')

  data.items.forEach(item => {
    item.slug = createPathString(item.heading.title)
    item.root = createPathString(item.group)

    createPage({
      path: `/${item.root}/${item.slug}/`,
      component: require.resolve('./src/templates/pukapuka-item.js'),
      context: { item },
    })
  })
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  if (node.internal.type === `SitePage` && node.context) {
    const { createNodeField } = actions

    if (node.context.hasOwnProperty('item')) {
      console.log(`Creating Node fields for ${node.context.item.heading.title}`)

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
